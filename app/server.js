import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import fs from "fs";
import cors from "cors";

const app = express();
const PORT = 3000;

const server = createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
  },app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
        credentials: true
      }
});



const roomIdToOwner = new Map();
const socketIdToUser = new Map();
const userToSocketId = new Map();


io.on("connection", (socket) => {

    console.log("User Connected:", socket.id);

    socket.on("create-room", (data) => {
        const { id, username, userId } = data;
        socket.join(id);
        io.to(id).emit("room-chat", { roomId: id });
        io.to(id).emit("welcome-msg", { message: "🎊 Room is created successfully 🎊"});
    });
    
    socket.on("join-room", (data) => {
        const {roomId , username } = data;
        socket.join(roomId);
        socket.emit("isJoined", { Id: socket.id, roomId: roomId });
        socket.broadcast.to(roomId).emit("member-joined", { username: username });

    });

    socket.on("call-members", (data) => {
        const { roomId } = data;
        socket.join(roomId);
        io.to(roomId).emit("recieve-member", { answer : true });
    })

    socket.on("get-username", (data) => {
        const { id } = data;
        io.to(id).emit("recieve-username", { username: socketIdToUser.get(id) || "Avtar"})
    })


    socket.on("group-message", (data) => {
        const { message, id, username, roomId } = data;
        socket.join(roomId);
        io.to(roomId).emit('group-mess', {message:message, id:id, username: username});
    });


    socket.on("share-file", (data) => {
        socket.join(data.roomId);
        socket.to(data.roomId).emit("media-file", {filename: data.filename, content: data.content});
    });

    socket.on("logout", (data) => {
        console.log("Logout Request:", data);
    });

    // Peer Connection

    socket.on("join-screen", (data) => {
        const { userId, roomId } = data;
        socket.join(roomId);
        socket.broadcast.to(roomId).emit("new-user-connection", userId);

    });

    socket.on('calling', (data) => {
        const { roomId } = data;
        socket.join(roomId);
        socket.to(roomId).emit("on-call", true);
    });

    socket.on('disconnect', () => {
        console.log("Socket Disconnected:", socket.id);
    })

});


app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true
  }));
  

app.get("/", (req, res) => {
    res.send("Welcome!");
});


server.listen(PORT, ()=> {
    console.log(`Server is listning at port ${PORT}`);
})


