import React, { useCallback, useEffect, useState, useRef } from "react";
import { useSocket } from "../contexts/SocketContext";
import { useParams } from "react-router-dom";
import { useFirebase } from "../firebase/FirebaseContext";
import DownloadIcon from "@mui/icons-material/Download";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { CircularProgress, IconButton, Tooltip } from "@mui/material";
import BackgroundLetterAvatars from "./Avatar";
import { useTheme } from "../contexts/ThemeContext";

function SharedFiles({
  showFiles,
  pushTo,
  roomOwner,
  setIsChatWithAI,
  isOwner,
}) {
  const socket = useSocket();
  const { roomId } = useParams();
  const firebase = useFirebase();
  const { theme } = useTheme();

  const [mediaFiles, setMediaFiles] = useState([]);
  const [members, setMembers] = useState([]);
  const [isMediaLoading, setIsMediaLoading] = useState(true);
  const [isMembersLoading, setIsMembersLoading] = useState(true);
  const [isKickLoading, setIsKickLoading] = useState(false);
  const [mediaCount, setMediaCount] = useState(0);
  const [kickingMemberId, setKickingMemberId] = useState(null);
  const mediaListRef = useRef(null);

  // Fetch media count on mount or when roomId changes
  useEffect(() => {
    let mounted = true;
    const fetchCount = async () => {
      try {
        const count = await firebase.getFileCount(roomId);
        if (mounted) setMediaCount(count);
      } catch (err) {
        console.error("Error fetching file count:", err);
      }
    };
    fetchCount();
    return () => {
      mounted = false;
    };
  }, [firebase, roomId]);

  // Callback to process media files
  const processMediaFiles = useCallback((list) => {
    const newArr = list.map((e) => {
      const [time, filename] = e.filename.split("time:");
      return { filename, time, downloadUrl: e.downloadUrl };
    });
    setMediaFiles(newArr);
    setIsMediaLoading(false);
  }, []);

  // Callback to process members list
  const processMembers = useCallback((list) => {
    setMembers(list);
    setIsMembersLoading(false);
  }, []);

  // Media files listener from socket
  const mediaFileListener = useCallback(() => {
    setIsMediaLoading(true);
    firebase.getMediaFiles(roomId, processMediaFiles);
  }, [firebase, roomId, processMediaFiles]);

  // Members listener from socket
  const receiveMemberListener = useCallback(() => {
    setIsMembersLoading(true);
    firebase.getMembers(roomId, processMembers);
  }, [firebase, roomId, processMembers]);

  // Handle file download
  const handleDownload = (file) => {
    try {
      const downloadLink = document.createElement("a");
      downloadLink.href = file.downloadUrl;
      downloadLink.download = file.filename;
      downloadLink.click();
    } catch (err) {
      console.error("Download failed:", err);
      alert("Download failed. Please try again!");
    }
  };

  // Toggle Chat With AI (functionality commented out in your snippet)
  const handleAI = () => setIsChatWithAI((prev) => !prev);

  // Handle kicking a member
  const handleKick = async (member) => {
    if (kickingMemberId) return;
    setKickingMemberId(member.id);
    await firebase.removeParticipant(roomId, member.id);
    socket.emit("kickout", { roomId, user: member.username });
    setKickingMemberId(null);
  };

  // New member joined socket listener
  const newMemberListener = useCallback(({ username }) => {
    setMembers((prev) => [...prev, { username }]);
  }, []);

  // Kickout socket listener
  const kickoutListener = useCallback(
    async (data) => {
      try {
        receiveMemberListener();
        if (!data) return;
        const callback = async (id) => {
          try {
            const exists = await firebase.isMeExist(roomId, id);
            if (exists) pushTo("/");
          } catch (err) {
            console.error("Error checking user existence:", err);
          }
        };
        await firebase.onValueChange(roomId, callback);
      } catch (err) {
        console.error("Error in kickout listener:", err);
      }
    },
    [firebase, pushTo, receiveMemberListener, roomId]
  );

  // Member logout listener
  const memberLogoutListener = useCallback(() => {
    receiveMemberListener();
  }, [receiveMemberListener]);

  // Setup socket listeners once
  useEffect(() => {
    socket.on("media-file", mediaFileListener);
    socket.on("recieve-member", receiveMemberListener);
    socket.on("member-joined", newMemberListener);
    socket.on("kickout", kickoutListener);
    socket.on("member-logout", memberLogoutListener);

    return () => {
      socket.off("media-file", mediaFileListener);
      socket.off("recieve-member", receiveMemberListener);
      socket.off("member-joined", newMemberListener);
      socket.off("kickout", kickoutListener);
      socket.off("member-logout", memberLogoutListener);
    };
  }, [
    socket,
    mediaFileListener,
    receiveMemberListener,
    newMemberListener,
    kickoutListener,
    memberLogoutListener,
  ]);

  // On showFiles toggle or mount, fetch members and media files if needed
  useEffect(() => {
    if (showFiles) {
      if (members.length === 0) {
        setIsMembersLoading(true);
        firebase.getMembers(roomId, processMembers);
      }
      if (mediaFiles.length !== mediaCount) {
        setIsMediaLoading(true);
        firebase.getMediaFiles(roomId, processMediaFiles);
      }
    }
  }, [
    showFiles,
    members.length,
    mediaFiles.length,
    mediaCount,
    firebase,
    roomId,
    processMembers,
    processMediaFiles,
  ]);

  // Scroll media list to bottom only if user near bottom
  useEffect(() => {
    const container = mediaListRef.current;
    if (!container) return;
    const isAtBottom =
      container.scrollHeight - container.scrollTop - container.clientHeight <
      50;
    if (isAtBottom) {
      container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
    }
  }, [mediaFiles]);
  return (
    <div
      className={`w-full lg:w-[350px] overflow-scroll ${
        theme === "light" ? "extralight" : "darklight"
      } h-full mt-2 p-1 rounded-md`}
    >
      {showFiles ? (
        <ul
          className="w-[95%] max-h-[400px] mx-auto p-2"
          ref={mediaListRef}
          style={{ maxHeight: "400px", overflowX: "hidden" }}
        >
          {mediaFiles.map((file, i) => (
            <li
              key={`media-${i}`}
              role="button"
              tabIndex={0}
              onClick={() => handleDownload(file)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleDownload(file);
                }
              }}
              aria-label={`Download file ${file.filename}`}
              className={`media-item text-white w-full ${
                theme === "light" ? "light-item-3" : "dark-item-3"
              } my-1 rounded-md p-2`}
              title={`Download ${file.filename}`}
              style={{ cursor: "pointer" }}
            >
              <div className="text-lg break-words line-clamp-2 font-semibold">
                {file.filename}
              </div>
              <div className="flex w-full gap-2 rounded-md p-1 justify-end items-center">
                <p className="w-full text-sm text-right opacity-80">
                  {file.time}
                </p>
                <Tooltip title="Download file" arrow>
                  <DownloadIcon
                    style={{
                      border: "1px solid white",
                      borderRadius: ".55rem",
                      padding: 2,
                    }}
                  />
                </Tooltip>
              </div>
            </li>
          ))}
          {/* Skeleton loader if loading and no files yet */}
          {isMediaLoading && !mediaFiles.length && (
            <div className="w-full p-4">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="h-8 bg-gray-300 animate-pulse rounded mb-2"
                ></div>
              ))}
            </div>
          )}
          {/* Spinner if loading and files already loaded */}
          {isMediaLoading && mediaFiles.length > 0 && (
            <div className="w-full flex items-center justify-center relative py-2">
              <CircularProgress disableShrink size={30} />
            </div>
          )}
        </ul>
      ) : (
        <ul className="w-[95%] max-h-[400px] mx-auto p-2">
          {members.map((member, i) => (
            <li
              key={`member-${i}`}
              className={`w-full flex items-center justify-between px-2 text-white ${
                theme === "light" ? "light-item-3" : "dark-item-3"
              } m-1 rounded-md p-2`}
            >
              <div className="flex gap-2 items-center">
                <BackgroundLetterAvatars
                  username={member.username}
                  size="30px"
                />
                <p className="font-semibold tracking-wider p-1 select-text">
                  {member.username}
                </p>
              </div>
              {!isOwner || roomOwner === member.username ? (
                <span
                  className="relative flex h-3 w-3 right-3"
                  aria-label="Online status"
                  title="Online"
                >
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              ) : (
                <Tooltip title={`Kick ${member.username}`} arrow>
                  <span>
                    <IconButton
                      className="w-fit p-1 bg-slate-200 flex rounded-xl"
                      onClick={() => handleKick(member)}
                      disabled={isKickLoading}
                      aria-label={`Kick ${member.username}`}
                      size="small"
                    >
                      {kickingMemberId === member.id ? (
                        <CircularProgress size={20} />
                      ) : (
                        <RemoveCircleOutlineIcon style={{ color: "red" }} />
                      )}
                    </IconButton>
                  </span>
                </Tooltip>
              )}
            </li>
          ))}

          {isMembersLoading && !members.length && (
            <div className="w-full p-4">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="h-8 bg-gray-300 animate-pulse rounded mb-2"
                ></div>
              ))}
            </div>
          )}

          {isMembersLoading && members.length > 0 && (
            <div className="w-full flex items-center justify-center relative py-2">
              <CircularProgress disableShrink size={30} />
            </div>
          )}
        </ul>
      )}
    </div>
  );
}

export default SharedFiles;
