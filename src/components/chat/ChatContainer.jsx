import React, { useEffect } from 'react';
import ChatHeader from './header/ChatHeader';
import ChatMessages from './messages/chatMessages';
import { useDispatch, useSelector } from 'react-redux';
import { getConversationMessages } from '../../features/chatSlice.js';
import ChatActions from './actions/ChatActions.jsx';

const ChatContainer = () => {
    const dispatch = useDispatch();
    const {activeConversation, messages} = useSelector((state)=> state.chat);
    const {user} = useSelector((state)=> state.user);
    const{token} = user;

    const values={
        token,
        convo_id:activeConversation?._id,
    }
    console.log(activeConversation)
    useEffect(()=>{

        if(activeConversation?._id){

            dispatch(getConversationMessages(values))
        }
    },[activeConversation]);
    console.log("messages",messages);
    return (
        <div className="relative w-full h-full border-l dark:border-l-darkborder_2 select-none
        overflow-hidden">
            <div>
                <ChatHeader/>
                <ChatMessages/>
                <ChatActions/>
            </div>
        </div>
    );
}

export default ChatContainer;
