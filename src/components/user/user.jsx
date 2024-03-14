import { Link } from "react-router-dom";
import { Button, Col } from "antd";

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

function User({ user }) {
  return (
    <Col className="gutter-row" span={7}>
      <div style={style}>
        {user.name}
        <Link to={`/albums/${user.id}`}>
          <Button> Albums </Button>
        </Link>
      </div>
    </Col>
  );
}

export default User;
