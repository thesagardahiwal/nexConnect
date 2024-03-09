import React from "react"

const peerContex = React.createContext(null);

export const usePeer = () => {
    return React.useContext(peerContex);
}

export const PeerProvider = ({children}) => {
    const peer = new RTCPeerConnection({
        iceServers: [
            {
                urls:[
                    "stun:stun.l.google.com.19302",
                    "stun:global.stun.twilio.com:3478",
                ]
            }
        ]
    })

    return (
        <peerContex.Provider value={ peer }>
            {children}
        </peerContex.Provider>
    )
}