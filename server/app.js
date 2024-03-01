import WebSocket, { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8989 });

const users = [];

function broadcast(data, ws) {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN && client != ws) {
      client.send(JSON.stringify(data));
    }
  });
}

console.log("Starting up ...");
wss.on("connection", (ws) => {
  let index;
  console.log("Connected");

  ws.on("message", (message) => {
    const data = JSON.parse(message);
    // console.log(message);

    switch (data.type) {
      case "ADD_USER": {
        console.log("Got ADD_USER event");
        index = users.length;
        users.push({ name: data.name, id: index + 1 });

        console.log(users);
        ws.send(
          JSON.stringify({
            type: "USERS_LIST",
            users,
          })
        );
        broadcast(
          {
            type: "USERS_LIST",
            users,
          },
          ws
        );
        break;
      }

      case "ADD_MESSAGE": {
        console.log("Got ADD_MESSAGE event");
        broadcast(
          {
            type: "ADD_MESSAGE",
            id: new Date().toISOString(),
            message: data.message,
            author: data.author,
          },
          ws
        );
        break;
      }

      default: {
        console.log("Got UNKNOWN event");
        break;
      }
    }
  });

  ws.on("close", () => {
    console.log("User closing connection");
    if (typeof index === "number" && index >= 0 && index < users.length) {
      users.splice(index, 1);
      broadcast({ type: "USERS_LIST", users }, ws);
      console.log(users);
    } else {
      console.log("Invalid index:", index);
    }
  });
});
