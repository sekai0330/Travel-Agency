import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Destination.css";

const Destance = ({ city }) => {
  return (
    <Col sm={12} md={4}>
      <Card style={{ width: "22rem" }}>
        <Card.Img variant='top' src={city.picture} />
        <Card.Body>
          <p className='destination-title'>{city.title}</p>
          <Card.Text className='destination-text'>{city.description}</Card.Text>
        </Card.Body>
        <div className='d-flex'>
          <button className='w-50 destination-price'>$ {city.price}</button>
          <button
            className='w-50 destination-detail'
            data-bs-toggle='modal'
            data-bs-target='#exampleModal'>
            <i className='fas fa-info-circle'></i> See Details
          </button>
          <div
            class='modal fade'
            id='exampleModal'
            tabindex='-1'
            aria-labelledby='exampleModalLabel'
            aria-hidden='true'>
            <div class='modal-dialog'>
              <div class='modal-content'>
                <div class='modal-header'>
                  <h5 class='modal-title' id='exampleModalLabel'>
                    {city.title}
                  </h5>
                </div>
                <div class='modal-body'>{city.description}</div>
                <div class='modal-footer'>
                  <button
                    type='button'
                    class='btn btn-danger'
                    data-bs-dismiss='modal'>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default Destance;
