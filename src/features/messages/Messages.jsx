import Message from "./Message";

function Messages() {
  const messages = [
    {
      user: "Sina",
      message: "Hello",
    },
    { user: "Zhina", message: "How are you?" },
  ];
  return (
    <ul className="bg-slate-100 flex flex-col gap-1 px-4 py-2">
      {messages.map((message) => (
        <Message key={message} message={message} />
      ))}
    </ul>
  );
}

export default Messages;
