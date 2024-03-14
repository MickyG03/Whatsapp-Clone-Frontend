import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const CONVERSATION_ENDPOINT = `${process.env.REACT_APP_API_ENDPOINT}/conversation`
const MESSAGE_ENDPOINT = `${process.env.REACT_APP_API_ENDPOINT}/message`

const initialState={
    status:"",
    error:"",
    conversations:[],
    activeConversation:{},
    messages:[],
    notifications:[],
}

export const getConversations = createAsyncThunk("conversation/all",
    async(token, {rejectWithValue})=>{
        try{
            const {data} = await axios.get(CONVERSATION_ENDPOINT,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            });
            return data;
        }catch(error){
            return rejectWithValue(error.response.data.error.message);
        }
});

export const getConversationMessages = createAsyncThunk("conversation/messages",
    async(values, {rejectWithValue})=>{
        const{token,convo_id} = values;
        try{
            const {data} = await axios.get(
                `${MESSAGE_ENDPOINT}/${convo_id}`,
                {
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
            });
            return data;
        }catch(error){
            return rejectWithValue(error.response.data.error.message);
        }
});

export const sendMessage = createAsyncThunk("message/send",
    async(values, {rejectWithValue})=>{

        const{token,message,convo_id,files } = values;
        try{
            const {data} = await axios.post(
                MESSAGE_ENDPOINT,{
                    message,
                    convo_id,
                    files,
                },
                {
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
            });
            return data;
        }catch(error){
            return rejectWithValue(error.response.data.error.message);
        }
});

export const open_create_conversations = createAsyncThunk("conversation/open_create",
    async(values, {rejectWithValue})=>{
        const{token,receiver_id} = values;
        try{
            const {data} = await axios.post(CONVERSATION_ENDPOINT,
                {receiver_id},
                {
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
            });
            return data;
        }catch(error){
            return rejectWithValue(error.response.data.error.message);
        }
});

export const chatSlice = createSlice({
    name:"chat",
    initialState,
    reducers:{
        setActiveConversation:(state,action)=>{
            state.activeConversation = action.payload;
        },
        updateMessagesAndConversations:(state,action)=>{

            let convo=state.activeConversation;
            if (convo._id===action.payload.conversation._id){
                state.messages=[...state.messages, action.payload];
            }

            let conversation = {...action.payload.conversation,
                latestMessage:action.payload,
            };
            let newConvos = [...state.conversations].filter(
                (c)=>c._id !== conversation._id
            );
            newConvos.unshift(conversation);
            state.conversations=newConvos;


        }
    },
    extraReducers(builder){
        builder
        .addCase(getConversations.pending,(state,action)=>{
            state.status = "loading";
        })
        .addCase(getConversations.fulfilled,(state,action)=>{
            state.status = "succeeded";
            state.conversations=action.payload;
        })
        .addCase(getConversations.rejected,(state,action)=>{
            state.status = "failed";
            state.error = action.payload;
        })
        .addCase(open_create_conversations.pending,(state,action)=>{
            state.status = "loading";
        })
        .addCase(open_create_conversations.fulfilled,(state,action)=>{
            state.status = "succeeded";
            state.activeConversation=action.payload;
        })
        .addCase(open_create_conversations.rejected,(state,action)=>{
            state.status = "failed";
            state.error = action.payload;
        })
        .addCase(getConversationMessages.pending,(state,action)=>{
            state.status = "loading";
        })
        .addCase(getConversationMessages.fulfilled,(state,action)=>{
            state.status = "succeeded";
            state.messages=action.payload;
        })
        .addCase(getConversationMessages.rejected,(state,action)=>{
            state.status = "failed";
            state.error = action.payload;
        }).addCase(sendMessage.pending,(state,action)=>{
            state.status = "loading";
        })
        .addCase(sendMessage.fulfilled,(state,action)=>{
            state.status = "succeeded";
            state.messages=[...state.messages,action.payload];
            console.log(action.payload.conversation);
            let conversation = {...action.payload.conversation,
                latestMessage:action.payload,
            };
            let newConvos = [...state.conversations].filter(
                (c)=>c._id !== conversation._id
            );
            newConvos.unshift(conversation);
            state.conversations=newConvos;
        })
        .addCase(sendMessage.rejected,(state,action)=>{
            state.status = "failed";
            state.error = action.payload;
        });
    }
});

export const {setActiveConversation, updateMessagesAndConversations} = chatSlice.actions;

export default chatSlice.reducer;