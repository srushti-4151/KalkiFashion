import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Slider from "react-slick";
import "../styles/VisitStore.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const VisitStore = () => {
    
    const NextArrow = ({ onClick }) => {
        return (
          <div className="custom-arrow next-arrow" onClick={onClick}>
            <FaChevronRight />
          </div>
        );
      };
      
      const PrevArrow = ({ onClick }) => {
        return (
          <div className="custom-arrow prev-arrow" onClick={onClick}>
              <FaChevronLeft/>
          </div>
        );
      };

  const stores = [
    {
      title: "KALKI Indore",
      imgSrc: "https://staticm247.kalkifashion.com/media/wysiwyg/709px-x-439px-indore-29-10-2024.jpg",
      storeLink: "https://www.kalkifashion.com/in/india/kalki-fashion-designer-clothing-store-indore",
      collectionLink: "https://www.kalkifashion.com/in/ethnic/indore-store.html",
    },
    {
      title: "KALKI Delhi Pitampura",
      imgSrc: "https://staticm247.kalkifashion.com/media/wysiwyg/345px-438px-pitampura-store-21-10-2024.jpg",
      storeLink: "https://www.kalkifashion.com/in/india/kalki-fashion-designer-clothing-store-pitampura",
      collectionLink: "https://www.kalkifashion.com/in/ethnic/pitampura-store.html",
    },
    {
      title: "KALKI Mumbai",
      imgSrc: "https://staticm247.kalkifashion.com/media/wysiwyg/345px-438px-mumbai-5-11-2024.jpg",
      storeLink: "#",
      collectionLink: "#",
    },
    {
      title: "KALKI Delhi South Ex 2",
      imgSrc: "https://staticm247.kalkifashion.com/media/wysiwyg/delhi-south-ex2.jpg",
      storeLink: "#",
      collectionLink: "#",
    },
    {
      title: "KALKI Ahmedabad",
      imgSrc: "https://staticm247.kalkifashion.com/media/wysiwyg/ahmedabad-store.jpg",
      storeLink: "#",
      collectionLink: "#",
    },
    {
      title: "KALKI Bengaluru",
      imgSrc: "https://staticm247.kalkifashion.com/media/wysiwyg/345px-438px-mumbai-5-11-2024.jpg",
      storeLink: "#",
      collectionLink: "#",
    },
  ];

  const stores1 = [
    {
      title: "KALKI Indore",
      imgSrc: "https://staticm247.kalkifashion.com/media/wysiwyg/345px-438px-delhi-2-10-2024.jpg",
      storeLink: "https://www.kalkifashion.com/in/india/kalki-fashion-designer-clothing-store-indore",
      collectionLink: "https://www.kalkifashion.com/in/ethnic/indore-store.html",
    },
    {
      title: "KALKI Delhi Pitampura",
      imgSrc: "https://staticm247.kalkifashion.com/media/wysiwyg/345px-438px-hydrabad-2-10-2024.jpg",
      storeLink: "https://www.kalkifashion.com/in/india/kalki-fashion-designer-clothing-store-pitampura",
      collectionLink: "https://www.kalkifashion.com/in/ethnic/pitampura-store.html",
    },
    {
      title: "KALKI Mumbai",
      imgSrc: "https://staticm247.kalkifashion.com/media/wysiwyg/345px-438px-surat-2-10-2024.jpg",
      storeLink: "#",
      collectionLink: "#",
    },
    {
      title: "KALKI Delhi South Ex 2",
      imgSrc: "https://staticm247.kalkifashion.com/media/wysiwyg/345px-438px-banglore-2-10-2024.jpg",
      storeLink: "#",
      collectionLink: "#",
    },
    {
      title: "KALKI Ahmedabad",
      imgSrc: "https://staticm247.kalkifashion.com/media/wysiwyg/345px-438px-ahmedabad-2-10-2024.jpg",
      storeLink: "#",
      collectionLink: "#",
    },
  ];
  
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Container className="visit-stores mt-3" style={{ padding: "0.700rem" }}>
      <h2 className="text-center mb-4">Visit our Stores</h2>
       <Row className="image-grid">
          <Col md={6} sm={12} className="image-large">
            <div className="store-card">
              <img
                src="https://staticm247.kalkifashion.com/media/wysiwyg/709px-x-439px-indore-29-10-2024.jpg"
                alt="Large Image"
                className="img-fluid"
              />
              <div className="store-details text-center">
                <h3 className="store-title">KALKI Indore</h3>
                <div className="buttons1">
                  <Button
                    href="#"
                    variant="secondary"
                    className="custom-button me-2"
                  >
                    Visit Store
                  </Button>
                  <Button href="#" variant="secondary" className="custom-button">
                    View Collection
                  </Button>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3} sm={6} className="image-small">
            <div className="store-card">
              <img
                src="https://staticm247.kalkifashion.com/media/wysiwyg/345px-438px-pitampura-store-21-10-2024.jpg"
                alt="Small Image 1"
                className="img-fluid"
              />
              <div className="store-details text-center">
                <h3 className="store-title">KALKI Pitampura</h3>
                <div className="buttons1">
                  <Button
                    href="#"
                    variant="secondary"
                    className="custom-button me-2"
                  >
                    Visit Store
                  </Button>
                  <Button href="#" variant="secondary" className="custom-button">
                    View Collection
                  </Button>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3} sm={6} className="image-small">
            <div className="store-card">
              <img
                src="https://staticm247.kalkifashion.com/media/wysiwyg/345px-438px-mumbai-5-11-2024.jpg"
                alt="Small Image 2"
                className="img-fluid"
              />
              <div className="store-details text-center">
                <h3 className="store-title">KALKI Mumbai</h3>
                <div className="buttons1">
                  <Button
                    href="#"
                    variant="secondary"
                    className="custom-button me-2"
                  >
                    Visit Store
                  </Button>
                  <Button href="#" variant="secondary" className="custom-button">
                    View Collection
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>

      <Slider {...sliderSettings} className="store-slider">
        {stores1.map((store, index) => (
          <div key={index} className="slider-item">
            <div className="store-card">
              <img
                src={store.imgSrc}
                alt={store.title}
                className="img-fluid store-image"
              />
              <div className="store-details text-center">
                <h3 className="store-title">{store.title}</h3>
                <div className="buttons1">
                  <Button
                    href={store.storeLink}
                    variant="secondary"
                    className="custom-button me-2"
                  >
                    Visit Store
                  </Button>
                  <Button
                    href={store.collectionLink}
                    variant="secondary"
                    className="custom-button"
                  >
                    View Collection
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

    </Container>
  );
};

export default VisitStore;
