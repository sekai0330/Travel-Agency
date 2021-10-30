import React from "react";
import { Card, Col, Button } from "react-bootstrap";

const SingleBooking = ({ booking, id }) => {
  const deleteBooking = (id) => {
    fetch(`https://warm-cove-96847.herokuapp.com/booking/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((deleteData) => {
        if (deleteData.deletedCount > 0) {
          alert("Deleted Successfully");
        }
      });
  };
  return (
    <Col sm={12} md={4}>
      <Card style={{ width: "22rem" }}>
        <Card.Img variant='top' src={booking.img} height='244px' />
        <Card.Body>
          <Card.Title className='package-title'>{booking.title}</Card.Title>
          <p className='place-name'>{booking.place}</p>
          <p className='package-description'>{booking.description}</p>
        </Card.Body>
        <Card.Footer style={{ backgroundColor: "white" }}>
          <p>
            <i className='fas fa-calendar-alt'></i> {booking.time}
          </p>
          <div className='d-flex justify-content-between'>
            <p className='package-price'>${booking.price}</p>
            <Button onClick={() => deleteBooking(id)} variant='success'>
              DELETE IT
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default SingleBooking;
