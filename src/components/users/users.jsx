import { useState } from "react";
import User from "../user/user";
import getUsers from "../../api/getUsers";
import useApi from "../../lib/useApi";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);

  useApi(getUsers, setUsers);

  return (
    <>
      <h1>User List</h1>
      <User
        users={users}
        selectedUserId={selectedUserId}
        setSelectedUserId={setSelectedUserId}
      />
    </>
  );
}

export default UsersList;
