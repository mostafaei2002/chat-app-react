import { useSelector } from "react-redux";
import Message from "./Message";

function Messages() {
  const messages = useSelector((state) => state.messages.messages);
  console.log(messages);
  return (
    <ul className="bg-slate-100 flex flex-col gap-1 px-4 py-2">
      {messages.map((message) => (
        <Message key={message.message} message={message} />
      ))}
    </ul>
  );
}

export default Messages;
