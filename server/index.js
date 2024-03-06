import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import { rootCertificates } from "tls";

const app = express();
const PORT = 3000;

const server = createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
        credentials: true
      }
});

let total_members = 0;
io.on("connection", (socket) => {
    io.emit("message", "Welcome to NexConnect");

    socket.on("create-room", (data) => {
        total_members++;
        socket.join(data.id);
        io.to(data.id).emit("room-chat", ["Room Created!", data.id]);
    })
    //io.in("room-101").disconnectSockets()

    socket.on("group-message", (data) => {
        socket.join(data.roomId);
        io.to(data.roomId).emit('group-mess', {message:data.message, id:data.id});
    });

    socket.on("share-file", (data) => {
        socket.join(data.roomId);
        io.to(data.roomId).emit("media-file", {filename: data.filename, content: data.content});
    })

    socket.on("join-room", (roomID) => {
        total_members++;
        socket.join(roomID);
        io.to(roomID).emit("member-joined", "Room Joined!");
    });

    io.emit("memberCount", total_members);


    socket.on("disconnect", () => {
        total_members--;
    })
});


app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true
  }));
  

app.get("/", (req, res) => {
    res.send("Welcome!");
})


server.listen(PORT, ()=> {
    console.log(`Server is listning at port ${PORT}`);
})


