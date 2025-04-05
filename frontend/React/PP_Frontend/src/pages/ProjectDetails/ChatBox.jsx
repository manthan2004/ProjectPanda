import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fetchChatByProject, fetchChatMessages, sendMessage } from "@/Redux/Chat/Action";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ChatBox = () => {
    const [message,setMessage]=useState("");
    const dispatch=useDispatch();
    const {auth,chat}=useSelector(store=>store)
    const {id}=useParams();
    const handleMessageChange=(e)=>{
        setMessage(e.target.value)
    }
    const handleSendMessage=()=>{
      dispatch(sendMessage({
        senderId:auth.user?.id,
        projectId:id,
        content:message
      }))
        console.log("message:",message)
        setMessage("")
    }
    useEffect(()=>{
      dispatch(fetchChatByProject(id))
    },[id])
    // useEffect(()=>{
    //   console.log("CHATS1:",chat)
    //   if(chat.chat&&chat.chat.id)dispatch(fetchChatMessages(chat.chat?.id))
    // },[chat.chat?.id])
    useEffect(() => {
      let interval;
    
      if (chat.chat?.id) {
        dispatch(fetchChatMessages(chat.chat.id)); // fetch once immediately
    
        interval = setInterval(() => {
          dispatch(fetchChatMessages(chat.chat.id)); // fetch repeatedly
        }, 3000); // every 3 seconds (adjust as needed)
      }
    
      return () => clearInterval(interval); // clean up on unmount
    }, [chat.chat?.id]);
    
  return (
    <div className="sticky">
      <div className="border rounded-lg">
        <h1 className="border-b p-5">Chat Box</h1>
        <div>

        <ScrollArea className="h-[32rem] w-full p-5 flex gap-3 flex-col">
          {chat.messages.map((item,index) => (
            item.sender.id!=auth.user.id? <div className="flex gap-2 mb-2 justify-start " key={item}>
              <Avatar>
                <AvatarFallback>{item.sender?.fullName[0]}</AvatarFallback>
              </Avatar>
                <div className="space-y-2 py-2 px-5 border rounded-ss-2xl rounded-e-xl">
                  <p>{item.sender.fullName }</p>
                  <p className="text-gray-300">{item.content}</p>
                </div>
            </div>
            : <div className="flex gap-2 mb-2 justify-end " key={item}>
              <div className="space-y-2 py-2 px-5 border rounded-se-2xl rounded-x-xl">
              <p>{item.sender.fullName }</p>
              <p className="text-gray-300">{item.content}</p>
              </div>
            <Avatar>
              <AvatarFallback>{item.sender.fullName[0]}</AvatarFallback>
            </Avatar>
          </div>
          ))}
        </ScrollArea>
          </div>
        <div className="relative p-0">
            <Input placeholder="type message..."
            className="py-7 border-t outline-none focus:outline-none focus:ring-0 rounded-none borer-b-0 border-x-0 "
             value={message} onChange={handleMessageChange}/>
                <Button onClick={handleSendMessage} className="absolute right-2 top-3 rounded-full" size="icon" variant="ghost">
               <PaperPlaneIcon/>
                </Button>
         
        </div>
      </div>
    </div>
  );
};
export default ChatBox;
