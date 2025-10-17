"use client";

import { useEffect, useState } from "react";
import { useSocket } from "../hooks/useSocket";

export const ChatRoomClient = ({
  messages,
  id,
}: {
  messages: { message: string }[];
  id: string;
}) => {
  const [chats, setChats] = useState(messages);
  const { socket, loading } = useSocket();
  const [currentMessage, setCurrentMessage] = useState("");

  useEffect(() => {
    if (socket && !loading) {

      socket.send(
        JSON.stringify({
          type: "join_room",
          roomId: id,
        })
      );
      socket.onmessage = (event) => {
        const parsedData = JSON.parse(event.data);
        if (parsedData.type === "chat") {
          setChats((c) => [...c, { message: parsedData.message }]);
        }
      };
    }
    // return ()=>{
    //   alert("closed")
    //   socket?.close()
    // }
  }, [socket, loading, id]);
  
  return (
    <div>
      {chats.map((m,index) => (
        <div key={index}>{m.message}</div> //2:35:00
      ))}
      {/* <div>hi there</div> */}
      <input
        type="text"
        value={currentMessage}
        onChange={(e) => setCurrentMessage(e.target.value)}
      />
      <button
        onClick={() => {
          socket?.send(JSON.stringify({
            type: "chat",
            roomId: id,
            message: currentMessage
          }));

          setCurrentMessage("")
        }}
      >
        send message
      </button>
    </div>
  );
};
