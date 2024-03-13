import React from 'react';
import Conversation from './Conversation';
import { useSelector } from 'react-redux';
import { setActiveConversation } from '../../../features/chatSlice';

const Conversations = () => {
    const {conversations,activeConversation} = useSelector((state)=> state.chat)
    return (
        <div className="convos scrollbar">
            <ul>
                {   conversations &&
                    conversations.filter((c)=>c.latestMessage || c._id===activeConversation._id).map((convo) => {
                        return(
                            <Conversation convo={convo} key={convo._id}/>
                        );

                    })
                }
            </ul>

        </div>
    );
}

export default Conversations;
