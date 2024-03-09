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

const roomIdToOwner = new Map();
const socketIdToUser = new Map();
const userToSocketId = new Map();


io.on("connection", (socket) => {

    socket.on("create-room", (data) => {
        const { id, username } = data;
        socket.join(id);
        roomIdToOwner.set(id, socket.id);
        socketIdToUser.set(socket.id, username);
        userToSocketId.set(username, socket.id);
        io.to(id).emit("room-chat", { roomId: id });
        io.to(id).emit("welcome-msg", { message: "🎊 Room is created successfully 🎊"});
    });
    
    socket.on("join-room", (data) => {
        const {roomId , username } = data;
        socket.join(roomId);
        const isUsernameTaken = userToSocketId.get(username);
        if ( isUsernameTaken ) {
            io.to(roomId).emit("isUsernameTaken", { id: socket.id });
        } else {
            socketIdToUser.set(socket.id, username);
            socket.emit("isJoined", { Id: socket.id, roomId: roomId });
            socket.broadcast.to(roomId).emit("member-joined", { username: username });
        }
    });

    socket.on("get-username", (data) => {
        const { id } = data;
        io.to(id).emit("recieve-username", { username: socketIdToUser.get(id) || "Avator"})
    })


    socket.on("group-message", (data) => {
        const { message, id, roomId } = data;
        const username = socketIdToUser.get(id);
        socket.join(roomId);
        io.to(roomId).emit('group-mess', {message:message, id:id, username: username});
    });


    socket.on("share-file", (data) => {
        socket.join(data.roomId);
        socket.to(data.roomId).emit("media-file", {filename: data.filename, content: data.content});
    })

    socket.on("logout", (data) => {
        const {  Id , roomId } = data;
        let Owner = roomIdToOwner.get(roomId);
        if (!Owner) {
            roomIdToOwner.set(roomId, socket.id);
            Owner = roomIdToOwner.get(roomId);
        }
        if (Id == Owner) {
            roomIdToOwner.delete(Owner);
            socket.join(roomId);
            io.to(roomId).emit("owner-logout", {online: false});
        } else {
            const username = socketIdToUser.delete(socket.id);
            userToSocketId.delete(username);
            socket.join(roomId);
            io.to(Id).emit("owner-logout", { online : true});
        }
    });

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


