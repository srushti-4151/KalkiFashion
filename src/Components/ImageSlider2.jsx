import React from "react";
import Slider from "react-slick";
import "../styles/ImageSlider2.scss"; 
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CustomPrevArrow = ({ className, style, onClick }) => (
  <button
    className={`carousel-btn ${className}`}
    style={{ ...style, display: "block" }}
    onClick={onClick}
  >
    <FaChevronLeft className="chevron-icon" />
  </button>
);

const CustomNextArrow = ({ className, style, onClick }) => (
  <button
    className={`carousel-btn ${className}`}
    style={{ ...style, display: "block" }}
    onClick={onClick}
  >
    <FaChevronRight className="chevron-icon" />
  </button>
);

const ImageSlider2 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const curatedItems = [
    {
      id: 1,
      image: "https://staticm247.kalkifashion.com/media/wysiwyg/1-engagement-india-400x533-21-11-24.jpg",
      title: "Engagement Edit",
    },
    {
      id: 2,
      image: "https://staticm247.kalkifashion.com/media/wysiwyg/2-haldi-mehendi-india-400x533-21-11-24.jpg",
      title: "Haldi | Mehendi",
    },
    {
      id: 3,
      image: "https://staticm247.kalkifashion.com/media/wysiwyg/3-cocktail-india-400x533-21-11-24.jpg",
      title: "Cocktail Charm",
    },
    {
      id: 4,
      image: "https://staticm247.kalkifashion.com/media/wysiwyg/4-sangeet-india-400x533-21-11-24.jpg",
      title: "Sangeet Soirée",
    },
    {
      id: 4,
      image: "https://staticm247.kalkifashion.com/media/wysiwyg/5-wedding-india-400x533-21-11-24.jpg",
      title: "Sangeet Soirée",
    },
  ];

  return (
    <div className="curated-slider-container">
      <h2 className="section-title">Curated Collections</h2>
      <Slider {...settings}>
        {curatedItems.map((item) => (
          <div key={item.id} className="curated-item">
            <img src={item.image} alt={item.title} className="curated-image" />
            <div className="card-overlay">
             <h3 className="curated-title">{item.title}</h3>
             <button className="shop-now-btn">SHOP NOW</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider2;

// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../styles/ImageSlider2.scss";

// const ImageSlider2 = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     arrows: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 576,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   const curatedItems = [
//     {
//       id: 1,
//       image: "https://staticm247.kalkifashion.com/media/wysiwyg/3-cocktail-india-400x533-21-11-24.jpg",
//       title: "Engagement Edit",
//       description: "Glamorous Looks for the Big Day",
//     },
//     {
//       id: 2,
//       image: "https://staticm247.kalkifashion.com/media/wysiwyg/3-cocktail-india-400x533-21-11-24.jpg",
//       title: "Haldi | Mehendi",
//       description: "Bright & Playful Styles",
//     },
//     {
//       id: 3,
//       image: "https://staticm247.kalkifashion.com/media/wysiwyg/3-cocktail-india-400x533-21-11-24.jpg",
//       title: "Cocktail Charm",
//       description: "Bold and Elegant Looks",
//     },
//     {
//       id: 4,
//       image: "https://staticm247.kalkifashion.com/media/wysiwyg/3-cocktail-india-400x533-21-11-24.jpg",
//       title: "Sangeet Soirée",
//       description: "Dazzling Party Vibes",
//     },
//   ];

//   return (
//     <div className="curated-slider-container">
//       <h2 className="section-title">Curated Collections</h2>
//       <Slider {...settings}>
//         {curatedItems.map((item) => (
//           <div key={item.id} className="image-col">
//             <div className="card">
//               <img src={item.image} alt={item.title} className="card-img" />
//               <div className="card-overlay">
//                 <h4>{item.title}</h4>
//                 <p>{item.description}</p>
//                 <button className="shop-now-btn">SHOP NOW</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default ImageSlider2;
