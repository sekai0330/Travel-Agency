import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Contact.css";

const Support = () => {
  return (
    <Container className='my-md-5 my-3'>
      <Row>
        <Col xs={12} md={6}>
          <img
            src='https://i.ibb.co/r68GWkp/5138237-2.jpg'
            alt=''
            className='img-fluid'
          />
        </Col>
        <Col xs={12} md={6}>
          <p className='support-title'>Customer Support</p>
          <p className='support-sub'>
            We want our customers to be 100% satisfied
          </p>
          <p className='support-text'>
            We have designed our solution to make travel agents lives easier.
            Therefore, it is incredibly important for us to make sure that you
            are fully satisfied with your investment, and that it is performing
            the way you were hoping. Our team’s services remain at your
            disposition after the implementation to answer any question, resolve
            any doubt and even make small adjustments. This means that as a new
            TravelOperations user, you can call us whenever you need it, and you
            will always get personalized advice and guidance. We share the same
            goal: empowering your employees and help your business reach its
            full potential. To us, this means being here for you every step of
            the way, including after the implementation.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Support;
