import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Home = () => {
  return (
    <div>
      <div className="feature-cards">
        <Card
          style={{ width: "18rem", backgroundColor: "#222", color: "white" }}
        >
          <Card.Img
            variant="top"
            src="https://th.bing.com/th/id/OIP.dq67H_j9l1bS4K3BLNqL6gHaHa?pid=ImgDet&rs=1"
          />
          <Card.Body>
            <Card.Title>Crop Image</Card.Title>
            <Card.Text>
              Precision image cropping for striking visuals.
            </Card.Text>
            <Link to="/crop">
              <Button variant="primary">Crop Tool</Button>
            </Link>
          </Card.Body>
        </Card>

        <Card
          style={{ width: "18rem", backgroundColor: "#222", color: "white" }}
        >
          <Card.Img
            variant="top"
            src="https://th.bing.com/th/id/OIP.pqAA7eV8PNeB7yDAMewlawHaHa?pid=ImgDet&rs=1"
          />
          <Card.Body>
            <Card.Title>Edit Image</Card.Title>
            <Card.Text>
              Transform images effortlessly with our intuitive editing.
            </Card.Text>
            <Link to="/edit_image">
              <Button variant="primary">Edit Image</Button>
            </Link>
          </Card.Body>
        </Card>

        <Card
          style={{ width: "18rem", backgroundColor: "#222", color: "white" }}
        >
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSttiy6_waCaNsbsH4ahOqf0O2z-gUfWXFxzg&usqp=CAU"
          />
          <Card.Body>
            <Card.Title>Resize Image</Card.Title>
            <Card.Text>
              Effortlessly optimize images with automatic resizing for faster
              loading and improved performance.
            </Card.Text>
            <Link to="/resize">
              <Button variant="primary">Resize</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "18rem", backgroundColor: "#222", color: "white" }}
        >
          <Card.Img
            variant="top"
            src="https://static.thenounproject.com/png/5238891-200.png"
          />
          <Card.Body>
            <Card.Title>AI Tags</Card.Title>
            <Card.Text>
              AI-powered image tags for your image,
              boosting engagement and searchability.
            </Card.Text>
            <Link to="/aitags">
              <Button variant="primary">AI Tags</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Home;
