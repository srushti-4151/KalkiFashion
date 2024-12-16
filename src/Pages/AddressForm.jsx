import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "../styles/AddressForm.scss";

const AddressForm = () => {
  return (
    <div className="address-container ff-lexend">
      
        <h4 className="p-0">Address</h4>
        <Row className="g-4 pt-3">
          <Col lg={8} xs={12}>
            <Card className="default-white-box1 p-3">
              <div className="d-grid align-content-start custom-login-form1">
                <h5 className="fs-18 m-0 pb-4">New Address</h5>

                <div className="d-grid d-md-flex gap-3 pb-3">
                  <Form.Group className="d-grid w-100">
                    <Form.Label className="ps-1 fs-12">First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter First Name *"
                      defaultValue="User"
                    />
                  </Form.Group>
                  <Form.Group className="d-grid w-100">
                    <Form.Label className="ps-1 fs-12">Second Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Second Name *"
                      defaultValue="Name"
                    />
                  </Form.Group>
                </div>

                <div className="d-grid d-md-flex gap-3 pb-3">
                  <Form.Group className="d-grid w-100">
                    <Form.Control
                      type="number"
                      placeholder="Phone Number *"
                    />
                  </Form.Group>
                  <Form.Group className="d-grid w-100">
                    <Form.Control
                      type="text"
                      placeholder="Address Label 'Ex. Home'"
                    />
                  </Form.Group>
                </div>

                <div className="d-grid d-md-flex gap-3 pb-3">
                  <Form.Group className="d-grid w-100">
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Street Address"
                    />
                  </Form.Group>
                </div>

                <div className="d-grid d-md-flex gap-3 pb-3">
                  <Form.Group className="d-grid w-100">
                    <Form.Control
                      type="number"
                      placeholder="Zip/Postal Code *"
                    />
                  </Form.Group>
                  <Form.Group className="d-grid w-100">
                    <Form.Control type="text" placeholder="City" />
                  </Form.Group>
                </div>

                <div className="d-grid d-md-flex gap-3">
                  <Form.Group className="d-grid w-100">
                    <Form.Control type="text" placeholder="State" />
                  </Form.Group>
                  <Form.Group className="d-grid w-100">
                    <Form.Control type="text" placeholder="Country" />
                  </Form.Group>
                </div>

                {/* Update Button */}
                <Button
                  variant="dark"
                  className="text-uppercase custom-next-btn text-center halfBorderRad mt-3"
                >
                  Update
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
    </div>
  );
};

export default AddressForm;
