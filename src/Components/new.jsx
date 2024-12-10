

import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { BsInstagram, BsFacebook, BsWhatsapp, BsYoutube, BsPinterest, BsTwitter, BsEmojiSmile, BsTruck, BsArrowClockwise, BsPercent } from 'react-icons/bs';


const Footer = () => {
  return (
    <footer className="main-footer py-5">
      <Container className='footer-container'>
        <Row>
          {/* Designer Wear Section */}
          <Col xs={12} md={3} lg={2}>
            <Accordion className="d-block d-md-none">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Designer Wear</Accordion.Header>
                <Accordion.Body>
                  <div className="footer-links">
                    <a href="/">Salwar Kameez</a>
                    <a href="/">Sarees</a>
                    <a href="/">Lehengas</a>
                    <a href="/">Gowns</a>
                    <a href="/">Kidswear</a>
                    <a href="/">Saree Blouse</a>
                    <a href="/">Kurtis</a>
                    <a href="/">Indowestern Styles</a>
                    <a href="/">Mens</a>
                    <a href="/">Accessories</a>
                    <a href="/">KALKI Influencers</a>
                    <a href="/">Celebrity Wear</a>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <div className="d-none d-md-block">
              <h4>Designer Wear</h4>
              <div className="footer-links">
                <a href="/">Salwar Kameez</a>
                <a href="/">Sarees</a>
                <a href="/">Lehengas</a>
                <a href="/">Gowns</a>
                <a href="/">Kidswear</a>
                <a href="/">Saree Blouse</a>
                <a href="/">Kurtis</a>
                <a href="/">Indowestern Styles</a>
                <a href="/">Mens</a>
                <a href="/">Accessories</a>
                <a href="/">KALKI Influencers</a>
                <a href="/">Celebrity Wear</a>
              </div>
            </div>
          </Col>

          {/* Repeat similar structures for other sections */}
          {/* Example: About Us Section */}
          <Col xs={12} md={3} lg={2}>
            <Accordion className="d-block d-md-none">
              <Accordion.Item eventKey="1">
                <Accordion.Header>About Us</Accordion.Header>
                <Accordion.Body>
                  <div className="footer-links">
                    <a href="/about-us">About Us</a>
                    <a href="/contact">Contact Us</a>
                    <a href="/">Blog</a>
                    <a href="/">Web Stories</a>
                    <a href="/">Testimonial</a>
                    <a href="/">Press</a>
                    <a href="/">Lookbook</a>
                    <a href="/">Careers</a>
                    <a href="/">KALKI Boutique</a>
                    <a href="/">KALKI Fashion Show</a>
                    <a href="/">Video Call Appointment</a>
                    <a href="/">Buying Guide</a>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <div className="d-none d-md-block">
              <h4>About Us</h4>
              <div className="footer-links">
                <a href="/about-us">About Us</a>
                <a href="/contact">Contact Us</a>
                <a href="/">Blog</a>
                <a href="/">Web Stories</a>
                <a href="/">Testimonial</a>
                <a href="/">Press</a>
                <a href="/">Lookbook</a>
                <a href="/">Careers</a>
                <a href="/">KALKI Boutique</a>
                <a href="/">KALKI Fashion Show</a>
                <a href="/">Video Call Appointment</a>
                <a href="/">Buying Guide</a>
              </div>
            </div>
          </Col>

          <Col xs={12} md={3} lg={2}>
            <Accordion className="d-block d-md-none">
              <Accordion.Item eventKey="1">
                <Accordion.Header>Policies</Accordion.Header>
                <Accordion.Body>
                  <div className="footer-links">
                    <a href="/about-us">Terms & conditions</a>
                    <a href="/contact">Shipping</a>
                    <a href="/">Returns</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">Privacy Policy For App</a>
                    <a href="/">Payment Plicy</a>
                    <a href="/">FAQ's</a>
                    <a href="/">Customization Charges</a>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <div className="d-none d-md-block">
              <h4>POLICIES</h4>
              <div className="footer-links">
              <a href="/">Terms & conditions</a>
                  <a href="/">Shipping</a>
                  <a href="/">Returns</a>
                  <a href="/">Privacy Policy</a>
                  <a href="/">Privacy Policy For App</a>
                  <a href="/">Payment Plicy</a>
                  <a href="/">FAQ's</a>
                  <a href="/">Customization Charges</a>
              </div>
            </div>
          </Col>

          <Col xs={12} md={3} lg={2}>
            <Accordion className="d-block d-md-none">
              <Accordion.Item eventKey="1">
                <Accordion.Header>MY ACCOUNT</Accordion.Header>
                <Accordion.Body>
                  <div className="footer-links">
                    <a href="/">Shopping Bog</a>
                    <a href="/">Whichlist</a>
                    <a href="/">Order History</a>
                    <a href="/">Order Tracking</a>
                    <a href="/">Buy In Bulk</a>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <div className="d-none d-md-block">
              <h4>MY ACCOUNT</h4>
              <div className="footer-links">
              <a href="/">Shopping Bog</a>
                    <a href="/">Whichlist</a>
                    <a href="/">Order History</a>
                    <a href="/">Order Tracking</a>
                    <a href="/">Buy In Bulk</a>
              </div>
            </div>
          </Col>
        </Row>

        {/* Bottom Info */}
        <Row className="mt-4">
          <Col xs={12} className="text-center text-md-start">
            <p>We Ship Across the World: United States, United Kingdom, Canada, Australia, India</p>
            <p>© 2007 - 2024 Kalkifashion All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;


