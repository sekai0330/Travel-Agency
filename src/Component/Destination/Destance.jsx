import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Destination.css";
import Detailmodal from "./Detailmodal";

const Destance = ({ city }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  // return every single destination from here
  return (
    <Col xs={12} md={4}>
      <Card style={{ width: "22rem" }}>
        <Card.Img variant='top' src={city.picture} />
        <Card.Body>
          <p className='destination-title'>{city.title}</p>
          <Card.Text className='destination-text'>{city.description}</Card.Text>
        </Card.Body>
        <div className='d-flex'>
          <button className='w-50 destination-price'>$ {city.price}</button>
          <button className='w-50 destination-detail' onClick={handleOpen}>
            <i className='fas fa-info-circle'></i> See Details
          </button>
          <Detailmodal
            open={open}
            setOpen={setOpen}
            handleOpen={handleOpen}
            city={city}></Detailmodal>
        </div>
      </Card>
    </Col>
  );
};

export default Destance;
