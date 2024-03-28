import React, { useCallback, useEffect, useState, useMemo, useRef } from 'react'
import { useSocket } from '../contexts/SocketContext';
import { useParams } from "react-router-dom"
import { useFirebase } from '../firebase/FirebaseContext';
import DownloadIcon from '@mui/icons-material/Download';
import { CircularProgress } from '@mui/material';


function SharedFiles({ showFiles }) {
    const socket = useSocket();
    const { roomId } = useParams();
    const [mediaFiles, setMediaFiles] = useState([]);
    const firebase = useFirebase();
    const [members, setMembers] = useState([]);
    const firtDiv = useRef(null);
    const [ isMediaLoading, setIsMediaLoading ] = useState(true);
    const [ isMembersLoading, setIsMembersLoading ] = useState(true);

    useMemo(() => socket.emit("call-members", { roomId: roomId }), [showFiles]);

    const callback = (list) => {
        setMediaFiles((prev) => list);
    }

    const callbackMember = (peoples) => {
        setMembers((prev) => peoples);
        setIsMembersLoading(() => false);
    }

    const mediaFileListner = useCallback(
        (data) => {
            console.log("File Recieved")
            console.log(data);
            firebase.getMediaFiles(roomId, callback);
        }, [mediaFiles, firebase, roomId, showFiles]
    );

    const recieveMemberListener = useCallback(
        (data) => {
            const { msg } = data;
            msg && firebase.getMembers(roomId, callbackMember);
        }, [showFiles, firebase, roomId, socket]
    )

    const handleDownload = (data) => {
        const downloadLink = document.createElement('a');
        downloadLink.href = data.downloadUrl;
        downloadLink.download = data.filename;
        downloadLink.click();
    }

    useEffect(() => {
        socket.on("media-file", mediaFileListner);
        socket.on("recieve-member", recieveMemberListener);
        

        return () => {
            socket.off("recieve-member", recieveMemberListener);
            socket.off("media-file", mediaFileListner);
        }

    }, []);

    useEffect(() => {

        if (!members.length) {
            firebase.getMembers(roomId, callbackMember);
        }

        if (!mediaFiles.length) {
            firebase.getMediaFiles(roomId, callback, setIsMediaLoading);
        }
   
    }, [showFiles])

    
    useEffect(() => {
    const container = firtDiv.current;
    if(container) {
        container.scrollTop = container.scrollHeight;
    };
    }, [])


    return (
        <div 
            
            className='bg-gradient-to-r w-full overflow-hidden from-purple-400 to-pink-400 h-full mt-2 p-1 rounded-md'>
            {showFiles ?
                (<>
                    <ul className='p-2 w-full h-full ' style={{overflowY: "auto"}} ref={firtDiv}>
                        {mediaFiles?.map((item, i) => (
                            <li className='text-white bg-gradient-to-r w-full from-sky-500 to-indigo-500 my-1 rounded-md p-1' key={`index-Of${i}`}>
                                <div className="text-sm">
                                    {item.filename}
                                </div>
                                <button className="flex w-full justify-end rounded-md p-1" onClick={() => {
                                    handleDownload(item)
                                }}>
                                    <DownloadIcon style={{border: "1px solid white", borderRadius: ".55rem", padding:2}}/>
                                </button>
                            </li>
                        ))}
                        {isMediaLoading && 
                            <div className="w-full flex items-center justify-center relative">
                                <CircularProgress disableShrink size={30}/>
                            </div>
                        }
                    </ul>
                </>)
                : (<>

                <ul className="w-[95%]">
                    {members?.map((m, i) => (
                        <li className="w-full items-center justify-between flex px-2 text-white bg-gradient-to-r from-blue-600 to-violet-500 m-1 rounded-md p-1" key={i + 3}>
                            <div className='flex gap-1 items-center'>
                            <img src={`https://avatar.iran.liara.run/public/boy?username=${m}`} height={30} width={30} alt="id" />
                            <p className='font-semibold p-1'>{m}</p>
                            </div>
                            <span className='w-2 h-2 bg-green-500 rounded-xl relative right-5'></span>
                        </li>
                    ))}
                    {isMembersLoading && 
                            <div className="w-full flex items-center justify-center relative">
                                <CircularProgress disableShrink size={30}/>
                            </div>
                        }
                </ul>

                </>)}

        </div>
    )
}

export default SharedFiles