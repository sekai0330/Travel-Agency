import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Support from "../Contact/Support";
import Discount from "../Discount/Discount";
import "./About.css";

const About = () => {
  // This Components will be displayed Our Company Features
  return (
    <div className='my-md-5 my-3'>
      <p className='regular-title'>About Us</p>
      <Container>
      <Row className='g-4 mb-4'>
        <Col sm={12} md={6}>
          <img
            className='img-fluid'
            src='https://i.ibb.co/9hbvtFV/1.png'
            alt=''
          />
        </Col>
        <Col sm={12} md={6} className='description ps-md-5'>
          <p className='sub'>WE ARE MANALI</p>
          <div className='company-text'>
            <p className='regular-sub'>
              Hello. Our agency has been present for over 20 years. We make the
              best for all our customers.
            </p>
            <p>
              <i className='far fa-check-circle'></i> We offer daily tours
            </p>
            <p>
              <i className='far fa-check-circle'></i> Never lose your deposit
            </p>
            <p>
              <i className='far fa-check-circle'></i> Handpicked hotels
            </p>
            <p>
              <i className='far fa-check-circle'></i> Best price guarantee
            </p>
            <p>
              <i className='far fa-check-circle'></i> 5 star accommodations
            </p>
            <p>
              <i className='far fa-check-circle'></i> Special gifts & offers for
              you
            </p>
          </div>
          <Link to='/packages'>
            <button className='btn btn-success btn-regular'>
              View All Package
            </button>
          </Link>
        </Col>
      </Row>
      </Container>
      <Discount />
      <Support />
    </div>
  );
};

export default About;
