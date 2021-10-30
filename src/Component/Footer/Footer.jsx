import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className='pb-md-5 py-3 footer-area'>
      <Container>
        <Row>
          <Col sm={12} md={3}>
            <p className='footer-title'>About Clinic</p>
            <p className='footer-text'>
              The cosgrove staff members are well trained professionals, We will
              fax the requested records directly to the qualified doctors the
              day before or the day of the appointment.
            </p>
            <Link to='/service'>
              <button className='btn btn-success px-3 mt-md-4'>Get Service</button>
            </Link>
          </Col>
          <Col sm={12} md={3}>
            <p className='footer-title'>Departments</p>
            <div className='footer-list'>
              <Link to='/'>Pediatric</Link>
              <Link to='/'>Cardiology</Link>
              <Link to='/'>Neurology</Link>
              <Link to='/'>Dentel Care</Link>
              <Link to='/'>Urology</Link>
              <Link to='/'>Pulmonary</Link>
              <Link to='/'>Х-ray & CT Scan</Link>
            </div>
          </Col>
          <Col sm={12} md={3}>
            <p className='footer-title'>Latest News & Tips</p>
            <p className='footer-text'>
              <Link to='/'>Cancer treatment for poor peoples </Link>
              <p>02th Dec 2017</p>
            </p>
            <hr />
            <p className='footer-text'>
              <Link to='/'>Hospitality Managements </Link>
              <p>03th Dec 2017</p>
            </p>
            <hr />
            <p className='footer-text'>
              <Link to='/'>Disease based on junk foods</Link>
              <p>03th Dec 2017</p>
            </p>
            <hr />
          </Col>
          <Col sm={12} md={3}>
            <p className='footer-title'>Contact Details</p>
            <p className='footer-text'>
              250 Main Street, Brooklyn, NY 52143, US
            </p>
            <p className='footer-text'>
              <i className='fas fa-phone-alt'></i>
              Tell <span className='number'>(800)-456-789</span>
            </p>
            <p className='footer-text'>
              <i className='fas fa-envelope'></i>
              Email <span className='number'> info@example.com</span>
            </p>
            <p className='footer-text'>
              <i className='fas fa-globe-asia'></i>
              Website <span className='number'> medical.com</span>
            </p>
            <p className='footer-direction mx-4'>
              Get Map Direction <i className='fas fa-long-arrow-alt-right'></i>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
