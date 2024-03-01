import { useState } from "react";
import { addMessage } from "../../store/messagesSlice";
import { useDispatch } from "react-redux";

function AddMessage() {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const user = "Sina";

  function handleSubmit(e) {
    e.preventDefault();
    console.log(message);
    dispatch(addMessage({ author: user, message }));
    setMessage("");
  }

  return (
    <form className="bg-blue-500 flex" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write your message"
        className="flex-grow align-top px-4  focus:outline-none"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </form>
  );
}

export default AddMessage;
