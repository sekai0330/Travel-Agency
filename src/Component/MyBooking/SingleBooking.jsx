import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import "./SingleBooking.css";

const SingleBooking = ({ booking, fullBooking }) => {
  // import user from useAuth
  const { user } = useAuth();
  const id = fullBooking._id;

  // Delete booking function
  const deleteBooking = (id) => {
    const procced = window.confirm("Are you sure you want to Delete ?");
    if (procced) {
      fetch(`https://warm-cove-96847.herokuapp.com/booking/${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((deleteData) => {
          if (deleteData.deletedCount > 0) {
            alert("Deleted Successfully");
          }
        });
    }
  };

  // Change status and update data from database function
  const changeStatus = () => {
    fullBooking.status = "approved";
    const url = `https://warm-cove-96847.herokuapp.com/booking/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(fullBooking),
    }).then();
  };

  // return single booking component
  return (
    <Col sm={12} md={4}>
      <Card style={{ width: "22rem" }}>
        <Card.Img variant='top' src={booking.img} height='220px' />
        <Card.Body>
          <p className='booking-title'>{booking.title}</p>
          <p className='place-name'>{booking.place}</p>
          <hr />
          <p className='booking-description'>{fullBooking.Name}</p>

          {fullBooking.status === "pending" ? (
            <div className='d-flex justify-content-between pending-status'>
              <p>
                <i class='fas fa-cog'></i> {fullBooking.status}
              </p>
              <button onClick={changeStatus} className='btn btn-success'>
                Approved
              </button>
            </div>
          ) : (
            <p className='approved-status'>
              <i class='far fa-check-circle'></i> {fullBooking.status}
            </p>
          )}
        </Card.Body>
        <Card.Footer style={{ backgroundColor: "white" }}>
          <p>
            <i className='fas fa-calendar-alt ico'></i> {booking.time}
          </p>
          <div className='d-flex justify-content-between'>
            <p className='booking-price'>${booking.price}</p>
            {user.email === fullBooking.Email ||
            user.email === "mdabusaidriyaz@gmail.com" ? (
              <Button onClick={() => deleteBooking(id)} variant='success'>
                DELETE IT
              </Button>
            ) : (
              <div>
                <button
                  className='btn btn-success'
                  data-bs-toggle='modal'
                  data-bs-target='#exampleModal'>
                  <i className='fas fa-info-circle'></i>
                </button>
                <div
                  class='modal fade'
                  id='exampleModal'
                  tabindex='-1'
                  aria-labelledby='exampleModalLabel'
                  aria-hidden='true'>
                  <div class='modal-dialog'>
                    <div class='modal-content'>
                      <div class='modal-body'>
                        Only Admin and <b>{fullBooking.Name}</b> can be delete
                        this package. And you can delete only your added
                        packages.
                      </div>
                      <div class='modal-footer'>
                        <button
                          type='button'
                          class='btn btn-success'
                          data-bs-dismiss='modal'>
                          OK
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default SingleBooking;
