import AddMessage from "./features/messages/AddMessage";
import Messages from "./features/messages/Messages";
import Users from "./features/users/Users";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <AppLayout>
      <Users />
      <Messages />
      <AddMessage />
    </AppLayout>
  );
}

export default App;
