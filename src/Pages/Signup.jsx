import React, { useState } from 'react';
import { Modal, Button, Form, InputGroup} from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/Signup.scss';
// import { useLocation } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import Login from './Login';

const Signup = ({ show, handleClose, handleOpenLogin : openLogin}) => {
    const location = useLocation();
    const isSignupRoute = location.pathname === '/signup';

    const [showLogin, setShowLogin] = useState(false);
    const handleOpenLogin = () => setShowLogin(true);
    const handleCloseLogin = () => setShowLogin(false);

  return (
    <Modal
      show={show || isSignupRoute}
      onHide={handleClose}
      aria-labelledby="login-modal"
      className="custom-login-modal p-0"
    > 
      <Modal.Body className="p-0">
        <button className="custom-close-btn" onClick={handleClose} aria-label="Close">
         <RxCross2 size={30}/>
        </button>
        <div className="container-fluid">
          <div className="row custom-backimage-modal">
            <div className="col-md-5 col-12 modal-page-one p-0">
              <div className="content d-grid p-4 py-md-5">
                <h2>Register & Be A Part Of The KALKI Circle!</h2>
                <h6 className="pt-2 pt-md-4">Enjoy exclusive benefits like:</h6>
                <ul>
                  <li>1. Get 15% off on your first order* | <b>Use code: INDIA15</b></li>
                  <li>2. Exclusive early collection showcase</li>
                  <li>3. Access amazing offers, discounts and more</li>
                </ul>
                <h6>Join Now !</h6>
                <span className="text-end fs-12">T &amp; C Apply</span>
              </div>
            </div>
            <div className="col-md-7 col-12 modal-page-two p-0">
              <div className="d-grid p-3 px-md-4 py-md-5">
                <h5 className="text-center">Sign Up</h5>
                <span className="text-center fs-12">
                  Welcome to Kalki! It's quick and easy to set up an account
                </span>
                <Form className="custom-login-form pt-2 pt-md-4">
                  <Form.Group controlId="fname">
                    <Form.Control
                      type="text"
                      name="fname"
                      placeholder="Enter First Name *"
                      pattern="^[A-Za-z ]{4,10}$"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="lname">
                    <Form.Control
                      type="text"
                      name="lname"
                      placeholder="Enter Last Name *"
                      pattern="^[A-Za-z ]{4,10}$"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="email">
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter Email Address *"
                      pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                      required
                    />
                  </Form.Group>
                  <InputGroup className="custom-input-group">
                    <Form.Select aria-label="Country Code" className='country-code-select'>
                      <option value="+91">+91</option>
                      <option value="+46">+46</option>
                      <option value="+84">+84</option>
                      <option value="+45">+45</option>
                    </Form.Select>
                    <Form.Control
                     className='phone-number-input'
                      type="tel"
                      name="mobile"
                      placeholder="Phone Number *"
                      pattern="^[0-9]{10}$"
                      required
                    />
                  </InputGroup>
                  <Form.Group controlId="password">
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Enter Password *"
                      pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                      required
                    />
                  </Form.Group>
                  <Button variant="primary" className="custom-next-btn text-uppercase">
                    Next
                  </Button>
                  <span className="text-center fs-md-12">
                    By continuing, I agree to the Terms of Use and Privacy Policy
                  </span>
                  <div className="custom-social-login">
                     <Button variant="link" className="social-btn">
                        <FaFacebook size={22}/>
                    </Button>
                    <Button variant="link" className="social-btn">
                        <FaGoogle size={22} />
                    </Button>
                 </div>
                  <hr />
                  <div className="text-center">
                    <span>Already Have an account?</span>
                    <NavLink
                      to="/login"
                      onClick={(e) => {
                        e.preventDefault();
                        handleClose();
                        openLogin();
                      }}
                    >
                      Log in
                    </NavLink>
                    {/* Render Signup Modal */}
                    <Login show={showLogin} handleClose={handleCloseLogin} />
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Signup;