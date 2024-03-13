import React from 'react';
import { useSelector } from 'react-redux';
import Message from './Message';

const ChatMessages = () => {

    const {messages} = useSelector((state) => state.chat);
    const {user} = useSelector((state)=>state.user);
    return (
        <div className="mb-[60px] bg-[url('/public/bg.jpg')]
        bg-cover bg-no-repeat">
            <div className='scrollbar overflow_scrollbar overflow-auto py-2 px-[6%]'>
                {
                    messages && messages.map((message)=>(
                        <div>
                           <Message message={message} key={message._id}
                           me={user._id === message.sender._id}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default ChatMessages;
