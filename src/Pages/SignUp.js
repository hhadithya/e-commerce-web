import React from 'react';

const SignUp = () => {
  return (
    <div className="container">
      <div className="d-flex flex-column justify-content-center align-items-center" style={{height: '100vh'}}>
        <div className="col-md-6 col-lg-4">
          <form>
            <h2 className="text-center mb-3">SIGN UP </h2>
            <p className="text-center mb-5">
              Enter your information below to proceed.<br/>If you already have an
              account, please log in instead.
            </p>
            <div className="row g-3 mb-3">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  aria-label="First name"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  aria-label="Last name"
                />
              </div>
            </div>
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
                CREATE AN ACCOUNT
              </button>
            </div>
            <div className="text-center mt-4">
              Already have an account?
              <a
                href="/login"
                className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                Login
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;