import { useEffect, useRef, useState } from "react";
import { Sidebar } from "../components/sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getConversations, updateMessagesAndConversations } from "../features/chatSlice";
import { ChatContainer, WhatsappHome } from "../components/chat";
import SocketContext from "../context/SocketContext";
import Call from "../components/chat/call/Call";
const callData={
    socketId:"",
    receiveingCall:false,
    callEnded:false,
}
function Home({socket}){

    const dispatch = useDispatch();
    const {user} = useSelector((state)=> state.user)
    const {activeConversation} = useSelector((state)=>state.chat);
    const [onlineUsers,setOnlineUsers] = useState([]);
    const [typing, setTyping] = useState(false);
    const [call, setCall] = useState(callData);
    const{receiveingCall, callEnded, socketId} = call;
    const [callAccepted, setcallAccepted] = useState(false);
    const [stream,setStream]=useState();
    const myVideo = useRef();
    const userVideo = useRef();
    useEffect(()=>{
        if(user?.token){
            dispatch(getConversations(user.token));
        }
    },[user]);

    useEffect(()=>{
        setupMedia();
        socket.on('setup socket',(id)=>{
            setCall({...call, socketId:id})
        })
    },[]);
    // console.log("socket id", socketId)
    const setupMedia = () => {
        navigator.mediaDevices.getUserMedia({video:true,audio:true})
        .then((stream)=>{
            setStream(stream);
            // myVideo.current.srcObject = stream;
        })
    }

    useEffect(()=>{
        socket.emit("join",user._id);
        socket.on("get-online-users",(users) => {
            setOnlineUsers(users);
        });
    },[user]);

    useEffect(()=>{
        socket.on("receive message",(message)=>{
            dispatch(updateMessagesAndConversations(message))
        });
        socket.on("typing",(conversation)=> setTyping(conversation));
        socket.on("stop typing",()=> setTyping(false));
    }, []);

    return(
        <>
            <div className="h-screen dark:bg-dark_bg_1 flex items-center
            justify-center overflow-hidden">

                <div className="container py-[19px]  h-screen flex">
                    {/* Sidebar */}
                    <Sidebar onlineUsers={onlineUsers} typing={typing}/>
                    {
                        activeConversation._id ? <ChatContainer onlineUsers={onlineUsers} typing={typing}/> :
                        <WhatsappHome/>
                    }
                </div>

            </div>
            <Call call={call}
            setCall={setCall}
            callAccepted={callAccepted}
            myVideo={myVideo}
            userVideo={userVideo}
            stream={stream}/>
        </>
    )

}

const HomeWithSocket=(props)=>(
    <SocketContext.Consumer>
        {(socket)=><Home {...props} socket={socket}/>}
    </SocketContext.Consumer>
);

export default HomeWithSocket;