import React from 'react';
import { Modal, Button, Form} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../styles/Login.scss';
import { useLocation } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import Signup from './Signup';

const Login = ({ show, handleClose, handleOpenSignup }) => {
    const location = useLocation();
    const isLoginRoute = location.pathname === '/login';

  return (
    <Modal
      show={show || isLoginRoute}
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
                  <li>Get 15% off on your first order* | <b>Use code: INDIA15</b></li>
                  <li>Exclusive early collection showcase</li>
                  <li>Access amazing offers, discounts and more</li>
                </ul>
                <h6>Join Now !</h6>
                <span className="text-end fs-12">T &amp; C Apply</span>
              </div>
            </div>
            <div className="col-md-7 col-12 modal-page-two p-0">
              <div className="d-grid p-3 px-md-4 py-md-5">
                <h5 className="text-center">Sign Up</h5>
                <span className="text-center fs-12">
                Sign in so you can save items to your wishlists, track your orders , and checkout faster!
                </span>
                <Form className="custom-login-form pt-2 pt-md-4">
                  <Form.Group controlId="email1">
                    <Form.Control
                      type="email"
                      name="email1"
                      placeholder="Enter Email Address *"
                      pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="password1">
                    <Form.Control
                      type="password"
                      name="password1"
                      placeholder="Enter Password *"
                      pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                      required
                    />
                  </Form.Group>
                  <Button variant="primary" className="custom-next-btn text-uppercase">
                    Login
                  </Button>
                  <div className="text-center">
                    <span>Forgot Password?</span>
                  </div>
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
                          to="/signup"
                          onClick={(e) => {
                          e.preventDefault();
                          handleClose();
                          handleOpenSignup();
                         }}
                        >
                         Sign up
                       </NavLink>
                          {/* Render Signup Modal */}
                        {/* <Signup show={showSignup} handleClose={handleCloseSignup} handleOpenLogin={handleOpenLogin}/> */}
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

export default Login;
