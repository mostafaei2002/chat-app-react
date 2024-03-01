const SERVER = "ws://localhost:8989";

export async function addUserApi(name) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(SERVER);

    console.log(name);
    ws.onopen = () => {
      ws.send(JSON.stringify({ type: "ADD_USER", name }));
    };

    ws.onmessage = (message) => {
      const response = JSON.parse(message.data);
      console.log(response);
      resolve(response);
    };

    ws.onerror = (error) => reject(error);
  });
}
