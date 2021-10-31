import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Destance from "./Destance";

const Destination = () => {
  const [destinations, setDestinations] = useState([]);

  // Load destinations data from the database
  useEffect(() => {
    fetch("https://warm-cove-96847.herokuapp.com/destination")
      .then((res) => res.json())
      .then((data) => {
        setDestinations(data);
      });
  }, []);

  // return all destinations from here
  return (
    <div className='my-md-5 my-3'>
      <Container>
        <p className='regular-title'>TOP PLACES</p>

        <Row className='g-4'>
          {destinations.map((city) => (
            <Destance key={city._id} city={city}></Destance>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Destination;
