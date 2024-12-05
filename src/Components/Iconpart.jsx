import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaShippingFast, FaUndo, FaStore, FaCut } from 'react-icons/fa';
import '../styles/Iconpart.scss';

function Iconpart() {
  return (
    <Container fluid className="home-section1">
    {/* Icons Row */}
    <Row className="icon-row text-center">
    <Col xs={6} md={3} className="icon-col">
      <FaShippingFast size={35} />
      <p>24-hour Dispatch</p>
    </Col>
    <Col xs={6} md={3} className="icon-col">
      <FaUndo size={35} />
      <p>Easy Returns</p>
    </Col>
    <Col xs={6} md={3} className="icon-col">
      <FaStore size={35} />
      <p>Instant In-Store Experience</p>
    </Col>
    <Col xs={6} md={3} className="icon-col">
      <FaCut size={35} />
      <p>Custom Fitting</p>
    </Col>
  </Row>
  </Container>
  )
}

export default Iconpart