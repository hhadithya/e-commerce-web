import { auth, db } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';


const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');
  // const navigate = useNavigate('');
  


  const signUp = async () => {
    if (email === '' || password === '' || firstName === '' || lastName === '') {
      setError('All fields are required');
      return;
    }

    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      setError('Invalid email format');
      return;
    }

    if (password.length < 6) {
      setError('Password should be at least 6 characters long');
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created successfully");
      const docRef = await setDoc(doc(db, 'users', email), {
        firstName: firstName,
        lastName: lastName,
      });
      alert("Document written with ID: ", docRef.id);
    } catch (error) {
      setError(error.message);
    }
    // navigate('/');
  };

  return (
    <div className="container">
      <div className="d-flex flex-column justify-content-center align-items-center" style={{height: '100vh'}}>
        <div className="col-md-6 col-lg-4">
          {error && <p className="alert alert-danger">{error}</p>}
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
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  aria-label="Last name"
                  onChange={(e) => setLastName(e.target.value)}
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
              <button type="submit" className="btn btn-dark rounded-pill fw-bolder" onClick={signUp}>
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