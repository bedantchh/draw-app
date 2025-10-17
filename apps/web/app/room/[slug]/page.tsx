import axios from 'axios'
import { BACKEND_URL } from '../../config';
import { ChatRoom } from '../../../components/ChatRoom';

async function getRoomId(slug:string) {
  // console.log(slug)
  const response = await axios.get(`${BACKEND_URL}/room/${slug}`);

  const roomId = response.data.room.id 
  return roomId;
}

const ChatRoom1 = async({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const slug = (await params).slug;
  const roomId = await getRoomId(slug);
  return <>
    <ChatRoom id={roomId} />
  </>;
};

export default ChatRoom1;
