import { useState } from "react";
import useApi from "../../lib/useApi";
import getAlbums from "../../api/getAlbums";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Button } from "antd";

const style = {
  display: "flex",
  gap: "10px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "#0092ff",
  padding: "8px 0",
  borderRadius: "10px",
  height: "100px",
  fontSize: "18px",
};

function Albums() {
  const [albums, setAlbums] = useState([]);
  const { userId } = useParams();

  useApi(() => getAlbums(userId), setAlbums);

  return (
    <Row gutter={[16, 24]} style={{ justifyContent: "center" }}>
      {albums.map((album) => (
        <Col className="gutter-row" span={10} key={album.id}>
          <div style={style}>
            {album.title}
            <Link to={`/photos/${album.id}`}>
              <Button type="dashed">Photos</Button>
            </Link>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Albums;
