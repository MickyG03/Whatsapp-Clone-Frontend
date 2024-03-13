import React, { useRef, useState } from 'react';
import Attachments from './attachments/Attachments';
import { SendIcon } from '../../../svg';
import Input from './Input';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../../../features/chatSlice';
import { ClipLoader } from 'react-spinners';
import EmojiPickerApp from './EmojiPicker';

const ChatActions = () => {
    const dispatch =useDispatch();
    const {activeConversation,status} = useSelector((state)=>state.chat);
    const {user} = useSelector((state)=>state.user);
    const {token} = user;
    const textRef=useRef();
    const [message,setMessage] = useState("");
    const values={
        message,
        convo_id:activeConversation._id,
        files:[],
        token,
    }
    const SendMessageHandler=async(e)=>{
        e.preventDefault();
        await dispatch(sendMessage(values));
    }
    return (
        <form className="dark:bg-dark_bg_2 h-[60px] w-full flex items-center absolute bottom-7 py-2 px-4 select-none"
            onSubmit={(e)=>SendMessageHandler(e)}
        >
            <div className='w-full flex items-center gap-x-2'>
                <ul className="flex gap-x-2">
                    <EmojiPickerApp textRef={textRef} message={message} setMessage={setMessage}/>
                    <Attachments/>
                </ul>
                <Input message={message} setMessage={setMessage} textRef={textRef}/>
                <button type="submit" className='btn'>
                    {
                        status==="loading" ? <ClipLoader color="#E9EDEF" size={25}/>:

                        (<SendIcon className="dark:fill-dark_svg_1"/>)
                    }
                </button>
            </div>
        </form>

    );
}

export default ChatActions;
