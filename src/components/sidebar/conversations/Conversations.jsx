import React from 'react';
import Conversation from './Conversation';
import { useSelector } from 'react-redux';

const Conversations = () => {
    const {conversations} = useSelector((state)=> state.chat)
    return (
        <div className="convos scrollbar">
            <ul>
                {   conversations &&
                    conversations.map((convo) => {
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
