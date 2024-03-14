import useApi from "../../lib/useApi";
import getPhotos from "../../api/getPhotos";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Row, Col, Button } from "antd";


function Photos() {
  const [photos, setPhotos] = useState([]);
  const { albumId } = useParams();

  useApi(() => getPhotos(albumId), setPhotos);

  return (
    <Row gutter={[16, 24]} style={{ justifyContent: "center" }}>
      {photos.map((photo) => (
        <Col className="gutter-row" span={3} key={photo.id}>
          <img src={photo.thumbnailUrl} alt={photo.title} />
        </Col>
      ))}
    </Row>
  );
}

export default Photos;
