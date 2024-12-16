import React from 'react'
import { TbCirclePercentage } from "react-icons/tb";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FiVideo } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/MobileBottomBar.scss';

const MobileBottomBar = () => {
  return (
    <div className="sticky-bottom-bar d-block d-md-none">
      <div className="offer-message">
        <span>SignIn / SignUp to avail the offers and coupon codes</span>
      </div>
      <Container fluid>
        <Row className="mobile-icon-row">
          <Col xs="auto" className="icon-col">
          <div className='icon-set'>
            <a href="#" className="text-center">
             <TbCirclePercentage size={25}/>
            </a>
          </div>
              <span>Sale</span>
          </Col>
          <Col xs="auto" className="icon-col">
            <div className='icon-set'>
            <a href="#" className="text-center">
              <LiaShippingFastSolid size={25}/>
            </a>
            </div>
              <span>Ready To Ship</span>
          </Col>
          <Col xs="auto" className="icon-col">
          <div className='icon-set'>
            <a href="#" className="text-center">
              <FiVideo size={25}/>
            </a>
            </div>
              <span>Virtual Appointment</span>
          </Col>
          <Col xs="auto" className="icon-col">
          <div className='icon-set'>
            <a href="#" className="text-center">
              <IoPersonOutline size={25}/>
            </a>
          </div>
              <span>Login</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MobileBottomBar;
