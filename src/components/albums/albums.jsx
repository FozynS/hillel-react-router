import { useState } from "react";
import Photos from "../photos/photos";
import styled from "styled-components";

const Ol = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Button = styled.button`
  margin-left: 20px;
`;

function Albums({ albums, photos, handlePhotos, toggleVisible }) {
  const [visiblePhotos, setVisiblePhotos] = useState(false);
  
  return (
    <Ol>
      {albums.map(album => (
        <li key={album.id}>
          {album.title}
          <br />
          <Button onClick={() => {
            toggleVisible(setVisiblePhotos, visiblePhotos);
            handlePhotos(album.id)
          }}>Photos</Button>

          {visiblePhotos && <Photos photos={photos} albumId={album.id}/>}
        </li>

      ))}
    </Ol>
  )
}

export default Albums;