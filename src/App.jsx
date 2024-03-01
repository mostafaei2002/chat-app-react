import { useEffect } from "react";

import AddMessage from "./features/messages/AddMessage";
import Messages from "./features/messages/Messages";
import Users from "./features/users/Users";
import AppLayout from "./ui/AppLayout";

import { addUser } from "./store/usersSlice";
import { generateName } from "./utils/name";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const name = generateName();
    console.log(name);
    dispatch(addUser(name));
  }, []);

  return (
    <AppLayout>
      <Users />
      <Messages />
      <AddMessage />
    </AppLayout>
  );
}

export default App;
