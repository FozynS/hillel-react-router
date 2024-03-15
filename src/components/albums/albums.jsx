import { useState } from "react";
import useApi from "../../lib/useApi";
import getData from "../../api/getData";
import { Link, Outlet, useParams } from "react-router-dom";
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

const title = {
  textAlign: 'center'
}

function Albums() {
  const [albums, setAlbums] = useState([]);
  const { userId } = useParams();
  const way = `albums?userId=${userId}`;

  useApi(() => getData(way), setAlbums);

  return (
    <>
      <h1 style={title}>User №{userId} Albums</h1>
      <Row gutter={[16, 24]} style={{ justifyContent: "center" }}>
        {albums.map((album) => (
          <Col className="gutter-row" span={10} key={album.id}>
            <div style={style}>
              {album.title}
              <Link to={`photos/${album.id}`}>
                <Button type="dashed">Photos</Button>
              </Link>
            </div>
          </Col>
        ))}
      </Row>
      <Outlet/>
    </>
  );
}

export default Albums;
