import React from "react";
import { Container, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddPackage = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    //  if user booking is valid then
    if (!data.title) {
      return (
        <Spinner className='mx-auto' animation='border' variant='danger' />
      );
    } else {
      //   fetch the post API
      fetch("https://warm-cove-96847.herokuapp.com/package", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.insertedId) {
            alert("Successfully added the user.");
            reset({
              Name: "",
              Email: "",
            });
          }
        });
    }
    // console.log(bookUser);
  };
  return (
    <Container className='my-md-5 my-3'>
      <p className='regular-title'>Add a new package</p>
      <div className='order-form mx-auto'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-floating mb-3'>
            <input
              type='text'
              className='form-control'
              id='floatingInput'
              {...register("title")}
              required
            />
            <label htmlFor='floatingInput'>Title</label>
          </div>
          <div className='form-floating mb-3'>
            <input
              type='text'
              className='form-control'
              id='floatingInput'
              {...register("price")}
              required
            />
            <label htmlFor='floatingInput'>Price</label>
          </div>
          <div className='form-floating mb-3'>
            <input
              type='text'
              className='form-control'
              id='floatingInput'
              {...register("img")}
              required
            />
            <label htmlFor='floatingInput'>Image Link</label>
          </div>
          <div className='form-floating mb-3'>
            <input
              type='text'
              className='form-control'
              id='floatingInput'
              {...register("place")}
              required
            />
            <label htmlFor='floatingInput'>Place Name</label>
          </div>
          <div className='form-floating mb-3'>
            <input
              type='text'
              className='form-control'
              id='floatingInput'
              {...register("description")}
              required
            />
            <label htmlFor='floatingInput'>Description</label>
          </div>

          <div className='form-floating mb-3'>
            <input
              type='text'
              className='form-control'
              id='floatingInput'
              {...register("time")}
              required
            />
            <label htmlFor='floatingInput'>Travel Time</label>
          </div>

          <input
            className='btn btn-success px-3'
            type='submit'
            value='ADD PACKAGE'
          />
        </form>
      </div>
    </Container>
  );
};

export default AddPackage;
