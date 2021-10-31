import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Gallary.css";

function Galarry() {
  return (
    <div className='my-md-5 my-3 text-center'>
      <Container>
        <h1 className='regular-title'>Gallery of Tourists</h1>
        <Row className='g-2 g-md-3'>
          <Col sm={12} md={4}>
            <Card className='galary'>
              <img
                src='https://i.ibb.co/jDhJCnQ/img9-574ffca8.jpg'
                alt=''
                className='img-fluid galary-img'
              />
            </Card>
          </Col>
          <Col sm={12} md={4}>
            <Card className='galary'>
              <img
                src='https://i.ibb.co/CtGLnWD/img8-2a5e2cb9.jpg'
                alt=''
                className='img-fluid galary-img'
              />
            </Card>
          </Col>
          <Col sm={12} md={4}>
            <Card className='galary'>
              <img
                src='https://i.ibb.co/V9sdxXj/img7-42c048ae.jpg'
                alt=''
                className='img-fluid galary-img'
              />
            </Card>
          </Col>
          <Col sm={12} md={4}>
            <Card className='galary'>
              <img
                src='https://i.ibb.co/J2Zr8GP/img6-fb31ae53.jpg'
                alt=''
                className='img-fluid galary-img'
              />
            </Card>
          </Col>
          <Col sm={12} md={4}>
            <Card className='galary'>
              <img
                src='https://i.ibb.co/Y79L24S/img5-9fb9357a.jpg'
                alt=''
                className='img-fluid galary-img'
              />
            </Card>
          </Col>
          <Col sm={12} md={4}>
            <Card className='galary'>
              <img
                src='https://i.ibb.co/BZf3Cqm/img4-2f905b5a.jpg'
                alt=''
                className='img-fluid galary-img'
              />
            </Card>
          </Col>
          <Col sm={12} md={4}>
            <Card className='galary'>
              <img
                src='https://i.ibb.co/zFf3v57/img3-9308b6b5.jpg'
                alt=''
                className='img-fluid galary-img'
              />
            </Card>
          </Col>
          <Col sm={12} md={4}>
            <Card className='galary'>
              <img
                src='https://i.ibb.co/SVSBCxx/img1-d774f942.jpg'
                alt=''
                className='img-fluid galary-img'
              />
            </Card>
          </Col>
          <Col sm={12} md={4}>
            <Card className='galary'>
              <img
                src='https://i.ibb.co/GpwhSrN/img2-787f2849.jpg'
                alt=''
                className='img-fluid galary-img'
              />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Galarry;
