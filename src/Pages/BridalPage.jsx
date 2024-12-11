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
                Your browser does not support the video tag.
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
              Buy &amp; Explore Exquisite Bridal Lehengas and Wedding Dresses
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
                <h2>Kinds of Indian Bridal Wedding Dresses</h2>
                <p className="section-text">
                  Welcome to our exquisite collection of Indian bridal dresses, where our handpicked designs are crafted to connect with your refined style. Offering you an unforgettable bridal experience, our exclusive range of <a href="https://www.kalkifashion.com/in/lehengas/bridal-wedding-lehengas.html">bridal wedding lehengas</a> will add magic to your celebratory days. Whether you dream of being the quintessential bride in royal reds, or prefer a contemporary approach with your Indian dresses for wedding, our exhaustive selection has something to cater every bride’s taste.
                </p>
                <ul className="section-list">
                  <li>
                    <h3>Bridal Lehenga</h3>
                    A classic choice that highlights our traditional culture, expert craftsmanship and artistry; this timeless bridal lehenga is designed for the bride who desires grandeur and grace...
                  </li>
                  <li>
                    <h3>Modern Gown</h3>
                    An aesthetic choice for a contemporary vibe; <a href="https://www.kalkifashion.com/in/gowns/bridal-gowns.html">bridal gowns</a> display a sophisticated blend of modern design and elegant cuts...
                  </li>
                  <li>
                    <h3>Bridal Saree</h3>
                    A harmonious melange of traditional norms and new-age designs, the bridal saree acts as a versatile piece...
                  </li>
                </ul>

                <h2>Styling Your Bridal Lehenga with KALKI Fashion</h2>
                <p className="section-text">
                  The weather in India can vary from hot and humid to chilly and pleasant, depending on the year and region...
                </p>

                {/* More Content */}
                <h2>The Art of Draping Bridal Indian Lehenga</h2>
                <p className="section-text">
                  An integral part of Indian weddings, draping your beautiful bridal lehengas is truly a work of art...
                </p>

                <ul className="section-list">
                  <li>
                    <h3>Velvet Lehenga</h3>
                    Fabrics that speak volumes; crafted to artistic glory...
                  </li>
                  <li>
                    <h3>Georgette Lehenga</h3>
                    Airy and lightweight, these feather-like Indian lehengas offer comfort with functionality...
                  </li>
                  <li>
                    <h3>Crepe Lehenga</h3>
                    Accentuate your flattering curves with silhouettes that wrap your body...
                  </li>
                </ul>

                <p className="section-text">
                  With an exhaustive and varied range of designs to choose from, opt for bridal lehengas that not only match the theme of your event but also that will hold a special place in your heart, for years to come.
                </p>

                <h2>Things to Consider Before Buying Indian Bridal Wedding Dresses Online</h2>
                <ul className="section-list">
                  <li>
                    <h3>Understand Your Measurements</h3>
                    Accurate measurement of your bust, waist and hips are extremely important...
                  </li>
                  <li>
                    <h3>Explore Fabric and Material Descriptions</h3>
                    Do not shy away from scrolling through the plethora of filters...
                  </li>
                  <li>
                    <h3>Look for Customization Options</h3>
                    It’s all about customizing your bridal lehenga to the T...
                  </li>
                </ul>

                {/* Read Less Button */}
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
