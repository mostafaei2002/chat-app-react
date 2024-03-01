import User from "./User";

function Users() {
  const users = ["Sina", "Zhina"];

  return (
    <ul className="row-span-2 bg-slate-100 border-r-2 border-r-slate-200 divide-y divide-slate-200">
      {users.map((user) => (
        <User key={user} name={user} />
      ))}
    </ul>
  );
}

export default Users;
