import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import fs from "fs";
import cors from "cors";
import OpenAI from 'openai';
import axios from "axios";

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

const openai = new OpenAI({
    apiKey: "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", // This is the default and can be omitted
  });

function reqEndUser (req, res){
    async function generateText () {
        try {

            const response = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [
                  {
                    "role": "user",
                    "content": "Where is India"
                  }
                ],
                temperature: 1,
                max_tokens: 256,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
              });
            
            console.log(response.choices[0])

        } catch (e) {
            console.log("ERROR", e);
        }
    }
    generateText()
}



io.on("connection", (socket) => {
    
    console.log("User Connected:", socket.id);
    
    socket.on("create-room", (data) => {
        const { id, username, userId } = data;
        socket.join(id);
        io.to(id).emit("room-chat", { roomId: id, username: username, userId: userId  });
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
        io.to(roomId).emit("recieve-member", "New Member Joined");
    })

    socket.on("get-username", (data) => {
        const { id } = data;
        io.to(id).emit("recieve-username", "Avtar" )
    })


    socket.on("group-message", (data) => {
        const { message, id, username, roomId, time } = data;
        socket.join(roomId);
        io.to(roomId).emit('group-mess', {message:message, id:id, username: username, time: time});
    });


    socket.on("share-file", (data) => {
        const { filename, roomId } = data;
        socket.join(roomId);
        console.log("File Shared!")
        io.to(roomId).emit("media-file", "New File shared!");
    });

    // AI - CHAT

    socket.on("ai-chat", (data) => {
        const { message, id, username, roomId, time } = data;
        socket.join(roomId);
        io.to(roomId).emit("message-with-ai", {message: message, id: id, username: username, time: time});
    })

    socket.on("logout", (data) => {
        console.log("Logout Request:", data);
    });

    // Peer Connection

    socket.on("join-screen", (data) => {
        const { id, roomId } = data;
        socket.join(roomId);
        socket.broadcast.to(roomId).emit("new-user-connection", id);

    });

    socket.on('calling', (data) => {
        const { roomId, username } = data;
        socket.join(roomId);
        socket.to(roomId).emit("on-call", username);
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


