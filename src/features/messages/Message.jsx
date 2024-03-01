function Message({ message }) {
  return (
    <li>
      {message.author}: {message.message}
    </li>
  );
}

export default Message;
