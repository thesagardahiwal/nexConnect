import React, { useCallback, useEffect, useState, useMemo } from 'react'
import { useSocket } from '../socket/SocketContext';
import { useParams } from "react-router-dom"
import { download } from '../assets/icons';
import { useFirebase } from '../firebase/FirebaseContext';

function SharedFiles({ showFiles }) {
    const socket = useSocket();
    const { roomId } = useParams();
    const [mediaFiles, setMediaFiles] = useState();
    const firebase = useFirebase();
    const [members, setMembers] = useState([]);

    useMemo(() => socket.emit("call-members", { roomId: roomId }), [showFiles]);

    const mediaFileListner = useCallback(
        (data) => {
            const result = data;
            if (result) {
                setMediaFiles((prev) => [...prev, result]);
            }
        }, [mediaFiles]
    );

    const recieveMemberListener = useCallback(
        (data) => {
            firebase.getMembers(roomId).then((data) => {
                setMembers(data);
            })
        }, [showFiles, firebase, roomId, socket]
    )

    const handleDownload = (data) => {
        const blob = new Blob([data.content]);
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);
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

    }, [])


    return (
        <div className='bg-gradient-to-r w-full from-purple-400 to-pink-400 h-[460px] mt-2 p-1 rounded-md'>
            {showFiles ?
                (<>
                    <ul className='p-2 w-full'>
                        {mediaFiles?.map((file, i) => (
                            <li className='text-white bg-gradient-to-r w-full from-sky-500 to-indigo-500 flex justify-between items-center my-1 rounded-md p-1' key={`index-Of${i}`}>
                                <div className='flex start-0'>
                                    {file.filename}
                                </div>
                                <div className='flex-end flex'>
                                    <button className='bg-green-500 m-1 rounded-md p-1' onClick={() => {
                                        handleDownload(file)
                                    }}>
                                        <img src={download} alt="download" width={25} />
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </>)
                : (<>

                <ul className="w-[95%]">
                    {members?.map((m, i) => (
                        <li className="w-full items-center justify-between flex px-2 text-white bg-gradient-to-r from-blue-600 to-violet-500 m-1 rounded-md p-1" key={i + 3}>
                            <p className='font-semibold'>{m}</p>
                            <span className='w-2 h-2 bg-green-500 rounded-xl relative right-5'></span>
                        </li>
                    ))}
                </ul>

                </>)}
            {/* Show all files */}

        </div>
    )
}

export default SharedFiles