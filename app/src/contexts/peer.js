
import Peer from "peerjs";
import { useSocket } from "./SocketContext";

const peer = new Peer ( undefined, {
    host: '/',
    port:'3001'
  });


class PEER {
    constructor () {
        this.peer = peer;
        this.id = peer.id;
        this.socket = useSocket();
    }


    connectPeer = () => {
        peer = new Peer ( undefined, {
            host: '/',
            port: '3001'
        });
    };

    joinToRoomScreenShare = (roomId) => {
        if (this.id) {
            const id = this.id;
            this.socket.emit("join-screen", { id , roomId });
        }
    }


}

export default PEER;