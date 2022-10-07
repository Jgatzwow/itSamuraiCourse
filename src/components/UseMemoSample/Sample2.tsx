import React, { useMemo, useState } from "react";

const UsersSecret = (props: { users: Array<string> }) => {
  console.log("UsersSecret");
  return (
    <div>
      {props.users.map((u, idx) => (
        <div key={idx}>{u}</div>
      ))}
    </div>
  );
};
const Users = React.memo(UsersSecret);

export const Sample2 = () => {
  const [counter, setCounter] = useState(5);
  const [users, setUsers] = useState(["MIchael", "Dimych", "Roma", "Denis"]);
  console.log("Sample2");

  const newArr = useMemo(() => {
    return users.filter((u) => u.toLowerCase().indexOf("a") > -1);
  }, [users]);

  const addUser = () => {
    const newUsers = [...users, "Genya" + new Date().getTime()];
    setUsers(newUsers);
  };
  return (
    <>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => addUser()}>Add User</button>
      <Users users={newArr} />
    </>
  );
};
