import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaShippingFast, FaUndo, FaStore, FaCut } from 'react-icons/fa';
import '../styles/Section.scss';

const Section2 = () => {
  return (
    <>
    <Container fluid className="home-section">
      {/* Image Grid */}
      <h2 className="section-title">Exclusively By Kalki</h2>
      <Row className="image-row">
        <Col xs={6} md={3} className="image-col">
          <div className="card">
            <img
              src="https://staticm247.kalkifashion.com/media/wysiwyg/1-mini-mobile-india-250x353-21-11-24.jpg?w=225" 
              alt="24 Hr Dispatch"
              className="card-img"
            />
            <div className="card-overlay">
              <h4>24 Hr Dispatch</h4>
              <p>Last Minute Shopping</p>
              <button className="shop-now-btn">SHOP NOW</button>
            </div>
          </div>
        </Col>
        <Col xs={6} md={3} className="image-col">
          <div className="card">
            <img
              src="https://staticm247.kalkifashion.com/media/wysiwyg/2-mini-mobile-india-250x353-21-11-24.jpg?w=225" 
              alt="Celebratory Luxe"
              className="card-img"
            />
            <div className="card-overlay">
              <h4>Celebratory Luxe</h4>
              <p>Showstopper Vibes, Chic Styles</p>
              <button className="shop-now-btn">SHOP NOW</button>
            </div>
          </div>
        </Col>
        <Col xs={6} md={3} className="image-col">
          <div className="card">
            <img
              src="https://staticm247.kalkifashion.com/media/wysiwyg/3-mini-mobile-india-250x353-21-11-24.jpg?w=225" 
              alt="Bestsellers Haul"
              className="card-img"
            />
            <div className="card-overlay">
              <h4>Bestsellers Haul</h4>
              <p>Fits Everyone's Vibing With</p>
              <button className="shop-now-btn">SHOP NOW</button>
            </div>
          </div>
        </Col>
        <Col xs={6} md={3} className="image-col">
          <div className="card">
            <img
              src="https://staticm247.kalkifashion.com/media/wysiwyg/4-mini-mobile-india-250x353-21-11-24.jpg?w=225" 
              alt="Shaadi Menswear"
              className="card-img"
            />
            <div className="card-overlay">
              <h4>Shaadi Menswear</h4>
              <p>Sharp & Sleek Charm For Him</p>
              <button className="shop-now-btn">SHOP NOW</button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Section2;

