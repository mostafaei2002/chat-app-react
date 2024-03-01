import { useState } from "react";
import { addMessage } from "../../store/messagesSlice";
import { useDispatch, useSelector } from "react-redux";

function AddMessage() {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const username = useSelector((state) => state.users.currentUser);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(message);
    dispatch(addMessage({ author: username, message }));
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
