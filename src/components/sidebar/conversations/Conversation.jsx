import { open_create_conversations } from "../../../features/chatSlice";
import { getConversationId } from "../../../utils/chat";
import { dateHandler } from "../../../utils/date";
import { useDispatch, useSelector } from "react-redux";
import { capitalize } from "../../../utils/string";

const Conversation = ({convo}) => {

    const dispatch = useDispatch();
    const {user}= useSelector((state)=> state.user);
    const{token} = user;
    const values = {
        receiver_id:getConversationId(user,convo.users),
        token,
    }
    const openConversation=()=>{
        dispatch(open_create_conversations(values))
    }
    return (

        <li
        onClick={()=>openConversation()}
        className=" h-[72px]  w-full dark:bg-dark_bg_1 hover:dark:bg-dark_bg_2 cursor-pointer
                dark:text-dark_text_1 px-[10px]">

                    <div className="relative w-full flex items-center justify-between py-[10px]">
                        <div className="flex items-center  gap-x-3">

                            <div className="relative min-w-[50px] max-w-[50px] h-[50px] rounded-full overflow-hidden">
                                <img src={convo.picture} alt={convo.name} className="w-full h-full object-cover"/>
                            </div>

                            <div className="w-full flex flex-col">
                                <h1 className="font-bold flex items-center gap-x-2">
                                    {capitalize(convo.name)}
                                </h1>
                                <div>
                                    <div className="flex item-center gap-x-1 dark:text-dark_text_2">
                                        <div className="flex-1 items-center gap-x-1 dark:text-dark_text_2">
                                            <p>
                                                {
                                                    convo.latestMessage?.message.length > 25 ?
                                                        `${convo.latestMessage?.message.substring(0,25)}...`
                                                        :
                                                        convo.latestMessage?.message
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="flex items-center gap-y-4 items-end text-xs">
                            <span className="dark:text-dark_text_2">
                                {
                                    convo.latestMessage?.createdAt
                                    ? dateHandler(convo.latestMessage?.createdAt)
                                    : ""
                                }
                            </span>

                        </div>
                    </div>
                    <div className="ml-16 border-b dark:border-b-dark_border_1"></div>
        </li>
    );
}

export default Conversation;
