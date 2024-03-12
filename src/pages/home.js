import { useEffect } from "react";
import { Sidebar } from "../components/sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getConversations } from "../features/chatSlice";
import { WhatsappHome } from "../components/chat";

export default function Home(){

    const dispatch = useDispatch();
    const {user} = useSelector((state)=> state.user)
    const {activeConversation} = useSelector((state)=>state.chat);
    console.log("active", activeConversation);
    useEffect(()=>{
        if(user?.token){
            dispatch(getConversations(user.token));
        }
    },[user]);
    return(
        <div className="h-screen dark:bg-dark_bg_1 flex items-center
        justify-center py-[19px] overflow-hidden">

        <div className="container h-screen flex">
            {/* Sidebar */}
            <Sidebar/>
            {
                activeConversation._id ? "home" :
                <WhatsappHome/>
            }
        </div>



        </div>
    )

}