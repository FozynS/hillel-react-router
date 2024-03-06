import styled from "styled-components";
import Albums from "../albums/albums";
import { useState } from "react";

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

function UsersList({ users, albums, photos, handleAlbums, handlePhotos, selectedUserId, setSelectedUserId, toggleVisible }) {
  const [visibleAlbums, setVisibleAlbums] = useState(false);

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
                  toggleVisible(setVisibleAlbums, visibleAlbums);
                  setSelectedUserId(user.id);
                  handleAlbums(user.id);
                }}
              >Albums
              </Button>

              {visibleAlbums && selectedUserId === user.id && <Albums albums={albums} photos={photos} handlePhotos={handlePhotos} toggleVisible={toggleVisible}/>}
            </Li>
          ))
        ) : (
          <h1>Sorry</h1>
        )}
      </Ul>
    </>
  );
}

export default UsersList;
