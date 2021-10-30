import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Package from "./Package/Package";
import "./Packages.css";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("https://warm-cove-96847.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  return (
    <Container className='my-md-5 my-3'>
      <h1 className='packages-title'>PACKAGES</h1>
      <p className='package-sub'>BEST TRAVEL PACKAGES</p>
      <Row className='g-4'>
        {packages.map((pack) => (
          <Package key={pack._id} pack={pack}></Package>
        ))}
      </Row>
    </Container>
  );
};

export default Packages;
