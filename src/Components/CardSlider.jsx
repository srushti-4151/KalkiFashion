import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../styles/ImageSlider.scss"; 
import "../styles/CardSlider.scss";

const CardSlider = () => {
  const cardData = [
    {
      image: "https://staticm247.kalkifashion.com/media/wysiwyg/400px--533px-9-5-23-romika.jpg?aio-w=220", 
      name: "Carolina Rabinovich",
      country: "USA",
      quote:
        "At my first Indian wedding, nerves about attire vanished! This ensemble shined—vibrant, comfy, endless compliments. I wanna shop again soon!",
      button: "View Product",
    },
    {
      image: "https://staticm247.kalkifashion.com/media/wysiwyg/400px--533px-9-5-23-romika.jpg?aio-w=220", 
      name: "Nakita and Chris",
      country: "Australia",
      quote:
        "Kalki made our wedding attire hunt a breeze! Stunning designs, impeccable service. Can't wait for more photos in our Kalki outfits.",
      button: "View Product",
    },
    {
        image: "https://staticm247.kalkifashion.com/media/wysiwyg/400px--533px-9-5-23-romika.jpg?aio-w=220", 
        name: "Nakita and Chris",
        country: "Australia",
        quote:
          "Kalki made our wedding attire hunt a breeze! Stunning designs, impeccable service. Can't wait for more photos in our Kalki outfits.",
        button: "View Product",
      },
      {
        image: "https://staticm247.kalkifashion.com/media/wysiwyg/400px--533px-9-5-23-romika.jpg?aio-w=220", 
        name: "Nakita and Chris",
        country: "Australia",
        quote:
          "Kalki made our wedding attire hunt a breeze! Stunning designs, impeccable service. Can't wait for more photos in our Kalki outfits.",
        button: "View Product",
      },
      {
        image: "https://staticm247.kalkifashion.com/media/wysiwyg/400px--533px-9-5-23-romika.jpg?aio-w=220", 
        name: "Nakita and Chris",
        country: "Australia",
        quote:
          "Kalki made our wedding attire hunt a breeze! Stunning designs, impeccable service. Can't wait for more photos in our Kalki outfits.",
        button: "View Product",
      },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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

  return (
    <div className="customer-stories">
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
    </div>
  );
};

export default CardSlider;
