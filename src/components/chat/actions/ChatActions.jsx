import React, { useRef, useState } from 'react';
import { SendIcon } from '../../../svg';
import Input from './Input';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../../../features/chatSlice';
import { ClipLoader } from 'react-spinners';
import EmojiPickerApp from './EmojiPicker';
import { Attachments } from './attachments';

const ChatActions = () => {
    const dispatch =useDispatch();
    const [showPicker,setShowPicker] = useState(false);
    const [showAttachments,setShowAttachments] = useState(false);
    const {activeConversation,status} = useSelector((state)=>state.chat);
    const {user} = useSelector((state)=>state.user);
    const {token} = user;
    const textRef=useRef();
    const [message,setMessage] = useState("");
    const [loading, setLoading]=useState(false);
    const values={
        message,
        convo_id:activeConversation._id,
        files:[],
        token,
    }
    const SendMessageHandler=async(e)=>{
        e.preventDefault();
        setLoading(true);
        await dispatch(sendMessage(values));
        setMessage("");
        setLoading(false);
    }
    return (
        <form className="dark:bg-dark_bg_2 h-[60px] w-full flex items-center absolute bottom-0 py-2 px-4 select-none"
            onSubmit={(e)=>SendMessageHandler(e)}
        >
            <div className='w-full flex items-center gap-x-2'>
                <ul className="flex gap-x-2">
                    <EmojiPickerApp textRef={textRef} message={message} setMessage={setMessage}
                    showPicker={showPicker} setShowPicker={setShowPicker} setShowAttachments={setShowAttachments} />
                    <Attachments showAttachments={showAttachments} setShowAttachments={setShowAttachments} setShowPicker={setShowPicker}/>
                </ul>
                <Input message={message} setMessage={setMessage} textRef={textRef}/>
                <button type="submit" className='btn'>
                    {
                        status==="loading" && loading ? <ClipLoader color="#E9EDEF" size={25}/>:

                        (<SendIcon className="dark:fill-dark_svg_1"/>)
                    }
                </button>
            </div>
        </form>

    );
}

export default ChatActions;
