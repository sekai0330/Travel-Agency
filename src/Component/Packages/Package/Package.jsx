import React from "react";
import { Card, Col, Button } from "react-bootstrap";

const Package = ({ pack }) => {
  return (
    <Col sm={12} md={4}>
      <Card style={{ width: "22rem" }}>
        <Card.Img variant='top' src={pack.img} height='244px' />
        <Card.Body>
          <Card.Title className='package-title'>{pack.title}</Card.Title>
          <p className='place-name'>{pack.place}</p>
          <p className="package-description">{pack.description}</p>
        </Card.Body>
        <Card.Footer style={{ backgroundColor: "white" }}>
          <p>
            <i class='fas fa-calendar-alt'></i> {pack.time}
          </p>
          <div className='d-flex justify-content-between'>
            <p className='package-price'>${pack.price}</p>
            <Button variant='success'>BOOKING NOW</Button>
          </div>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Package;
