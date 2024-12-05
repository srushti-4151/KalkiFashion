// import React from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import { Container, Row, Col, Button, Form } from 'react-bootstrap';
// import '../styles/Banner.scss';

// const Banner = () => {
//   return (
//     <div className="video-shopping-banner">
//       <Container>
//         <Row className="align-items-center">
//           <Col xs={12} md={6} className="text-center text-md-start">
//             <h1 className="banner-title">
//               The Ultimate In-Store Experience <br />
//               Via 24x7 Video Shopping
//             </h1>
//             <p className="banner-subtitle">
//               Our Stylists On Call Can Speak: English, Hindi, Gujarati & Marathi
//             </p>
//           </Col>
//           <Col xs={12} md={6}>
//             <Form className="form-section">
//               <Form.Group controlId="phoneNumber" className="mb-3">
//                 <Form.Control
//                   type="text"
//                   placeholder="Phone Number*"
//                   className="phone-input"
//                 />
//               </Form.Group>
//               <Button variant="primary" className="start-now-btn">
//                 START CALL NOW
//               </Button>
//             </Form>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Banner;
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Container, Form, Button } from 'react-bootstrap';
import '../styles/Banner.scss';

const Banner = () => {
  return (
    <>
    <div className="video-shopping-banner">
      <div className="banner-content">
        <h1 className="banner-title">
          The Ultimate In-Store Experience <br />
          Via 24x7 Video Shopping
        </h1>
        <p className="banner-subtitle">
          Our Stylists On Call Can Speak: English, Hindi, Gujarati & Marathi
        </p>
        {/* <Form className="form-section">
          <Form.Control
            type="text"
            placeholder="Phone Number*"
            className="phone-input"
          />
          <Button variant="primary" className="start-now-btn">
            START CALL NOW
          </Button>
        </Form> */}
        <Form className="form-section">
          <Form.Group controlId="phoneNumber">
            <Form.Control
              type="text"
              placeholder="Phone Number*"
              className="phone-input"
            />
          </Form.Group>
          <Button variant="primary" className="start-now-btn">
            START CALL NOW
          </Button>
        </Form>
      </div>
    </div>
    </>
  );
};

export default Banner;
