import React, { useCallback, useEffect, useState, useRef } from "react";
import { useSocket } from "../contexts/SocketContext.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { useFirebase } from "../firebase/FirebaseContext.jsx";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { CircularProgress, LinearProgress } from "@mui/material";
import { useTheme } from "../contexts/ThemeContext.jsx";

const BottomBar = ({ width, isChatWithAI }) => {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [username, setUsername] = useState("");
  const socket = useSocket();
  const { roomId } = useParams();
  const firebase = useFirebase();
  const navigate = useNavigate();
  const currentUserId = firebase.getCurrentUser();
  const [isUploading, setIsUploading] = useState(false);
  const { theme } = useTheme();

  const fileInputRef = useRef(null);

  const getTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}:${paddedMinutes} ${meridiem}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!socket?.id) return;
    if (!message.trim()) return;

    const time = getTime();

    if (isChatWithAI) {
      socket.emit("ai-chat", {
        message,
        id: currentUserId,
        username,
        roomId,
        time,
      });
      setMessage("");
      return;
    }

    socket.emit("group-message", {
      message,
      id: currentUserId,
      username,
      roomId,
      time,
    });
    firebase.sendMessage({
      message,
      id: currentUserId,
      username,
      roomId,
      time,
    });
    setMessage("");
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) setFile(selectedFile);
    // Reset input value so selecting same file again triggers onChange
    e.target.value = "";
  };

  const handleFileShare = () => {
    if (!file) return;

    setIsUploading(true);
    setUploadProgress(0);

    const time = getTime();
    const reader = new FileReader();

    reader.onload = (e) => {
      const fileContent = e.target.result;

      firebase.sendFile(
        username,
        file.name,
        fileContent,
        roomId,
        time,
        (url) => {
          setIsUploading(false);
          setUploadProgress(0);
          setFile(null);

          socket.emit("share-file", { filename: file.name, roomId });
          socket.emit("group-message", {
            message: file.name,
            id: currentUserId,
            username,
            roomId,
            time,
            download: url,
          });
          firebase.sendMessage({
            message: file.name,
            id: currentUserId,
            username,
            roomId,
            time,
            download: url,
          });
        },
        (progressEvent) => {
          if (progressEvent.lengthComputable) {
            const percent = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(percent);
          }
        }
      );
    };

    reader.onerror = () => {
      setIsUploading(false);
      setUploadProgress(0);
      setFile(null);
      alert("Failed to read file. Please try again.");
    };

    reader.readAsArrayBuffer(file);
  };

  const handleShareButtonClick = () => {
    if (file) {
      handleFileShare();
    } else {
      fileInputRef.current?.click();
    }
  };

  const fetchUsername = useCallback(() => {
    firebase.getCurrentUserDetails(roomId).then((user) => setUsername(user));
  }, [firebase, roomId]);

  useEffect(() => {
    firebase.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/");
        return;
      }
      fetchUsername();
      socket.emit("get-username", { id: socket.id });
    });
  }, [firebase, navigate, socket, fetchUsername]);

  useEffect(() => {
    const recieveUsernameListener = () => fetchUsername();
    const kickoutListener = async () => {
      await firebase.onAuthStateChanged((user) => {
        if (user) firebase.isMeExist(roomId, user.uid);
      });
    };

    socket.on("recieve-username", recieveUsernameListener);
    socket.on("kickout", kickoutListener);

    return () => {
      socket.off("recieve-username", recieveUsernameListener);
      socket.off("kickout", kickoutListener);
    };
  }, [fetchUsername, firebase, roomId, socket]);

  return (
    <div
      className={`sticky bottom-0 w-full px-4 sm:px-6 lg:px-20 py-3 backdrop-blur-sm 
    ${
      theme === "light"
        ? "bg-white border-gray-200"
        : "bg-blue-950 border-gray-700"
    }
    flex items-center gap-3 shadow-md border-t`}
      style={{ minHeight: 70 }}
    >
      <input
        type="file"
        ref={fileInputRef}
        hidden
        onChange={handleFileChange}
        accept="*/*"
      />

      <button
        onClick={handleShareButtonClick}
        disabled={isUploading}
        aria-label={file ? "Upload file" : "Attach file"}
        className={`flex items-center justify-center w-12 h-12 rounded-full shadow-md border 
      ${
        theme === "light"
          ? "border-gray-300 hover:bg-gray-100"
          : "border-gray-600 hover:bg-gray-800"
      }
      transition-colors duration-200`}
      >
        {isUploading ? (
          <CircularProgress size={28} />
        ) : file ? (
          <CloudUploadIcon style={{ color: "#007AFF" }} />
        ) : (
          <AttachFileIcon
            style={{ transform: "rotate(45deg)", color: "#007AFF" }}
          />
        )}
      </button>

      <form
        onSubmit={handleSubmit}
        className="flex items-center flex-grow gap-3"
        role="form"
      >
        <input
          type="text"
          placeholder={socket ? "Type your message..." : "Socket disconnected"}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={!socket?.id || isUploading}
          className={`flex-grow rounded-full px-5 py-3 shadow-inner border 
        ${
          theme === "light"
            ? "border-gray-300 bg-white text-black placeholder-gray-500 focus:ring-blue-400"
            : "border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:ring-blue-500"
        } 
        focus:outline-none focus:ring-2 transition-colors duration-200`}
        />

        <button
          type="submit"
          disabled={!message.trim() || isUploading}
          className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-colors duration-200 
        ${
          message.trim() && !isUploading
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-blue-300 cursor-not-allowed"
        }`}
        >
          <SendIcon
            style={{ width: 26, color: "white", transform: "rotate(-25deg)" }}
          />
        </button>
      </form>

      {isUploading && (
        <div className="absolute bottom-[80px] left-0 right-0 px-6">
          <LinearProgress
            variant="determinate"
            value={uploadProgress}
            className="rounded-full"
            sx={{
              height: 6,
              borderRadius: 3,
              backgroundColor: theme === "dark" ? "#374151" : "#E5E7EB",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#007AFF",
              },
            }}
          />
          <p
            className={`text-center text-xs mt-1 font-semibold ${
              theme === "light" ? "text-blue-600" : "text-blue-400"
            }`}
          >
            Uploading {uploadProgress}%
          </p>
        </div>
      )}
    </div>
  );
};

export default BottomBar;
