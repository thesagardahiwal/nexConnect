import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

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
        io.in(data.id).emit("room-chat", ["Room Created!", data.id]);
    })
    //io.in("room-101").disconnectSockets();

    socket.on("join-room", (roomID) => {
        total_members++;
        io.in(roomID).emit("member-joined", "Room Joined!");
    });

    socket.emit("memberCount", total_members);


    socket.on("disconnect", () => {
        total_members--;
        console.log("socket disconnected!")
    })
    console.log("Socket is Connected!");
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


