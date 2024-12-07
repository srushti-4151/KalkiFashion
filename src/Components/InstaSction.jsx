import React from "react";
import { Container } from "react-bootstrap";
import "../styles/InstaSection.scss";

const InstaSction = () => {
  return (
    <Container fluid className="insta-banner">
      <a 
        href="/shop" 
        className="banner-link"
        aria-label="insta"
      >
        <picture>
          {/* Image for larger screens */}
          <source
            media="(min-width: 768px)"
            srcSet="https://staticm247.kalkifashion.com/media/wysiwyg/instagram-desk-7-12-23.jpg?w=1440"
          />
          {/* Image for smaller screens */}
          <img
            src="https://staticm247.kalkifashion.com/media/wysiwyg/instagram-mobile-7-12-23.jpg?w=724"
            alt="Wedding Couture Banner"
            className="banner-image"
          />
        </picture>
      </a>
    </Container>
  );
};

export default InstaSction;
