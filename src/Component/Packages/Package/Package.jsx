import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Package = ({ pack }) => {
  //  import package as pack from packages component
  return (
    <Col xs={12} md={4}>
      <Card style={{ width: "22rem" }}>
        <Card.Img variant='top' src={pack.img} height='244px' />
        <Card.Body>
          <Card.Title className='package-title'>{pack.title}</Card.Title>
          <p className='place-name'>{pack.place}</p>
          <p className='package-description'>{pack.description}</p>
        </Card.Body>
        <Card.Footer style={{ backgroundColor: "white" }}>
          <p>
            <i className='fas fa-calendar-alt ico'></i> {pack.time}
          </p>
          <div className='d-flex justify-content-between'>
            <p className='package-price'>${pack.price}</p>
            <Link to={`/booking/${pack._id}`}>
              <Button variant='success'>BOOKING NOW</Button>
            </Link>
          </div>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Package;
