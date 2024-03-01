function AddMessage() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <form className="bg-blue-500 flex" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write your message"
        className="flex-grow align-top px-4  focus:outline-none"
      />
    </form>
  );
}

export default AddMessage;
