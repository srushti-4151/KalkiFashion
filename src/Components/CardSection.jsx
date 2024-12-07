import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/CardSection.scss'; 
import { PiDressThin } from "react-icons/pi";

const CardSection = () => {
  const [bookAnAppointment, setBookAnAppointment] = useState(false);

  useEffect(() => {
    // Simulate component intersection (if needed)
    setBookAnAppointment(true);
  }, []);

  return (
    <>
    <section
      className="shop-video-call-section"
      style={{
        backgroundImage:
          "url('https://staticm247.kalkifashion.com/media/wysiwyg/home-video-section-bgdddfdfdsf.jpg')",
      }}
    >
      {bookAnAppointment && (
        <div className="appointment-content">
          <Container fluid>
            <Row className="d-flex justify-content-center">
              <Col xs={12} sm={6} className="text-center py-6 px-4">
                <PiDressThin className="mx-auto mb-10 empty-bg svg1"/>
                <h2 className="font-serif font-medium">
                  Shop via video call
                </h2>
                <p>
                  Get a free virtual styling session
                </p>
                <Button
                  variant="secondary"
                  href="https://www.kalkifashion.com/in/in-store-e-shopping-appointment"
                  target="_blank"
                  className="appointment-btn"
                >
                  Book An Appointment
                </Button>
              </Col>
              <Col xs={12} sm={6} className="text-center py-6 px-4">
              <PiDressThin className="mx-auto mb-10 empty-bg svg1"/>
                <h2 className="font-serif font-medium mb-2.5">
                  The bridal stylist
                </h2>
                <p>
                  Speak to our expert stylist for a personal bridal consultation
                </p>
                <Button
                  variant="secondary"
                  href="https://www.kalkifashion.com/in/kalki-in-store-appointment"
                  target="_blank"
                  className="appointment-btn"
                >
                  Book An Appointment
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </section>
    </>
  );
};

export default CardSection;
