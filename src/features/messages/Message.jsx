function Message({ message }) {
  return (
    <li>
      {message.user}: {message.message}
    </li>
  );
}

export default Message;
