import {  Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Home = () => {
  return (
    <div>
        <div className="feature-cards">
        <Card style={{ width: '18rem', backgroundColor:"#222",color:"white"}}>
         <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.dq67H_j9l1bS4K3BLNqL6gHaHa?pid=ImgDet&rs=1" />
          <Card.Body>
          <Card.Title>Crop Image</Card.Title>
        <Card.Text>
        Precision image cropping for striking visuals.
        </Card.Text>
        <Link to="/crop"><Button variant="primary">Crop Tool</Button></Link>
      </Card.Body>
    </Card>


        <Card style={{ width: '18rem' , backgroundColor:"#222",color:"white"}}>
         <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.pqAA7eV8PNeB7yDAMewlawHaHa?pid=ImgDet&rs=1" />
          <Card.Body>
          <Card.Title>Edit Image</Card.Title>
        <Card.Text>
        Transform images effortlessly with our intuitive editing.
        </Card.Text>
        <Link to="/edit_image"><Button variant="primary">Edit Your Image</Button></Link>
      </Card.Body>
    </Card>

    </div>
    </div>
  )
}

export default Home
