import Peer from "peerjs";
import React, { useEffect, useMemo, useState } from "react"

const peerContex = React.createContext(null);

export const usePeer = () => {
    return React.useContext(peerContex);
}

export const PeerProvider = ({children}) => {
    const [ id, setId ] = useState(null);
    const peer = useMemo(() => {
        new Peer ( undefined, {
            host: '/',
            port:'3001'
          });
        return Peer
    }, []);

    useEffect(() => {
        return () => {
            peer.on('open', id => {
                setId(id);
            })
        };
    })

    return (
        <peerContex.Provider value={peer}>
            {children}
        </peerContex.Provider>
    )
}