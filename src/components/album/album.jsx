import { useState } from "react";
import Photos from "../photo/photo";
import useApi from "../../lib/useApi";
import getPhotos from "../../api/getPhotos";
import styled from "styled-components";

const Ol = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Button = styled.button`
  margin-left: 20px;
`;

function Albums({ albums }) {
  const [isVisiblePhotos, setIsVisiblePhotos] = useState(false);
  const [photos, setPhotos] = useState({});
  
  useApi(getPhotos, setPhotos);

  return (
    <Ol>
      {albums.slice(0, 5).map(album => (
        <li key={album.id}>
          {album.title}
          <br />
          <Button onClick={() => {
            setIsVisiblePhotos(!isVisiblePhotos);
          }}>Photos</Button>

          {isVisiblePhotos && <Photos photos={photos} albumId={album.id}/>}
        </li>

      ))}
    </Ol>
  )
}

export default Albums;