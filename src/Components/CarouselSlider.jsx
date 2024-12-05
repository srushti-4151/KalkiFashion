import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/CarouselSlider.scss";
import Slider from "react-slick";

const CarouselSlider = () => {
  const images = [
    {
      large: "https://staticm247.kalkifashion.com/media/wysiwyg/02_slider_banner_in_new_arrival_desktop_2800x1050_2-12-2024.jpg?w=1440",
      small: "https://staticm247.kalkifashion.com/media/wysiwyg/02-mobile-banner-in-new-arrival-500x707-2-12-2024.jpg?w=500",
      link: "#",
    },
    {
      large: "https://staticm247.kalkifashion.com/media/wysiwyg/03-slider-banner-india-online-exclusives-desktop-2800x1050-21-11-24.jpg?w=1440",
      small: "https://staticm247.kalkifashion.com/media/wysiwyg/03-slider-banner-india-online-exclusives-mobile-2800x1050-21-11-24.jpg?w=500",
      link: "#",
    },
    {
      large: "https://staticm247.kalkifashion.com/media/wysiwyg/04-slider-banner-in-bridal-desktop-2800x1050-14-11-24-in.jpg?w=1440",
      small: "https://staticm247.kalkifashion.com/media/wysiwyg/04-mobile-banner-in-bridal-500x707-14-11-24-in.jpg?w=500",
      link: "#",
    },
    {
      large: "https://staticm247.kalkifashion.com/media/wysiwyg/01-slider-banner-in-wedding-collection-desktop-2800x1050-14-11-24-in.jpg?w=1440",
      small: "https://staticm247.kalkifashion.com/media/wysiwyg/01-mobile-banner-in-wedding-collection-500x707-14-11-24-in.jpg?w=500",
      link: "#",
    },
  ];

  const CustomPrevArrow = ({ onClick }) => (
    <button className="custom-arrow prev-arrow" onClick={onClick}>
      &#10094;
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button className="custom-arrow next-arrow" onClick={onClick}>
      &#10095;
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className="custom-slider">
      <Slider {...settings}>
        {images.map((image, index) => (
          <a
            href={image.link}
            key={index}
            className="slider-image-wrapper"
          >
            <picture>
              <source media="(max-width: 768px)" srcSet={image.small} />
              <img
                src={image.large}
                alt={`Slide ${index + 1}`}
                className="slider-image"
              />
            </picture>
          </a>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselSlider;
