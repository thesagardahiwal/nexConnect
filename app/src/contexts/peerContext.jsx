import Peer from "peerjs";
import React, { useEffect, useMemo, useState } from "react"
import PEER from "./peer.js";
const peerContex = React.createContext(null);

export const usePeer = () => {
    return React.useContext(peerContex);
}

export const PeerProvider = ({children}) => {
    const peer = new PEER();

    // useEffect(() => {
    //     return () => {
    //         peer.peer.disconnect();
    //     }
    // }, [])

    return (
        <peerContex.Provider value={peer}>
            {children}
        </peerContex.Provider>
    )
}