import React from "react";
import "./Discount.css";

const Discount = () => {
  return (
    <div className='discount-banner row gx-0'>
      <div className='discount-info p-md-5 p-3 my-md-5 my-3 col-md-6 col-12'>
        <p className='discount-sub'>1000 $ for person - 6 nights</p>
        <p className='discount-title'>
          Discount <span className='discount-color'>10-30%</span> Off
        </p>
        <p className='discount-text'>
          If you’re looking for a truly memorable family break here you find the
          lowest price on the right hotel for you. It's indescribable. Stay up
          to date and check out the deals for these trending destinations.
        </p>
        <button className='btn-regular'>See Promotion Tours</button>
      </div>
    </div>
  );
};

export default Discount;
