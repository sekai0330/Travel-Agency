import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Loader from "react-loader-spinner";
import useAuth from "../../Hooks/useAuth";
import SingleBooking from "./SingleBooking";

const MyBooking = () => {
  // import user from useAuth 
  const { user } = useAuth();
  const [mybooking, setMyBooking] = useState([]);

  // Load data from database by email
  useEffect(() => {
    fetch(`https://warm-cove-96847.herokuapp.com/booking/?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyBooking(data));
  });
  if (!mybooking.length) {
    return (
      <div className='text-center my-md-5 my-3'>
        <Loader type='Oval' color='#00BFFF' height={80} width={80} />
      </div>
    );
  }
  return (
    <Container className='my-md-5 my-3'>
      <Row className='g-4'>
        {mybooking.map((booking) => <SingleBooking booking={booking.packag} key={booking._id} fullBooking={booking} />)}
      </Row>
    </Container>
  );
};

export default MyBooking;
