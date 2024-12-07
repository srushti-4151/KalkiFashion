import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/Saree.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

const Saree = () => {
  return (
    <>
    <h2 className="section-title">The Saree Edit</h2>
        <div className="saree-edit">
          <Container fluid className="saree-container">
            <Row>
              <Col md={7} className="left-section">
                <div className="video-container">
                  <video
                    src="https://staticm247.kalkifashion.com/media/wysiwyg/Saree-Edit-400x545-desk-video-15-11-24.mp4"
                    muted
                    autoPlay
                    loop
                    playsInline
                    className="video-content"
                  />
                </div>
                <div className="images-container">
                  <img
                    src="https://staticm247.kalkifashion.com/media/wysiwyg/2-new-arrival-banner-400x264-15-11-24-in.jpg"
                    alt="Saree Image 1"
                    className="large-image"
                  />
                  <div className="small-images">
                    <img
                      src="https://staticm247.kalkifashion.com/media/wysiwyg/3-new-arrival-banner-200x281-15-11-24-in.jpg"
                      alt="Saree Image 2"
                      className="small-image"
                    />
                    <img
                      src="https://staticm247.kalkifashion.com/media/wysiwyg/4-new-arrival-banner-200x282-15-11-24-in.jpg"
                      alt="Saree Image 3"
                      className="small-image"
                    />
                  </div>
                </div>
              </Col>

    
              <Col md={5} className="right-section">
                <div className="text-content">
                  <h3 className="subtitle">Wedding-Ready Within A Minute</h3>
                  <h4 className="product-name">
                    Instant Saree<sup>™</sup>
                  </h4>
                  <a
                    variant="secondary"
                    href="https://www.kalkifashion.com/in/sarees/instant-saree.html"
                    className="cta-button"
                  >
                    Pre Drape All Sarees
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </div> 
        </> 
  );
};

export default Saree;

