import { useState } from "react";
import Album from "../album/album";
import useApi from "../../lib/useApi";
import getAlbums from "../../api/getAlbums";
import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Li = styled.li`
  font-size: 18px;
`;

const Button = styled.button`
  margin-left: 20px;
`;

function User({ users, selectedUserId, setSelectedUserId }) {
  const [isVisibleAlbums, setIsVisibleAlbums] = useState(false);
  const [albums, setAlbums] = useState([]);

  useApi(getAlbums, setAlbums);

  return (
    <>
      <Ul>
        {users.length > 0 ? (
          users.map((user) => (
            <Li key={user.id}>
              {user.name}
              <br />
              <Button
                onClick={() => {
                  setIsVisibleAlbums(!isVisibleAlbums);
                  setSelectedUserId(user.id);
                }}
              >Albums
              </Button>
              {isVisibleAlbums && selectedUserId === user.id && <Album albums={albums}/>}
            </Li>
          ))
        ) : (
          <h1>Sorry</h1>
        )}
      </Ul>
    </>
  );
}

export default User;