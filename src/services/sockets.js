import { addMessage } from "../store/messagesSlice";
import { updateUsers } from "../store/usersSlice";

import { SERVER } from "../constants";

function setupSocket(dispatch) {
  const socket = new WebSocket(SERVER);

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log(`data received from server ${data}`);

    switch (data.type) {
      case "ADD_MESSAGE": {
        console.log(data);
        dispatch(addMessage(data));
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
