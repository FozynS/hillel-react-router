import useApi from "../../lib/useApi";
import getData from "../../api/getData";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Row, Col } from "antd";


function Photos() {
  const [photos, setPhotos] = useState([]);
  const { albumId } = useParams();
  const way = `photos?albumId=${albumId}`;

  useApi(() => getData(way), setPhotos);

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
