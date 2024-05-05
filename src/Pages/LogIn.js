import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate('');

  const logIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      setError(error.message);
      console.error(error.message);
    }
  };

  return (
    <div className="container">
    <button onClick={() => navigate('/')} className='btn btn-dark' style={{marginTop: '10px', position: 'absolute'}}>Go to Home</button>

      <div className="d-flex flex-column justify-content-center align-items-center" style={{height: '100vh'}}>
        <div className="col-md-6 col-lg-4">
        {error && <p className="alert alert-danger">{error}</p>}
          <form>
            <h2 className="text-center mb-3">LOGIN</h2>
            <p className="text-center mb-5">
              If you have an account with us, please log in.
            </p>
            <div className="form-group mb-3">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-4">
              <button type="submit" className="btn btn-dark rounded-pill fw-bolder" onClick={logIn}>
                SIGN IN
              </button>
            </div>
            <div className="text-center mt-4">
              Don't have an account?
              <a
                href="/signup"
                className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                Create an account
              </a>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;