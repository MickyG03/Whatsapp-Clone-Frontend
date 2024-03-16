import React, { useEffect } from 'react';
import ChatHeader from './header/ChatHeader';
import ChatMessages from './messages/chatMessages';
import { useDispatch, useSelector } from 'react-redux';
import { getConversationMessages } from '../../features/chatSlice.js';
import ChatActions from './actions/ChatActions.jsx';
import { checkOnlineStatus } from '../../utils/chat.js';
import FilesPreview from './preview/files/FilesPreview.jsx';

const ChatContainer = ({onlineUsers, typing}) => {
    const dispatch = useDispatch();
    const {activeConversation, messages} = useSelector((state)=> state.chat);
    const {user} = useSelector((state)=> state.user);
    const{token} = user;
    const {files} = useSelector((state) => state.chat);
    const values={
        token,
        convo_id:activeConversation?._id,
    }
    // console.log(activeConversation)
    useEffect(()=>{

        if(activeConversation?._id){

            dispatch(getConversationMessages(values))
        }
    },[activeConversation]);

    return (
        <div className="relative w-full h-full border-l dark:border-l-dark_border_2 select-none
        overflow-hidden">
            <div>
                <ChatHeader online={checkOnlineStatus(onlineUsers,user,activeConversation.users)}/>

                {
                files.length>0 ?
                (<>
                    <FilesPreview/>
                </>) :
                (   <>
                        <ChatMessages typing={typing}/>
                        <ChatActions/>
                    </>
                )
              }
            </div>
        </div>
    );
}

export default ChatContainer;
