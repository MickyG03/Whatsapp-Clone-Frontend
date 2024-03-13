import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getConversationId } from '../../../utils/chat';
import { open_create_conversations } from '../../../features/chatSlice';

const Contact = ({contact,setSearchResults}) => {

    const dispatch = useDispatch();
    const {user}= useSelector((state)=> state.user);
    const{token} = user;
    const values = {
        receiver_id:contact._id,
        token,
    }
    const openConversation=async ()=>{
        await dispatch(open_create_conversations(values))
        setSearchResults([]);
    }

    return (

        <li
        onClick={()=> openConversation()}
        className='list-none h-[72px] hover:dark:bg:2 cursor-pointer dark:text-dark_text_1 px-[10px]'>

            <div className="flex items-center  gap-x-3">

                <div className="relative min-w-[50px] max-w-[50px] h-[50px] rounded-full overflow-hidden">
                    <img src={contact.picture} alt={contact.name} className="w-full h-full object-cover"/>
                </div>

                <div className="w-full flex flex-col">
                    <h1 className="font-bold flex items-center gap-x-2">
                        {contact.name}
                    </h1>
                    <div>
                        <div className="flex item-center gap-x-1 dark:text-dark_text_2">
                            <div className="flex-1 items-center gap-x-1 dark:text-dark_text_2">
                                <p>
                                    {contact.status}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ml-16 border-b dark:border-b-dark_border_1"></div>
        </li>
    );
}

export default Contact;
