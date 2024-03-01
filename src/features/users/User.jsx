import { useSelector } from "react-redux";

function User({ user }) {
  const activeUser = useSelector((state) => state.users.currentUser);
  console.log(user, activeUser);
  const isActive = activeUser === user.name;

  return (
    <li className={`py-2 px-4 ${isActive ? "bg-slate-300" : ""} `}>
      {user.name}
    </li>
  );
}

export default User;
