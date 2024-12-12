import React, { useState } from "react";
import "../styles/BridalPage.scss";
import { Container, Row, Col, Button } from 'react-bootstrap';

const Bridal = () => {
  const [readMore, setReadMore] = useState(false);
  return (
    <>
    <section className="bridal-section" id="sect1">
      <div className="video">
        {/* Desktop Video */}
        <video
          className="desktop-video"
          autoPlay
          loop
          muted
          playsInline
          src="https://staticm247.kalkifashion.com/media/wysiwyg/bridal-wedding-dresses-lfw-desk-video.mp4"
          type="video/mp4"
        >
          Your browser does not support the video tag.
        </video>
        {/* Mobile Video */}
        <video
          className="mobile-video"
          autoPlay
          loop
          muted
          playsInline
          src="https://staticm247.kalkifashion.com/media/wysiwyg/bridal-wedding-dresses-lfw-mobile-size-video-f.mp4"
          type="video/mp4"
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="button-wrapper">
        <a
          href="https://www.kalkifashion.com/in/ethnic/mushk-wedding-couture-2024.html"
          className="btn"
        >
          View Collection
        </a>
      </div>
    </section>
    <section className="bridal-banner-section">
      <Container fluid className="bridal-container">
          <Row className="bridal-row">
            <Col className="bridal-col">
              <picture className="bridal-picture">
                <source
                  media="(max-width:767px)"
                  srcSet="https://staticm247.kalkifashion.com/media/wysiwyg/bridal-banner-mobile-500x700-09-08-24.jpg?w=750"
                  className="bridal-source-mobile"
                />
                <img
                  className="bridal-img"
                  src="https://staticm247.kalkifashion.com/media/wysiwyg/bridal-banner-desk-12-4-24.jpg?w=1920"
                  alt="Big Savings"
                  width="345"
                  loading="lazy"
                />
              </picture>
            </Col>

            <Col className="bridal-button-col">
              <Button
                href="https://www.kalkifashion.com/in/lehengas/bridal-wedding-lehengas.html"
                className="bridal-button"
              >
                See All
              </Button>
            </Col>
          </Row>
        </Container>
    </section>

    <section className="bridal-page-section">
      <Container fluid>
        <Row>
          <Col>
            <a
              href="https://www.instagram.com/bridesofkalki/?hl=en"
              target="_blank"
              className="instagram-link"
            >
              <picture>
                <source
                  media="(max-width: 767px)"
                  srcSet="https://staticm247.kalkifashion.com/media/wysiwyg/bridal-page-bride-mobile-500x700-09-08-24-1.jpg?w=750"
                />
                <img
                  className="bridal-image"
                  src="https://staticm247.kalkifashion.com/media/wysiwyg/bridal-page-bride-9-8-24.jpg?w=1920"
                  alt="Big Savings"
                  width="345"
                  loading="lazy"
                />
              </picture>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
    <section className="bridal-jewelry-section">
      <div className="row-full-width-inner" data-element="inner">
        <div
          data-content-type="html"
          data-appearance="default"
          data-element="main"
          data-decoded="true"
        >
          <div className="content-container">
            <div className="video-container">
              <video
                className="video"
                width="500"
                autoplay="autoplay"
                loop="loop"
                muted
                playsinline
                src="https://newcdn.kalkifashion.com/media/wysiwyg/jewellery-4th-banner_2.mp4"
                type="video/mp4"
                allow="accelerometer; autoplay; modestbranding; encrypted-media; gyroscope; picture-in-picture"
              >
                video
              </video>
            </div>
            <div className="text-container">
              <div className="text-content">
                <div className="title">
                  Bridal Jewelry for
                  <br />
                  Your Big Day
                </div>
                <a
                  href="https://www.kalkifashion.com/in/ethnic/bridal.html"
                  className="view-collection"
                >
                  View Collection
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="bridal-video">
    <div className="py-4 container-fluid">
    <div className="g-4 g-md-0 row">
      <div className="col-12 col-md-4 p-0 videoHeightShort col">
        <video 
        className="w-100"
        width="500"
        autoplay="autoplay"
        loop="loop"
        muted
        playsinline
        src="https://cdn4.fireworktv.com/medias/2024/11/15/1731653937-icpqwkyl/watermarked/720/BabyPink2RafatFWL.mp4"
        type="video/mp4"
        allow="accelerometer; autoplay; modestbranding; encrypted-media; gyroscope; picture-in-picture"
        >
        </video>
      </div>

      <div className="col-12 col-md-4 p-0 col">
        <div className="h-100 d-grid align-items-center text-center">
          <div>
            <h4 className="text-uppercase">FROM 'YES' TO 'I DO' - ALL IN VIDEOS</h4>
            <div className="pt-2 d-flex justify-content-center">
              <button className="darkBtn fullBorderRad px-4">Discover Collection</button>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-4 p-0 videoHeightShort col">
        <video className="w-100"
        width="500"
        autoplay="autoplay"
        loop="loop"
        muted
        playsinline
        src="https://cdn4.fireworktv.com/medias/2024/11/15/1731653894-iazfptvl/watermarked/720/2RustOrangeRAFATFL.mp4"
        type="video/mp4"
        allow="accelerometer; autoplay; modestbranding; encrypted-media; gyroscope; picture-in-picture"
        >
        </video>
      </div>
    </div>
    </div>
    </section>
    <section className="youtbe-section">
      
    <Container fluid className="py-4">
      <Row className="row-full-width-inner d-flex flex-wrap justify-content-center">
       
        <Col xs={12} md={6} className="text-center p-4 mb-4 mb-md-0">
          <div className="wedding-text">
            <h2 className="text-uppercase text-black mb-2">
              WEDDING SHOPPING OF YOUR DREAMS | WITH KALKI STYLIST
            </h2>
            <Button 
              variant="dark" 
              href="https://www.kalkifashion.com/in/in-store-e-shopping-appointment" 
              className="button-for-discover-black">
              Book an Appointment
            </Button>
          </div>
        </Col>

        <Col xs={12} md={6} className="p-0">
          <div className="video-wrapper">
            <iframe 
              width="100%" 
              height="349" 
              src="https://www.youtube.com/embed/Fw9tInDZyHA" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            />
          </div>
        </Col>
      </Row>
    </Container>
    
    </section>

    <section className="text-part">
      <Container fluid className="category-description py-4">
        <Row>
          {/* Main Content */}
          <Col xs={12} md={12}>
            <h1 className="section-title">
              Buy & Explore Exquisite Bridal Lehengas and Wedding Dresses
            </h1>
            <p className="section-text">
              At KALKI Fashion, we understand the pivotal role of deep-rooted cultures and heritage in Indian weddings - which is why our silhouettes capture the timeless essence of rich embroidered artistry and exquisite craftsmanship. Our handpicked and curated collection of Indian dresses for weddings, focus on bespoke designs, versatile outfits and luxurious fabrics.
            </p>
            <p className="section-text">
              Whether it's a regal bridal lehenga, a glamorous trail-blazing gown, or a vibrant and lightweight bridal dress lehenga for Mehendi ceremonies, each cherished piece is beautifully crafted from opulent fabrics, delicate embellishments and alluring textures. The enduring beauty of our designs display an interplay of traditional elegance and modern charm, ensuring every bride steps out in utmost confidence while radiating unmatched grace.
            </p>
            <p className="section-text">
              Tailored to stand out on your special day, our <a href="https://www.kalkifashion.com/in/bridal-wedding-dresses">bridal wedding dresses</a> are the pinnacle of sophistication. Infused with time-honored techniques, our classic collection echoes royal grandeur. Helping you transcend the ordinary, we at KALKI Fashion, prepare you to embark on your beautiful journey - Be it pre-wedding functions or your memorable wedding day; explore our exquisite range of Indian bridal dresses, that will mirror your effortless style and create life-long memories.
            </p>

            {/* Read More Button */}
            {!readMore ? (
              <span
                className="read-more-button"
                onClick={() => setReadMore(true)}
              >
                <strong>Read More...</strong>
              </span>
            ) : (
              <div>
                <h3>Kinds of Indian Bridal Wedding Dresses</h3>
                <p className="section-text">
                  Welcome to our exquisite collection of Indian bridal dresses, where our handpicked designs are crafted to connect with your refined style. Offering you an unforgettable bridal experience, our exclusive range of <a href="https://www.kalkifashion.com/in/lehengas/bridal-wedding-lehengas.html">bridal wedding lehengas</a> will add magic to your celebratory days. Whether you dream of being the quintessential bride in royal reds, or prefer a contemporary approach with your Indian dresses for wedding, our exhaustive selection has something to cater every bride’s taste.
                </p>
                <ul className="section-list">
                  <li>
                    <h4>Bridal Lehenga</h4>
                    A classic choice that highlights our traditional culture, expert craftsmanship and artistry; this timeless bridal lehenga is designed for the bride who desires grandeur and grace. A luxurious masterpiece, that is decked with intricate rich embroidery and showcases gleaming embellishments. A set that includes a flared skirt, a flowy dupatta and an ornate blouse, the Indian lehenga is the perfect canvas for grandeur wedding celebrations. Handcrafted for the bride who seeks a regal allure, this culturally-rich ensemble will turn into an heirloom piece.
                  </li>
                  <li>
                    <h4>Modern Gown</h4>
                    An aesthetic choice for a contemporary vibe; bridal gowns display a sophisticated blend of modern design and elegant cuts. The minimalist detailing elevated with whimsical trails, offers an ultimate haven for brides seeking to express their unique and individual style. An alternative paradise to the traditional heavy bridal lehenga, modern gowns open up a world of decadent luxury and understated elegance. From destination weddings to close-knit ceremonies, these gowns will make a stunning statement.
                  </li>
                  <li>
                    <h4>Bridal Saree</h4>
                    A harmonious melange of traditional norms and new-age designs, the bridal saree acts as a versatile piece, for the bride who wishes to embrace her contemporary flair. A visual delight, this bridal saree set is complemented with a blouse and a cascading veil that adds a touch of ethereal elegance. A magnificent choice for brides who wish to celebrate their age-old traditions with a hint of modernity, ensuring an escape that is nothing short of magical and beautiful memories.
                  </li>
                </ul>

                <h3>Styling Your Bridal Lehenga with KALKI Fashion</h3>
                <p className="section-text">
                The weather in India can vary from hot and humid to chilly and pleasant, depending on the year and region. Styling your Indian dresses for weddings in the snow-clapped North, requires you to stay all warmed up while being stylish. Opt for heavier Indian jewellery that bloom with crystal embellishments and heirloom techniques. A layered haar, a Kundan choker, along with traditional jhumkas and embellished maangtikka, will help you master the art of layering. For weddings in warmer climates, lighter and delicate pieces make for a smart choice. You can choose a dainty necklace with subtle earrings, to exude understated glam, while keeping you comfortable at all times.
                </p>
                <p className="section-text">
                The next aspect of getting your D-day right is by getting the right bridal footwear. The right pair of shoes - be it juttis, bejewelled sneakers or a sparkly dose of kitten heels, stride through the day in style and comfort by making the right choice. Consider embellished block heels that balance modern designs and practicality. Ideal for not-so-sturdy outdoors, a crystal-studded pair will bring in the just right amount of dazzle and shine to your gorgeous bridal lehenga.
                </p>
                <p className="section-text">
                Nothing completes your regal Indian lehengas, like an embellished bridal purse. From luxurious and rich velvet potli bags to bedazzling, tassel- drop clutches. Besides adding to the glitz and the glam of your memorable day, these statement pieces accentuate the look of your Indian wedding dresses. Stylish and extremely practical, these carry-on accessories help you stack a ton of essentials - be it your lipstick or a compact mirror, these bridal purses magically tie together your beautiful D-day ensemble.
                </p>

                <h3>The Art of Draping Bridal Indian Lehenga</h3>
                <p className="section-text">
                An integral part of Indian weddings, draping your beautiful bridal lehengas is truly a work of art. The right flowy silhouettes and the right fabrics play a key role in turning your Indian lehengas into the dress of your dreams. The correct choice of fabric - from opulent silk, to heavy velvet, and lightweight georgette; the texture that you finally select will help in accentuating your flattering curves. Adding elegance to the traditional design, the right drape will help you feel and look confident on your wedding day.
                </p>

                <ul className="section-list">
                  <li>
                    <h4>Velvet Lehenga</h4>
                    Fabrics that speak volumes; crafted to artistic glory, premium rich materials like silk and heirloom-favorite brocade offer a regular allure and showcase your refined taste. A classic route if you wish to celebrate your love for exquisite handcrafted embroidery and glistening textures. Bridal lehengas that are crafted on these rich canvases are ideal for the grandest of celebrations and formal weddings. Embodying a sense of luxury with timeless elegance, these Indian bridal dresses help you glide through with ease and sophistication.
                  </li>
                  <li>
                    <h4>Georgette Lehenga</h4>
                    Airy and lightweight, these feather-like Indian lehengas offer comfort with functionality. Planning on outdoor summer weddings? Then opting for fabrics like crepe, georgette would be considered an apt choice. Adding a whimsical touch to all your memorable twirl-worthy moments, these bridal dress lehengas are curated for subtle movements. You can dance and live every second of your celebratory event to the fullest, while staying super comfortable and extremely stylish.

                  </li>
                  <li>
                    <h4>Crepe Lehenga</h4>
                    Accentuate your flattering curves with silhouettes that wrap your body Airy and lightweight, these feather-like Indian lehengas offer comfort with functionality. Planning on outdoor summer weddings? Then opting for fabrics like crepe, georgette would be considered an apt choice. Adding a whimsical touch to all your memorable twirl-worthy moments, these bridal dress lehengas are curated for subtle movements. You can dance and live every second of your celebratory event to the fullest, while staying super comfortable and extremely stylish.
                    ...
                  </li>
                </ul>

                <p className="section-text">
                  With an exhaustive and varied range of designs to choose from, opt for bridal lehengas that not only match the theme of your event but also that will hold a special place in your heart, for years to come.
                </p>

                <h3>Things to Consider Before Buying Indian Bridal Wedding Dresses Online</h3>
                <ul className="section-list">
                  <li>
                    <h4>Understand Your Measurements</h4>
                    Accurate measurement of your bust, waist and hips are extremely important. The right fit depends on your curves being accentuated, and the waist, bust and hips play a crucial role in just that. Browse the size chart of each Indian lehenga that you have added to your cart, and go for the nearest measurement. Always research a bit deeper and pay keen attention to customer reviews and feedback, especially the ones who have opted for similar Indian dresses for weddings in recent times.

                  </li>
                  <li>
                    <h4>Explore Fabric and Material Descriptions</h4>
                    Do not shy away from scrolling through the plethora of filters Accurate measurement of your bust, waist and hips are extremely important. The right fit depends on your curves being accentuated, and the waist, bust and hips play a crucial role in just that. Browse the size chart of each Indian lehenga that you have added to your cart, and go for the nearest measurement. Always research a bit deeper and pay keen attention to customer reviews and feedback, especially the ones who have opted for similar Indian dresses for weddings in recent times.
                    
                  </li>
                  <li>
                    <h4>Look for Customization Options</h4>
                    It's all about customizing your bridal lehenga to the Accurate measurement of your bust, waist and hips are extremely important. The right fit depends on your curves being accentuated, and the waist, bust and hips play a crucial role in just that. Browse the size chart of each Indian lehenga that you have added to your cart, and go for the nearest measurement. Always research a bit deeper and pay keen attention to customer reviews and feedback, especially the ones who have opted for similar Indian dresses for weddings in recent times.
                    
                  </li>
                </ul>

                <span
                  className="read-more-button"
                  onClick={() => setReadMore(false)}
                >
                  <strong>Read Less...</strong>
                </span>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  </>
  );
};

export default Bridal;
