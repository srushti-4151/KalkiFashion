import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../styles/ImageSlider2.scss"; 
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

const CustomPrevArrow = ({ className, style, onClick }) => (
  <button
    className={`carousel-btn ${className}`}
    style={{ ...style, display: "block" }}
    onClick={onClick}
  >
    <FaChevronRight className="chevron-icon chevron-icon-prev"/>
  </button>
);

const CustomNextArrow = ({ className, style, onClick }) => (
  <button
    className={`carousel-btn ${className}`}
    style={{ ...style, display: "block" }}
    onClick={onClick}
  >
    <FaChevronLeft className="chevron-icon chevron-icon-prev"/>
  </button>
);


const ImageSlider3 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  const sliderItems = [
    {
      id: 1,
      image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/t/u/turquoise_floral_print_organza_jacket_and_skirt_set-sg274152_6_.jpg?smallSize=true",
      title: "Yellow And Pista Green Tissue Palazzo",
      price: "₹19,998.85",
    },
    {
      id: 2,
      image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/p/u/purple_embroidered_kurta_palazzo_set-sg281634_5_.jpg?smallSize=true",
      title: "Forest Green Tissue Muslin Printed Saree",
      price: "₹9,994.86",
    },
    {
      id: 3,
      image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/y/e/yellow_and_pista_green_tissue_palazzo_suit_with_zardosi_work-sg285781_6_.jpg?smallSize=true",
      title: "Forest Green Tissue Muslin Printed Saree",
      price: "₹9,994.86",
    },
    {
      id: 4,
      image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/t/u/turquoise_floral_print_organza_jacket_and_skirt_set-sg274152_6_.jpg?smallSize=true",
      title: "Forest Green Tissue Muslin Printed Saree",
      price: "₹8,994.71",
    },
    {
      id: 5,
      image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/b/o/bottle_green_chiffon_crop_top_with_skirt_with_colourful_resh-sg285698_5_.jpg?smallSize=true",
      title: "Forest Green Tissue Muslin Printed Saree",
      price: "₹9,994.86",
    },
    {
      id: 6,
      image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/b/e/beige_organza_floral_printed_jacket_and_skirt_set-sg274157_5_.jpg?smallSize=true",
      title: "Forest Green Tissue Muslin Printed Saree",
      price: "₹9,994.86",
    },
    {
      id: 7,
      image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/p/i/pink_organza_saree_with_resham_jaal_embroidery-sg261619_8_.jpg?smallSize=true",
      title: "Forest Green Tissue Muslin Printed Saree",
      price: "₹9,994.86",
    },
    {
      id: 8,
      image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/f/o/forest_green_tissue_muslin_printed_saree_with_pitta_work_bor-sg262404_8_.jpg?smallSize=true",
      title: "Forest Green Tissue Muslin Printed Saree",
      price: "₹9,994.86",
    },
    {
      id: 9,
      image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/b/l/black_sequin_patch_work_croptop_palazzo_with_cape-sg282328_7_.jpg?smallSize=true",
      title: "Forest Green Tissue Muslin Printed Saree",
      price: "₹9,994.86",
    },
    {
      id: 10,
      image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/b/l/ble_embroidered_silk_jacket_kurta_set-sg246728_5_.jpg?smallSize=true",
      title: "Forest Green Tissue Muslin Printed Saree",
      price: "₹9,994.86",
    },
    {
      id: 11,
      image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/b/l/black_floral_kantha_hand_embroidered_kurta_jacket_set-sg259255_4_.jpg?smallSize=true",
      title: "Forest Green Tissue Muslin Printed Saree",
      price: "₹9,994.86",
    },
  ];

  return (
    <div className="slider-container">
      <h2 className="section-title">New This Week</h2>
      <Slider {...settings}>
        {sliderItems.map((item) => (
          <div key={item.id} className="slider-item">
            <img src={item.image} alt={item.title} className="slider-image" />
            <h3 className="item-title">{item.title}</h3>
            <p className="item-price">{item.price}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default ImageSlider3;
