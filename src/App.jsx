import { useEffect } from "react";
import { useDispatch } from "react-redux";

import AddMessage from "./features/messages/AddMessage";
import Messages from "./features/messages/Messages";
import Users from "./features/users/Users";
import AppLayout from "./ui/AppLayout";

import { setCurrentUser } from "./store/usersSlice";
import { generateName } from "./utils/name.js";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const username = generateName();
    dispatch(setCurrentUser(username));
  }, [dispatch]);

  return (
    <AppLayout>
      <Users />
      <Messages />
      <AddMessage />
    </AppLayout>
  );
}

export default App;
