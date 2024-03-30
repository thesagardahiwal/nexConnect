import React, { useCallback, useEffect, useState, useMemo, useRef } from 'react'
import { useSocket } from '../contexts/SocketContext';
import { useParams } from "react-router-dom"
import { useFirebase } from '../firebase/FirebaseContext';
import DownloadIcon from '@mui/icons-material/Download';
import {CircularProgress } from '@mui/material';
import BackgroundLetterAvatars from "./Avatar";
import { useTheme } from '../contexts/ThemeContext';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

function SharedFiles({ showFiles, setIsChatWithAI }) {
    const socket = useSocket();
    const { roomId } = useParams();
    const [mediaFiles, setMediaFiles] = useState([]);
    const firebase = useFirebase();
    const [members, setMembers] = useState([]);
    const firtDiv = useRef(null);
    const [ isMediaLoading, setIsMediaLoading ] = useState(true);
    const [ isMembersLoading, setIsMembersLoading ] = useState(true);
    const { theme, toggleTheme } = useTheme();
    const MediaLenght = useMemo(() => {
         firebase.getFileCount(roomId).then((res) => {return res})
    }, [])

    useMemo(() => socket.emit("call-members", { roomId: roomId }), [showFiles]);

    const callback = (list) => {
        let newArr = [];
        list.map((e) => {
            newArr.push({filename: e.filename.split("time:")[0], time: e.filename.split("time:")[1], downloadUrl: e.downloadUrl})
        });
        setMediaFiles((prev) => newArr);
    }

    const callbackMember = (peoples) => {
        setMembers((prev) => peoples);
        setIsMembersLoading(() => false);
    }

    const mediaFileListner = useCallback(
        (data) => {
            console.log(data);
            data && firebase.getMediaFiles(roomId, callback, setIsMediaLoading);
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
    };

    const handleAI = () => {
        console.log("Clicked! AI CHAT");
        setIsChatWithAI((prev) => !prev);
    }

    useEffect(() => {
        socket.on("media-file", mediaFileListner);
        socket.on("recieve-member", recieveMemberListener);
        

        return () => {
            socket.off("recieve-member", recieveMemberListener);
            socket.off("media-file", mediaFileListner);
        }

    }, [mediaFiles, showFiles]);

    useEffect(() => {

        if (!members.length) {
            firebase.getMembers(roomId, callbackMember);
        }

        if (mediaFiles.length != MediaLenght) {
            firebase.getMediaFiles(roomId, callback, setIsMediaLoading);
        }
        
        

    }, [showFiles]);

    
    useEffect(() => {
    const container = firtDiv.current;
    if(container) {
        container.scrollTop = container.scrollHeight;
    };
    }, []);


    return (
        <div 
            
            className={`w-full overflow-hidden ${theme == 'light' ? "extralight": "darklight"} h-full mt-2 p-1 rounded-md`}>
            {showFiles ?
                (<>
                    <ul className='p-2 w-full h-full ' style={{overflowY: "auto"}} ref={firtDiv}>
                        {mediaFiles?.map((file, i) => (
                            <li className={`text-white w-full  ${theme == 'light' ? "light-item-3": "dark-item-3"} my-1 rounded-md p-1`} key={`index-Of${i}`}>
                                <div className="text-sm">
                                    <p>{file.filename}</p>
                                </div>
                                <div className="flex w-full gap-1 rounded-md p-1" onClick={() => {
                                    handleDownload(file)
                                }}>
                                    <p className='w-full text-sm flex items-center justify-end'>{file.time}</p>
                                    <DownloadIcon style={{border: "1px solid white", borderRadius: ".55rem", padding:2}}/>
                                </div>
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
                        <li className={`w-full items-center justify-between flex px-2 text-white ${theme == 'light' ? "light-item-3": "dark-item-3"} m-1 rounded-md p-1`} key={"Chat-AI"}>
                            <div className="text-sm flex items-center gap-2 font-semibold">
                                <BackgroundLetterAvatars username={"AI"} size='30px' />
                                <p>Chat With AI</p>
                            </div>
                            <button className='border relative right-2 bg-violet-400 rounded-lg px-1'
                                onClick={handleAI}
                                ><ChatBubbleIcon style={{width:'20px', height:"20px"}} /></button>
                        </li>
                    {members?.map((m, i) => (
                        <li className={`w-full items-center justify-between flex px-2 text-white ${theme == 'light' ? "light-item-3": "dark-item-3"} m-1 rounded-md p-1`} key={i + 3}>
                            <div className='flex gap-1 items-center'>
                            <BackgroundLetterAvatars username = {m} size='30px' />
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