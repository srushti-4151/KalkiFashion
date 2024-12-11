import React, { useState } from "react";
import Slider from "react-slick"; 
import "../styles/CardSlider.scss";

const CardSlider = () => {
  const cardData = [
    {
      id: 1,
      image: "https://staticm247.kalkifashion.com/media/wysiwyg/400px--533px-9-5-23-romika.jpg?aio-w=220", 
      name: "Carolina Rabinovich",
      country: "USA",
      quote:
        "At my first Indian wedding, nerves about attire vanished! This ensemble shined—vibrant, comfy, endless compliments. I wanna shop again soon!",
      button: "View Product",
    },
    {
      id: 2,
      image: "https://staticm247.kalkifashion.com/media/wysiwyg/400px--533px-23-12-23-2.jpg?aio-w=125", 
      name: "Nakita and Chris",
      country: "Australia",
      quote:
        "Kalki made our wedding attire hunt a breeze! Stunning designs, impeccable service. Can't wait for more photos in our Kalki outfits.",
      button: "View Product",
    },
    {
      id: 3,
      image: "https://staticm247.kalkifashion.com/media/wysiwyg/400px--533px-23-12-23-us-cust.jpg?aio-w=220", 
      name: "Nakita and Chris",
      country: "Australia",
      quote:
        "Kalki made our wedding attire hunt a breeze! Stunning designs, impeccable service. Can't wait for more photos in our Kalki outfits.",
      button: "View Product",
    },
    {
      id: 4,
        image: "https://staticm247.kalkifashion.com/media/wysiwyg/400px--533px-9-5-23-romika.jpg?aio-w=220", 
        name: "Nakita and Chris",
        country: "Australia",
        quote:
          "Kalki made our wedding attire hunt a breeze! Stunning designs, impeccable service. Can't wait for more photos in our Kalki outfits.",
        button: "View Product",
      },
      {
        id: 5,
        image: "https://staticm247.kalkifashion.com/media/wysiwyg/400px--533px-23-12-23-us-cust-1.jpg?aio-w=220", 
        name: "Nakita and Chris",
        country: "Australia",
        quote:
          "Kalki made our wedding attire hunt a breeze! Stunning designs, impeccable service. Can't wait for more photos in our Kalki outfits.",
        button: "View Product",
      },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };


  return (
    <div className="customer-stories">
      <h2 className="section-title">Custom Stories</h2>
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <div key={index} className="card">
            <div className="card-image-wrapper">
              <img src={card.image} alt={card.name} className="card-image" />
              <button className="view-product-btn">{card.button}</button>
                <div className="card-content">
                <p className="quote">"{card.quote}"</p>
                <p className="name">{card.name}</p>
                <p className="country">{card.country}</p>
                </div>
            </div>
          </div>
        ))}
      </Slider>
      {/* Custom Dots */}
      <div className="custom-dots">
        {cardData.map((_, index) => (
          <button
            key={index}
            className={`custom-dot ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CardSlider; 

