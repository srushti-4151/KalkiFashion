import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import "../styles/FAQ.scss";

const FAQ = () => {
  return (
    <Container className="py-4 FAQcon text-center">
      <Row>
      <Row>
          <h3 className="fw-bold faq-heading text-center">FAQ's</h3>
      </Row>

      {/* Accordion Section */}
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={5}>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <span className="fw-bold primaryColor">
                  Can I Customize The Design Or Size Of A Bridal Outfit?
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Yes, KALKI offers a range of customization options for your
                  bridal outfit. You can personalize the design, size, sleeve
                  design, neck pattern, neck depth, and even fabric color to
                  create a bridal ensemble that perfectly aligns with your
                  preference and style.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <span className="fw-bold primaryColor">
                  What Are The Popular Fabrics Used For Lehenga?
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Bridal lehengas are often made with luxurious fabrics such as
                  raw silk, velvet, brocade, georgette, and chiffon.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <span className="fw-bold primaryColor">
                  What Should A Bride Wear For Every Pre Wedding Occasion?
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  For every pre-wedding occasion, a bride should select outfits
                  that match the theme and formality of the event.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col xs={12} md={6} lg={5}>
          <Accordion>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <span className="fw-bold primaryColor">
                  Can I Find Bridal Outfits With Traditional Embellishments Like
                  Embroidery Or Beadwork?
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  You can explore an extensive array of bridal outfits adorned
                  with intricate embroidery and meticulous beadwork.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                <span className="fw-bold primaryColor">
                  Are Wedding Gowns Suitable For All Kinds Of Venues And Themes?
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Wedding gowns are an excellent choice for a wide range of
                  venues and themes, including fusion or destination weddings.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                <span className="fw-bold primaryColor">
                  Which Bridal Wedding Outfits Are The Most Flattering?
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  The most flattering bridal outfits include the lehenga choli,
                  saree, and salwar kameez.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
      </Row>
    </Container>
  );
};

export default FAQ;
