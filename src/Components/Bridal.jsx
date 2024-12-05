import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Container } from "react-bootstrap";
import "../styles/Bridal.scss";

const Bridal = () => {
  return (
    <Container fluid className="wedding-banner">
      <a 
        href="/shop" 
        className="banner-link"
        aria-label="Shop Wedding Couture"
      >
        <picture>
          {/* Image for larger screens */}
          <source
            media="(min-width: 768px)"
            srcSet="https://staticm247.kalkifashion.com/media/wysiwyg/1-mid-banner-14-11-24-in.jpg?w=1440"
          />
          {/* Image for smaller screens */}
          <img
            src="https://staticm247.kalkifashion.com/media/wysiwyg/1-mid-banner-mobile-14-11-24-in.jpg?w=380"
            alt="Wedding Couture Banner"
            className="banner-image"
          />
        </picture>
      </a>
    </Container>
  );
};

export default Bridal;
