// src/components/SharedFiles.jsx
import React, {
  useCallback,
  useEffect,
  useState,
  useRef,
  useMemo,
} from "react";
import { useSocket } from "../contexts/SocketContext";
import { useParams } from "react-router-dom";
import { useFirebase } from "../firebase/FirebaseContext";
import DownloadIcon from "@mui/icons-material/Download";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { CircularProgress, IconButton, Tooltip } from "@mui/material";
import BackgroundLetterAvatars from "./Avatar";
import { useTheme } from "../contexts/ThemeContext";

/**
 * Robust SharedFiles component
 * - Ensures loading flags are always resolved (true -> false)
 * - Avoids stale responses via requestId
 * - Throttles socket-driven reloads
 * - Cleans up socket listeners correctly
 */
function SharedFiles({
  showFiles,
  pushTo,
  roomOwner,
  isOwner,
}) {
  const socket = useSocket();
  const { roomId } = useParams();
  const firebase = useFirebase();
  const { theme } = useTheme();

  // Data
  const [mediaFiles, setMediaFiles] = useState([]);
  const [members, setMembers] = useState([]);

  // Loading flags grouped to reduce state noise
  const [loading, setLoading] = useState({ media: true, members: true });

  // Other state
  const [mediaCount, setMediaCount] = useState(0);
  const [kickingMemberId, setKickingMemberId] = useState(null);

  // refs to avoid stale closures and for cleanup
  const isMountedRef = useRef(true);
  const mediaRequestIdRef = useRef(0);
  const membersRequestIdRef = useRef(0);

  // Throttle socket-triggered fetches (ms)
  const lastMediaFetchRef = useRef(0);
  const lastMembersFetchRef = useRef(0);
  const THROTTLE_MS = 500;

  // stable refs for socket handlers so we can .off(...) reliably
  const handlersRef = useRef({
    media: null,
    receiveMember: null,
    memberJoined: null,
    kickout: null,
    memberLogout: null,
  });

  // mark mounted/unmounted
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  // Fetch media count (best-effort) to compare with current mediaFiles length
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const count = await firebase.getFileCount(roomId);
        if (mounted) setMediaCount((prev) => (prev === count ? prev : count));
      } catch (e) {
        console.error("getFileCount failed:", e);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [firebase, roomId]);

  // ---------- Helpers to safely update state ----------
  const safeSetMedia = useCallback((cb) => {
    if (!isMountedRef.current) return;
    setMediaFiles(cb);
  }, []);

  const safeSetMembers = useCallback((cb) => {
    if (!isMountedRef.current) return;
    setMembers(cb);
  }, []);

  const setLoadingState = useCallback((patch) => {
    if (!isMountedRef.current) return;
    setLoading((prev) => ({ ...prev, ...patch }));
  }, []);

  // ---------- Process results (ignore stale by requestId) ----------
  const processMediaFiles = useCallback(
    (list, requestId) => {
      // ignore stale responses
      if (requestId !== mediaRequestIdRef.current) return;
      try {
        const files = Array.isArray(list)
          ? list.map((e) => {
              // safe split - file may not contain "time:"
              const parts = (e.filename || "").split("time:");
              const time = parts.length > 1 ? parts[0] : "";
              const filename = parts.length > 1 ? parts[1] : parts[0];
              return { filename: filename || "unknown", time: time || "", downloadUrl: e.downloadUrl };
            })
          : [];
        safeSetMedia(() => files);
      } catch (err) {
        console.error("processMediaFiles error:", err);
        safeSetMedia(() => []);
      } finally {
        setLoadingState({ media: false });
      }
    },
    [safeSetMedia, setLoadingState]
  );

  const processMembers = useCallback(
    (list, requestId) => {
      if (requestId !== membersRequestIdRef.current) return;
      try {
        const normalized = Array.isArray(list) ? list : [];
        safeSetMembers(() => normalized);
      } catch (err) {
        console.error("processMembers error:", err);
        safeSetMembers(() => []);
      } finally {
        setLoadingState({ members: false });
      }
    },
    [safeSetMembers, setLoadingState]
  );

  // ---------- Loaders (increment requestId to invalidate previous) ----------
  const loadMediaFiles = useCallback(async () => {
    // throttle
    const now = Date.now();
    if (now - lastMediaFetchRef.current < THROTTLE_MS) return;
    lastMediaFetchRef.current = now;

    mediaRequestIdRef.current += 1;
    const reqId = mediaRequestIdRef.current;

    setLoadingState({ media: true });
    try {
      // firebase.getMediaFiles expects (room_id, callback)
      // we'll wrap callback to include requestId
      await firebase.getMediaFiles(roomId, (list) => processMediaFiles(list, reqId), setLoadingState?.bind?.(null));
      // Some implementations of getMediaFiles may return early without calling callback (defensive):
      // If it didn't call callback in a timely manner, we still want to set loading=false below.
    } catch (err) {
      console.error("loadMediaFiles error:", err);
      // ensure we clear loading and media array on error
      if (reqId === mediaRequestIdRef.current) {
        safeSetMedia(() => []);
        setLoadingState({ media: false });
      }
    }
  }, [firebase, roomId, processMediaFiles, setLoadingState, safeSetMedia]);

  const loadMembers = useCallback(async () => {
    const now = Date.now();
    if (now - lastMembersFetchRef.current < THROTTLE_MS) return;
    lastMembersFetchRef.current = now;

    membersRequestIdRef.current += 1;
    const reqId = membersRequestIdRef.current;

    setLoadingState({ members: true });
    try {
      await firebase.getMembers(roomId, (list) => processMembers(list, reqId));
    } catch (err) {
      console.error("loadMembers error:", err);
      if (reqId === membersRequestIdRef.current) {
        safeSetMembers(() => []);
        setLoadingState({ members: false });
      }
    }
  }, [firebase, roomId, processMembers, safeSetMembers, setLoadingState]);

  // ---------- Download helper ----------
  const handleDownload = useCallback((file) => {
    if (!file || !file.downloadUrl) {
      alert("File not available");
      return;
    }
    try {
      const a = document.createElement("a");
      a.href = file.downloadUrl;
      a.download = file.filename || "download";
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (err) {
      console.error("Download failed:", err);
      alert("Download failed, try again.");
    }
  }, []);

  // ---------- Kick helper ----------
  const handleKick = useCallback(
    async (member) => {
      if (!member?.id || kickingMemberId) return;
      setKickingMemberId(member.id);
      try {
        await firebase.removeParticipant(roomId, member.id);
        socket.emit("kickout", { roomId, user: member.username });
        // refresh members after a small delay to let RTDB settle
        setTimeout(() => {
          loadMembers();
        }, 300);
      } catch (err) {
        console.error("handleKick error:", err);
      } finally {
        setKickingMemberId(null);
      }
    },
    [firebase, kickingMemberId, roomId, socket, loadMembers]
  );

  // ---------- Socket listeners setup & cleanup ----------
  useEffect(() => {
    // create stable handlers and save to ref
    const handlers = {
      media: () => loadMediaFiles(),
      receiveMember: () => loadMembers(),
      memberJoined: ({ username, id } = {}) => {
        // If server sends full members list via "receiveMember", prefer that.
        // For a single join, we add optimistically.
        if (!username) {
          loadMembers();
          return;
        }
        // avoid duplicates
        setMembers((prev) => {
          if (prev.some((m) => m.username === username || m.id === id)) return prev;
          return [...prev, { username, id }];
        });
      },
      kickout: async (data = {}) => {
        // kickout -> refresh members. also, check if current user was kicked
        loadMembers();
        // If server meant to force-logout this client, call the value-checker
        if (data) {
          // onValueChange will call callback when node changes; we provide a callback that checks existence
          try {
            await firebase.onValueChange(roomId, async (id) => {
              try {
                const exists = await firebase.isMeExist(roomId, id);
                if (exists) pushTo("/");
              } catch (e) {
                console.error("kickout isMeExist check failed", e);
              }
            });
          } catch (e) {
            console.warn("onValueChange failed in kickout handler", e);
          }
        }
      },
      memberLogout: () => loadMembers(),
    };

    handlersRef.current = handlers;

    // attach handlers
    if (socket) {
      socket.on("media-file", handlers.media);
      socket.on("recieve-member", handlers.receiveMember);
      socket.on("member-joined", handlers.memberJoined);
      socket.on("kickout", handlers.kickout);
      socket.on("member-logout", handlers.memberLogout);
    }

    // cleanup
    return () => {
      if (socket && handlersRef.current) {
        socket.off("media-file", handlersRef.current.media);
        socket.off("recieve-member", handlersRef.current.receiveMember);
        socket.off("member-joined", handlersRef.current.memberJoined);
        socket.off("kickout", handlersRef.current.kickout);
        socket.off("member-logout", handlersRef.current.memberLogout);
      }
    };
  }, [socket, loadMediaFiles, loadMembers, firebase, roomId, pushTo]);

  // ---------- When showFiles toggles -> fetch fresh if needed ----------
  useEffect(() => {
    if (!showFiles) return;

    // members: fetch if unknown or empty
    if (!members.length) {
      loadMembers();
    }

    // media: fetch if count mismatch or empty
    if (!mediaFiles.length || mediaFiles.length !== mediaCount) {
      loadMediaFiles();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showFiles, roomId]); // intentionally minimal deps so toggling triggers fresh load

  // ---------- Auto-scroll behavior ----------
  const listRef = useRef(null);
  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const nearBottom =
      el.scrollHeight - el.scrollTop - el.clientHeight < 50;
    if (nearBottom) {
      el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
    }
  }, [mediaFiles]);

  // ---------- small render helpers ----------
  const renderSkeleton = (count = 4) =>
    Array.from({ length: count }).map((_, i) => (
      <div key={i} className="h-8 bg-gray-300 animate-pulse rounded mb-2" />
    ));

  // Memoized classes for theme
  const containerClass = useMemo(
    () =>
      `w-full lg:w-[350px] overflow-scroll ${theme === "light" ? "extralight" : "darklight"} h-full mt-2 p-1 rounded-md`,
    [theme]
  );

  return (
    <aside className={containerClass} aria-label={showFiles ? "Shared files" : "Room members"}>
      {showFiles ? (
        <ul
          className="w-[95%] max-h-[400px] mx-auto p-2"
          ref={listRef}
          style={{ maxHeight: 400, overflowX: "hidden" }}
        >
          {/* Empty states */}
          {!loading.media && mediaFiles.length === 0 && (
            <p className="text-center text-gray-400 p-4">No files shared yet.</p>
          )}

          {/* Files list */}
          {mediaFiles.map((file, i) => (
            <li
              key={`media-${i}`}
              role="button"
              tabIndex={0}
              onClick={() => handleDownload(file)}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleDownload(file)}
              aria-label={`Download file ${file.filename}`}
              className={`media-item text-white w-full ${theme === "light" ? "light-item-3" : "dark-item-3"} my-1 rounded-md p-2`}
              style={{ cursor: "pointer" }}
            >
              <div className="text-lg break-words font-semibold">{file.filename}</div>
              <div className="flex w-full gap-2 p-1 justify-end items-center">
                <p className="w-full text-sm text-right opacity-80">{file.time}</p>
                <Tooltip title="Download file" arrow>
                  <DownloadIcon style={{ border: "1px solid white", borderRadius: ".55rem", padding: 2 }} />
                </Tooltip>
              </div>
            </li>
          ))}

          {/* Loading */}
          {loading.media && (mediaFiles.length ? (
            <div className="w-full flex items-center justify-center py-2">
              <CircularProgress size={30} />
            </div>
          ) : (
            <div className="w-full p-4">{renderSkeleton(5)}</div>
          ))}
        </ul>
      ) : (
        <ul className="w-[95%] max-h-[400px] mx-auto p-2">
          {!loading.members && members.length === 0 && (
            <p className="text-center text-gray-400 p-4">No members found.</p>
          )}

          {members.map((member, i) => (
            <li
              key={`member-${i}`}
              className={`w-full flex items-center justify-between px-2 text-white ${theme === "light" ? "light-item-3" : "dark-item-3"} m-1 rounded-md p-2`}
            >
              <div className="flex gap-2 items-center">
                <BackgroundLetterAvatars username={member.username} size="30px" />
                <p className="font-semibold tracking-wider">{member.username}</p>
              </div>

              {/* Owner vs member control */}
              {!isOwner || roomOwner === member.username ? (
                <span className="relative flex h-3 w-3 right-3" aria-label="Online status" title="Online">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              ) : (
                <Tooltip title={`Kick ${member.username}`} arrow>
                  <span>
                    <IconButton
                      onClick={() => handleKick(member)}
                      disabled={!!kickingMemberId}
                      size="small"
                    >
                      {kickingMemberId === member.id ? <CircularProgress size={20} /> : <RemoveCircleOutlineIcon style={{ color: "red" }} />}
                    </IconButton>
                  </span>
                </Tooltip>
              )}
            </li>
          ))}

          {loading.members && (members.length ? (
            <div className="w-full flex items-center justify-center py-2">
              <CircularProgress size={30} />
            </div>
          ) : (
            <div className="w-full p-4">{renderSkeleton(3)}</div>
          ))}
        </ul>
      )}
    </aside>
  );
}

export default React.memo(SharedFiles);
