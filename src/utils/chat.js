export const getConversationId=(user,users)=>{
    return users[0]._id===user._id ? users[1]._id : users[0]._id;
}
export const getConversationName=(user,users)=>{
    return users[0]._id===user._id ? users[1].name : users[0].name;
}
export const getConversationPicture=(user,users)=>{
    return users[0]._id===user._id ? users[1].picture : users[0].picture;
}