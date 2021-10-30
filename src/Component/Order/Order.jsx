import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import "./Order.css";

const Order = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [singlePackage, setSinglePackage] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/package/${id}`)
      .then((response) => response.json())
      .then((data) => setSinglePackage(data));
  }, []);

  //   Use form hooks function
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset({
      Name: "",
      Email: "",
    });
  };
  return (
    <Container className='my-md-5 my-3'>
      <div className='order-form mx-auto'>
          <p className="regular-title mb-md-5 mb-3">Complete Your Booking</p>
        <Row className='single-package-card g-4'>
          <Col sm={4} md={4}>
            <img src={singlePackage.img} alt='' className='img-fluid' />
          </Col>
          <Col sm={8} md={8}>
            <h4>{singlePackage.title}</h4>
            <p className='package-price'>${singlePackage.price}</p>
            <p>
              <i className='fas fa-calendar-alt'></i> {singlePackage.time}
            </p>
          </Col>
        </Row>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-floating mb-3'>
            <input
              type='text'
              className='form-control'
              id='floatingInput'
              value={user.displayName}
              {...register("Name")}
              required
            />
            <label htmlFor='floatingInput'>Name</label>
          </div>

          <div className='form-floating mb-3'>
            <input
              type='email'
              value={user.email}
              className='form-control'
              id='floatingInput'
              {...register("Email")}
              required
            />
            <label htmlFor='floatingInput'>Email</label>
          </div>
          <div className='form-floating mb-3'>
            <input
              type='number'
              className='form-control'
              id='floatingInput'
              {...register("Phone")}
              required
            />
            <label htmlFor='floatingInput'>Phone Number</label>
          </div>
          <div className='form-floating mb-3'>
            <input
              type='text'
              className='form-control'
              id='floatingInput'
              {...register("Address")}
              required
            />
            <label htmlFor='floatingInput'>Address</label>
          </div>
          <div className='form-floating'>
            <select className='form-select mb-3' {...register("gender")}>
              <option value='male'>male</option>
              <option value='female'>female</option>
              <option value='other'>other</option>
            </select>
            <label htmlFor='floatingSelectGrid'>Gander</label>
          </div>
          <input className='btn btn-success px-3' type='submit' value='BOOKING NOW' />
        </form>
      </div>
    </Container>
  );
};

export default Order;