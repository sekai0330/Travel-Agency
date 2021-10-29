import React from "react";
import { Carousel } from "react-bootstrap";
import "./Slider.css";

function Slider() {
  return (
    <div className='Slider'>
      <Carousel className='text-left carousel'>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://i.ibb.co/6XFgDtM/slider1-3.jpg'
            alt='First slide'
          />
          <Carousel.Caption>
            <p className='slider-text'>WHAT NEXT COUNTRY ?</p>
            <h3 className='slider-title'>Romantic Venice Travels</h3>
            <button className='btn-regular'>BOOK YOUR TRAVEL</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://i.ibb.co/1ny0PLj/slider1-2.jpg'
            alt='Second slide'
          />

          <Carousel.Caption>
            <p className='slider-text'>WHAT NEXT COUNTRY ?</p>
            <h3 className='slider-title'>Amazing Buenos Aires</h3>
            <button className='btn-regular'>BOOK YOUR TRAVEL</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://i.ibb.co/YPc7Vds/slider1-1.jpg'
            alt='Third slide'
          />

          <Carousel.Caption>
            <p className='slider-text'>WHAT NEXT COUNTRY ?</p>
            <h3 className='slider-title'>Discover Night Paris</h3>
            <button className='btn-regular'>BOOK YOUR TRAVEL</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
