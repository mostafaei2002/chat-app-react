import { updateUsers } from "../store/usersSlice";

const SERVER = "ws://localhost:8989";

function setupSocket(dispatch, username) {
  const socket = new WebSocket(SERVER);

  socket.onopen = () => {
    socket.send(
      JSON.stringify({
        type: "ADD_USER",
        name: username,
      })
    );
  };

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log(`data received from server ${data}`);

    switch (data.type) {
      case "ADD_MESSAGE": {
        break;
      }
      case "USERS_LIST": {
        console.log(data.users);
        dispatch(updateUsers(data.users));
        break;
      }

      default:
        break;
    }
  };

  return socket;
}

export default setupSocket;
