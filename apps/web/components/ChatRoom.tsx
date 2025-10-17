import axios from "axios";
import { BACKEND_URL } from "../app/config";
import { ChatRoomClient } from "./ChatRoomClient";

async function getChats(roomId: string) {
  const response = await axios.get(`${BACKEND_URL}/chats/${roomId}`);
  // console.log(response.data)
  return response.data.messages;
}

export const ChatRoom = async (roomId: string) => {
  console.log(roomId)
  const messages = await getChats(roomId.id);
  return <ChatRoomClient id={roomId.id} messages={messages}/>
};
