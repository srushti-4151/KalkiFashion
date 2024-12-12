import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaShippingFast, FaUndo, FaStore, FaCut } from "react-icons/fa";
import "../styles/Iconpart.scss";
import { GiSewingMachine } from "react-icons/gi";
import { FaTape } from "react-icons/fa";
import { GiAmpleDress } from "react-icons/gi";
import { GiWorld } from "react-icons/gi";


function Iconpart() {
  return (
    <Container fluid className="home-section1">
      <Row className="icon-row text-center">
        <Col xs={4} md={2} className="icon-col">
          <FaShippingFast size={33} />
          <p>24-hour Dispatch</p>
        </Col>
        <Col xs={4} md={2} className="icon-col">
          <FaUndo size={31} />
          <p>Easy Returns</p>
        </Col>
        <Col xs={4} md={2} className="icon-col">
          <GiWorld size={35} />
          <p>Free Shipping Over $200</p>
        </Col>
        <Col xs={4} md={2} className="icon-col">
          <GiSewingMachine size={38} />
          <p>KALKI Express</p>
        </Col>
        <Col xs={4} md={2} className="icon-col">
          <FaTape size={35} />
          <p>Custom Fitting</p>
        </Col>
        <Col xs={4} md={2} className="icon-col">
          <GiAmpleDress size={35} />
          <p>New Style Daily</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Iconpart;
