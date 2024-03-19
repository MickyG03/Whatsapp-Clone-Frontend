import React from 'react';
import { useSelector } from 'react-redux';
import { DotsIcon, SearchLargeIcon, CallIcon,VideoCallIcon } from '../../../svg';
import { capitalize } from '../../../utils/string';
import { useEffect, useRef, useState } from "react";
import SocketContext from "../../../context/SocketContext";

import { getConversationName,getConversationPicture,} from "../../../utils/chat";

const ChatHeader = ({online, callUser, socket}) => {
    const {activeConversation} = useSelector((state) => state.chat)
    const { user } = useSelector((state) => state.user);
    return (
        <div className='h-[59px] dark:bg-dark_bg_2 flex items-center p16 select-none'>
            <div className="w-full flex items-center justify-between">
                {/* left */}
                <div className="flex items-center gap-x-4">
                    <button className="btn">
                    <img
                        src={
                            activeConversation.isGroup ?
                            activeConversation.picture:
                            getConversationPicture(user, activeConversation.users)
                        }
                        alt=""
                        className="w-full h-full rounded-full object-cover"
                        />
                    </button>
                    <div className="flex flex-col">
                        <h1 className="dark:text-white text-md font-bold">
                            {
                                activeConversation.isGroup ?
                                activeConversation.name:
                                capitalize(getConversationName(user, activeConversation.users).split(" ")[0])}
                        </h1>
                        <span className="text-xs dark:text-dark_svg_2">
                            {online ? "online" : ""}
                        </span>
                    </div>
                </div>
                {/* right */}
                <ul className="flex items-center gap-x-2.5">

                    {1 == 1 ? (
                        <li onClick={() => callUser()}>
                        <button className="btn">
                            <VideoCallIcon />
                        </button>
                        </li>
                    ) : null}
                    {1 == 1 ? (
                        <li>
                        <button className="btn">
                            <CallIcon />
                        </button>
                        </li>
                    ) : null}
                    <li>
                        <button className="btn">
                            <SearchLargeIcon className="dark:fill-dark_svg_1"/>
                        </button>
                    </li>
                    <li>
                        <button className="btn">
                            <DotsIcon className="dark:fill-dark_svg_1"/>
                        </button>
                    </li>




                </ul>
            </div>
        </div>
    );
}

const ChatHeaderWithSocket = (props) => (
    <SocketContext.Consumer>
      {(socket) => <ChatHeader {...props} socket={socket} />}
    </SocketContext.Consumer>
  );
  export default ChatHeaderWithSocket;
