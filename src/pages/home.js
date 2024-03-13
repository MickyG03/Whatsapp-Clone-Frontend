import { useEffect } from "react";
import { Sidebar } from "../components/sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getConversations } from "../features/chatSlice";
import { ChatContainer, WhatsappHome } from "../components/chat";
import SocketContext from "../context/SocketContext";

function Home({socket}){

    const dispatch = useDispatch();
    const {user} = useSelector((state)=> state.user)
    const {activeConversation} = useSelector((state)=>state.chat);

    useEffect(()=>{
        if(user?.token){
            dispatch(getConversations(user.token));
        }
    },[user]);

    useEffect(()=>{
        socket.emit("join",user._id);
    },[user]);

    return(
        <div className="h-screen dark:bg-dark_bg_1 flex items-center
        justify-center overflow-hidden">

        <div className="container py-[19px]  h-screen flex">
            {/* Sidebar */}
            <Sidebar/>
            {
                activeConversation._id ? <ChatContainer/> :
                <WhatsappHome/>
            }
        </div>

        </div>
    )

}

const HomeWithSocket=(props)=>(
    <SocketContext.Consumer>
        {(socket)=><Home {...props} socket={socket}/>}
    </SocketContext.Consumer>
);

export default HomeWithSocket;