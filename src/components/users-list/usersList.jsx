import { useState } from "react";
import User from "../user/user";
import getData from "../../api/getData";
import useApi from "../../lib/useApi";
import { Row } from "antd";

const title = {
  textAlign: 'center'
}

function UsersList() {
  const [users, setUsers] = useState([]);
  const way = 'users';

  useApi(() => getData(way), setUsers);

  return (
    <>
      <h1 style={title}>User List</h1>
      <Row gutter={[16, 24]} style={{justifyContent: "center"}}>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </Row>
    </>
  );
}

export default UsersList;
