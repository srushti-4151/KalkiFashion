import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import "../styles/UserDashboard.scss";
import { IoPersonOutline } from "react-icons/io5";
import { MdArrowRightAlt } from "react-icons/md";
import { BsEnvelope } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const UserDetails = () => {
  return (
    <div className="ff-lexend">
      <h4 className="p-0">Account Details</h4>
      <Row className="g-4 pt-3">
        <Col lg={6} xs={12}>
          <Card className="default-white-box h-80 text-center text-sm-start p-3">
            <div className="d-flex justify-content-start">
              <div className="icon-center-circle">
                <IoPersonOutline size={40} />
              </div>
              <div className="ps-3 d-grid align-content-start">
                <h5 className="fs-18 pt-1">Contact Information</h5>
                <h6 className="fs-14 fs-md-12">User Full Name</h6>
                <h6 className="fs-14 fs-md-12">useremail@gmail.com</h6>
                <div className="py-1 change-color-link">
                      <NavLink
                      to="/user-dashboard/account-details"
                      className="d-flex fs-14 gap-2"
                      >
                        Edit <MdArrowRightAlt size={20} />
                      </NavLink>
                      <NavLink
                        to="/user-dashboard/account-details"
                        className="d-flex fs-14 gap-2"
                        >
                        Change Password <MdArrowRightAlt size={20} />
                      </NavLink>
                </div>
              </div>
            </div>
          </Card>
        </Col>

        <Col lg={6} xs={12}>
          <Card className="default-white-box h-100 text-center text-sm-start p-3">
            <div className="d-flex justify-content-center">
              <div className="bgSubThemeColor icon-center-circle">
                <BsEnvelope size={40} />
              </div>

              <div className="ps-3 d-grid align-content-start">
                <h5 className="fs-18">Newsletters</h5>
                <h6 className="fs-14 fs-md-12">
                  You are subscribed to "General Subscription".
                </h6>
                <div className="pt-2 change-color-link">
                      <NavLink
                        to="/user-dashboard/subscription"
                        className="d-flex fs-14 gap-2"
                        >
                        Edit <MdArrowRightAlt size={20} />
                      </NavLink>
                </div>
              </div>
            </div>
          </Card>
        </Col>

        <Col xs={12}>
          <Card className="white-box p-3">
            <h5 className="m-0">Addresses</h5>
            <a href="/user/address">Manage Address</a>
          </Card>
        </Col>

        <Col lg={6} xs={12}>
          <Card className="default-white-box h-100 text-center text-sm-start p-3">
            <h5 className="fs-18">Default Billing Address</h5>
            <h6 className="fs-14 fs-md-12 fst-italic">
              You have not set a default billing address.
            </h6>
            <div className="pt-2 change-color-link">
              <NavLink
                to="/user-dashboard/addresses"
                className="d-flex fs-14 gap-2"
              >
                Edit Address <MdArrowRightAlt size={20} />
              </NavLink>
            </div>
          </Card>
        </Col>

        <Col lg={6} xs={12}>
          <Card className="default-white-box h-100 text-center text-sm-start p-3">
            <h5 className="fs-18">Default Shipping Address</h5>
            <h6 className="fs-14 fs-md-12 fst-italic">
              You have not set a default shipping address.
            </h6>
            <div className="pt-2 change-color-link">
            <NavLink
                to="/user-dashboard/addresses"
                className="d-flex fs-14 gap-2"
              >
                Edit Address <MdArrowRightAlt size={20} />
              </NavLink>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default UserDetails;
