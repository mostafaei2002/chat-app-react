import { useSelector } from "react-redux";
import User from "./User";

function Users() {
  const users = useSelector((state) => state.users.users);
  console.log(users);

  return (
    <ul className="row-span-2 bg-slate-100 border-r-2 border-r-slate-200 divide-y divide-slate-200">
      {users.length &&
        users.map((user) => <User key={user} name={user.name} />)}
    </ul>
  );
}

export default Users;
