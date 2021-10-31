import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Loader from "react-loader-spinner";
import SingleBooking from "../MyBooking/SingleBooking";

const AllBooking = () => {
  const [allBooking, setAllBooking] = useState([]);

  // Load all bookings data from the database
  useEffect(() => {
    fetch("https://warm-cove-96847.herokuapp.com/allbooking")
      .then((res) => res.json())
      .then((data) => setAllBooking(data));
  }, []);

  // spinner add before page loading
  if (!allBooking.length) {
    return (
      <div className='text-center my-md-5 my-3'>
        <Loader type='Oval' color='#00BFFF' height={80} width={80} />
      </div>
    );
  }

  // return all booking data
  return (
    <Container className='my-md-5 my-3'>
      <p className='regular-title'>All Booked Package</p>
      <Row className='g-3'>
        {allBooking.map((booking) => (
          <SingleBooking
            booking={booking.packag}
            key={booking._id}
            fullBooking={booking}
          />
        ))}
      </Row>
    </Container>
  );
};

export default AllBooking;
