import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import '../styles/Footer.scss';
import { FaInstagram,FaFacebookF, FaWhatsapp, FaYoutube,FaPinterest    } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";


const Footer = () => {
  return (
    <footer className="main-footer py-5">
      <Container className='footer-container'>
        {/* Main Footer Sections */}
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

          {/* About Us Section */}
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

          {/* Policies Section */}
          <Col xs={12} md={3} lg={2}>
            <Accordion className="d-block d-md-none">
              <Accordion.Item eventKey="2">
                <Accordion.Header>Policies</Accordion.Header>
                <Accordion.Body>
                  <div className="footer-links">
                    <a href="/">Terms & Conditions</a>
                    <a href="/">Shipping</a>
                    <a href="/">Returns</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">Privacy Policy For App</a>
                    <a href="/">Payment Policy</a>
                    <a href="/">FAQs</a>
                    <a href="/">Customization Charges</a>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <div className="d-none d-md-block">
              <h4>Policies</h4>
              <div className="footer-links">
                <a href="/">Terms & Conditions</a>
                <a href="/">Shipping</a>
                <a href="/">Returns</a>
                <a href="/">Privacy Policy</a>
                <a href="/">Privacy Policy For App</a>
                <a href="/">Payment Policy</a>
                <a href="/">FAQs</a>
                <a href="/">Customization Charges</a>
              </div>
            </div>
          </Col>

          {/*My Accont Section */}
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

          {/* Safe & Secure Payment Section */}
          <Col xs={12} md={5} lg={4}>
                <Accordion className="d-block d-md-none">
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Safe & Secure Payment</Accordion.Header>
                    <Accordion.Body>
                      <div className="payment-icons">
                      <img src="https://staticm247.kalkifashion.com/media/wysiwyg/secure-payment-India-new-1.png" alt="Mastercard" />
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <div className="d-none d-md-block">
                  <h4>Safe & Secure Payment</h4>
                  <div className="payment-icons">
                    <img src="https://staticm247.kalkifashion.com/media/wysiwyg/secure-payment-India-new-1.png" alt="Mastercard" />
                  </div>
                </div>
                <div className="d-none d-md-block mt-3">
                  <h4>EXPERIENCE KALKI APP ON MOBILE</h4>
                  <div className="mobile-icons">
                    <div className='con'>
                    <img src="https://staticm247.kalkifashion.com/media/wysiwyg/google-play.png" alt="Mastercard" />
                    <img src="https://staticm247.kalkifashion.com/media/wysiwyg/app-store.png" alt="Mastercard" />
                    </div>
                  </div>
                </div>
                <div className="d-none d-md-block mt-3">
                  <h4>Follow Us</h4>
                    <div className="social-icons">
                      <a href="https://instagram.com">
                        <FaInstagram size={20}/>
                      </a>
                      <a href="https://facebook.com">
                        <FaFacebookF size={20}/>
                      </a>
                      <a href="https://twitter.com">
                        <FaWhatsapp size={20}/>
                      </a>
                      <a href="https://pinterest.com">
                        <FaYoutube size={20}/>
                      </a>
                      <a href="https://pinterest.com">
                        <FaPinterest size={20}/>
                      </a>
                      <a href="https://pinterest.com">
                        <RiTwitterXLine size={20}/>
                      </a>
                    </div>
                </div>
                <div className="d-none d-md-block mt-4">
                  <div className='no-email'> 
                    <div className='part1'>
                      <h4>Get In Touch</h4>
                      <p className='m-0'>+91 (22) 4890 0416 (India)</p>
                      <p className='m-0'>+1 (408) 520 9415(US)</p>
                      <p className='m-0'>+44 (20) 7193 0887 (UK)</p>
                      <p className='m-0'>+61 (02) 8006 4667 (AUS)</p>
                    </div>
                    <div className='part2'>
                      <h4>Email</h4>
                      <p>info@kalkifashion.com</p>
                    </div>
                  </div>
                </div>
          </Col>
          {/* Follow Us Section */}
          <Col xs={12} md={3} lg={2} className="order-last">
            <Accordion className="d-block d-md-none">
              <Accordion.Item eventKey="4">
                <Accordion.Header>Follow Us</Accordion.Header>
                <Accordion.Body>
                  <div className="social-icons">
                  <a href="https://instagram.com">
                        <FaInstagram size={20}/>
                      </a>
                      <a href="https://facebook.com">
                        <FaFacebookF size={20}/>
                      </a>
                      <a href="https://twitter.com">
                        <FaWhatsapp size={20}/>
                      </a>
                      <a href="https://pinterest.com">
                        <FaYoutube size={20}/>
                      </a>
                      <a href="https://pinterest.com">
                        <FaPinterest size={20}/>
                      </a>
                      <a href="https://pinterest.com">
                        <RiTwitterXLine size={20}/>
                      </a>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          {/* EXPERIENCE KALKI APP ON MOBILE */}
          <Col xs={12} md={3} lg={2} className="order-last">
            <Accordion className="d-block d-md-none">
              <Accordion.Item eventKey="4">
                <Accordion.Header>EXPERIENCE KALKI APP ON MOBILE</Accordion.Header>
                <Accordion.Body>
                <div className="mobile-icons">
                    <div className='con'>
                    <img src="https://staticm247.kalkifashion.com/media/wysiwyg/google-play.png" alt="Mastercard" />
                    <img src="https://staticm247.kalkifashion.com/media/wysiwyg/app-store.png" alt="Mastercard" />
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          {/* EXPERIENCE KALKI APP ON MOBILE */}
          <Col xs={12} md={3} lg={2} className="order-last">
            <Accordion className="d-block d-md-none">
              <Accordion.Item eventKey="4">
                <Accordion.Header>GET IN TOUCh</Accordion.Header>
                <Accordion.Body>
                <div className='no-email'> 
                    <div className='part1'>
                      <p className='m-0'>+91 (22) 4890 0416 (India)</p>
                      <p className='m-0'>+1 (408) 520 9415(US)</p>
                      <p className='m-0'>+44 (20) 7193 0887 (UK)</p>
                      <p className='m-0'>+61 (02) 8006 4667 (AUS)</p>
                    </div>
                    <div className='part2'>
                      <p>info@kalkifashion.com</p>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>


        {/* Bottom Row */}
        {/* <Row className="mt-4 text-center">
          <Col xs={12}>
            <p>© 2007 - 2024 Kalkifashion All Rights Reserved.</p>
          </Col>
        </Row> */}
      </Container>
    </footer>
  );
};

export default Footer;

