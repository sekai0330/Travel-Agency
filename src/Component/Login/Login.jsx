import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Login.css";

const Login = () => {
  // Create State for update email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Function for get password and email
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  // import data from useAuth, useLocation and useHistory.
  const {
    SignInWithGoogle,
    setIsLoading,
    logInWithPassword
  } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  // handle Google Login Function
  const handleGoogleLogin = () => {
    SignInWithGoogle()
      .then((result) => {
        history.push(redirect_uri);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  // Handle Email and Password Login
  const handleLogIn = (e) => {
    logInWithPassword(email, password).then((userCredential) => {
      history.push(redirect_uri);
    });
    e.preventDefault();
  };
  // return jsx here
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-9 col-md-7 col-lg-5 mx-auto'>
            <div className='card border-0 shadow rounded-3 my-5'>
              <div className='card-body p-4 p-sm-5'>
                <h5 className='card-title text-center mb-5 fw-light fs-5'>
                  Sign In
                </h5>
                <form>
                  <div className='form-floating mb-3'>
                    <input
                      onBlur={handleEmailChange}
                      type='email'
                      className='form-control'
                      id='floatingInput'
                      placeholder='name@example.com'
                      required
                    />
                    <label htmlFor='floatingInput'>Email address</label>
                  </div>
                  <div className='form-floating mb-3'>
                    <input
                      onBlur={handlePasswordChange}
                      type='password'
                      className='form-control'
                      id='floatingPassword'
                      placeholder='Password'
                      required
                    />
                    <label htmlFor='floatingPassword'>Password</label>
                  </div>

                  <div className='form-check mb-3'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id='rememberPasswordCheck'
                    />
                    <label
                      className='form-check-label'
                      htmlFor='rememberPasswordCheck'>
                      Remember password
                    </label>
                  </div>
                  <div className='d-grid'>
                    <button
                      onClick={handleLogIn}
                      className='btn btn-success btn-login text-uppercase fw-bold'
                      type='submit'>
                      Sign in
                    </button>
                  </div>
                </form>
                <hr className='my-4' />
                <p className='regular-subtitle text-center'>
                  Connect With Social Media
                </p>
                <div className='d-grid mb-2'>
                  <button
                    onClick={handleGoogleLogin}
                    className='btn btn-google btn-login text-uppercase fw-bold'
                    type='submit'>
                    <i className='fab fa-google me-2'></i> Sign in with Google
                  </button>
                </div>
                <p className='regular-text mt-3'>
                  Don't have an account?
                  <Link to='/signup'> Registration here.</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;