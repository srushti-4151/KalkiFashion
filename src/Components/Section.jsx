import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaShippingFast, FaUndo, FaStore, FaCut } from 'react-icons/fa';
import '../styles/Section.scss';

const Section = () => {
  return (
    <>
    <div className='section-container'>
    <Container fluid className="home-section">
      {/* Image Grid */}
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
              <button className="shop-now-btn">SHOP NOW</button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
    </>
  );
};

export default Section;



// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import '../styles/section.scss';

// const Section = () => {
//   return (
//     <Container fluid className="home-section">
//       {/* Image Grid */}
//       <Row className="image-row">
//         <Col xs={6} md={3} className="image-col">
//           <div className="card">
//             <picture>
//               <source 
//                 media="(max-width: 768px)" 
//                 srcSet="https://staticm247.kalkifashion.com/media/wysiwyg/1-mini-mobile-india-250x353-21-11-24.jpg?w=225"
//               />
//               <img
//                 src="https://staticm247.kalkifashion.com/media/wysiwyg/1-mini-mobile-india-250x353-21-11-24.jpg?w=225"
//                 alt="24 Hr Dispatch"
//                 className="card-img"
//               />
//             </picture>
//           </div>
//         </Col>
//         <Col xs={6} md={3} className="image-col">
//           <div className="card">
//             <picture>
//               <source 
//                 media="(max-width: 768px)" 
//                 srcSet="https://staticm247.kalkifashion.com/media/wysiwyg/2-mini-mobile-india-250x353.jpg?w=225"
//               />
//               <img
//                 src="https://staticm247.kalkifashion.com/media/wysiwyg/2-mini-desktop-india-400x600.jpg"
//                 alt="Celebratory Luxe"
//                 className="card-img"
//               />
//             </picture>
//           </div>
//         </Col>
//         <Col xs={6} md={3} className="image-col">
//           <div className="card">
//             <picture>
//               <source 
//                 media="(max-width: 768px)" 
//                 srcSet="https://staticm247.kalkifashion.com/media/wysiwyg/3-mini-mobile-india-250x353.jpg?w=225"
//               />
//               <img
//                 src="https://staticm247.kalkifashion.com/media/wysiwyg/3-mini-desktop-india-400x600.jpg"
//                 alt="Bestsellers Haul"
//                 className="card-img"
//               />
//             </picture>
//           </div>
//         </Col>
//         <Col xs={6} md={3} className="image-col">
//           <div className="card">
//             <picture>
//               <source 
//                 media="(max-width: 768px)" 
//                 srcSet="https://staticm247.kalkifashion.com/media/wysiwyg/4-mini-mobile-india-250x353.jpg?w=225"
//               />
//               <img
//                 src="https://staticm247.kalkifashion.com/media/wysiwyg/4-mini-desktop-india-400x600.jpg"
//                 alt="Shaadi Menswear"
//                 className="card-img"
//               />
//             </picture>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Section;
