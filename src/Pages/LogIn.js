import React from 'react';

const LogIn = () => {
  return (
    <div className="container">
      <div className="d-flex flex-column justify-content-center align-items-center" style={{height: '100vh'}}>
        <div className="col-md-6 col-lg-4">
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
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="d-grid gap-2 mt-4">
              <button type="submit" className="btn btn-dark rounded-pill fw-bolder">
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