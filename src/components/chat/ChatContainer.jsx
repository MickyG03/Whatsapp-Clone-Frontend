import React from 'react';
import ChatHeader from './header/ChatHeader';

const ChatContainer = () => {

    return (
        <div className="relative w-full h-full border-l dark:border-l-darkborder_2 select-none
        overflow-hidden">
            <div>
            <ChatHeader/>
            </div>
        </div>
    );
}

export default ChatContainer;
