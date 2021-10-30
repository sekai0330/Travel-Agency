import { useHistory, useLocation } from "react-router";
import useAuth from "../../Hooks/useAuth";
import "./Login.css";

const Login = () => {
  // import data from useAuth, useLocation and useHistory.
  const { SignInWithGoogle, setIsLoading } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/";

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

  // return jsx here
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-9 col-md-7 col-lg-5 mx-auto'>
            <div className='card border-0 shadow rounded-3 my-5'>
              <div className='card-body p-4 p-sm-5'>
                <h5 className='card-title text-center mb-5 fw-light fs-5'>
                  Sign In With Your Account
                </h5>
                <img
                  src='https://i.ibb.co/k2W6gGS/3647093.jpg'
                  className='img-fluid'
                  alt=''
                />
                <hr className='my-4' />

                <div className='d-grid mb-2'>
                  <button
                    onClick={handleGoogleLogin}
                    className='btn btn-google btn-login text-uppercase fw-bold'
                    type='submit'>
                    <i className='fab fa-google me-2'></i> Sign in with Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
