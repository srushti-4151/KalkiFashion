import React from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import "../styles/AccountDetails.scss";

const AccountDetails = () => {
  return (
    <div className="account-details-container ff-lexend">
        <h4 className="p-0">Account Details</h4>
        <Row className="g-4 pt-3">
          <Col lg={6} xs={12}>
            <h5 className="text-center">Change Details</h5>
            <Card className="default-white-box1 p-3">
              <div className="d-grid align-content-start custom-login-form1">
                <h5 className="fs-18 m-0 pb-4">Contact Information</h5>
                <Form.Group className="d-grid pb-3">
                  <Form.Label className="ps-1 fs-12">First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter First Name *"
                    defaultValue="User"
                  />
                </Form.Group>
                <Form.Group className="d-grid pb-3">
                  <Form.Label className="ps-1 fs-12">Second Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Second Name *"
                    defaultValue="Name"
                  />
                </Form.Group>
                <Form.Group className="d-grid pb-3">
                  <Form.Label className="ps-1 fs-12">Mobile Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Mobile Number *"
                    defaultValue="911234567890"
                  />
                </Form.Group>
                <p className="fs-14">
                  Kindly enter your mobile number (along with area code) in the
                  given format: <b>919999999999</b>. (Please avoid using spaces
                  or any special characters)
                </p>
                <Button
                  className="text-uppercase custom-next-btn text-center halfBorderRad"
                  variant="dark"
                >
                  Save
                </Button>
              </div>
            </Card>
          </Col>

          {/* Change Password Section */}
          <Col lg={6} xs={12}>
            <h5 className="text-center">Change Password</h5>
            <Card className="default-white-box1 p-3">
              <div className="d-grid align-content-start custom-login-form1">
                <h5 className="fs-18 m-0 pb-4">Want to change Password?</h5>
                <Form.Group className="d-grid pb-3">
                  <Form.Control
                    type="password"
                    placeholder="Current Password"
                  />
                </Form.Group>
                <Form.Group className="d-grid pb-3">
                  <Form.Control type="password" placeholder="New Password" />
                </Form.Group>
                <Form.Group className="d-grid pb-3">
                  <Form.Control
                    type="password"
                    placeholder="Confirm New Password"
                  />
                </Form.Group>
                <p className="fs-14 text-danger">
                  Minimum of different classes of characters in password is 3.
                  Classes of characters: Lower Case, Upper Case, Digits, Special
                  Characters.
                </p>
                <Button
                  className="text-uppercase custom-next-btn text-center halfBorderRad"
                  variant="dark"
                >
                  Confirm
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      {/* </Container> */}
    </div>
  );
};

export default AccountDetails;
