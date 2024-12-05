import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/EditorsPicks.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


const EditorsPicks = () => {
  const picks = [
    {
      title: 'Influencer Era',
      subtitle: 'Vibes that Slay, Styles that Pop',
      img: 'https://staticm247.kalkifashion.com/media/wysiwyg/01-editors-picks-india-800x586-desk-21-11-2024.jpg?w=700',
      mobileImg: 'https://staticm247.kalkifashion.com/media/wysiwyg/01-editors-picks-india-420x568-mobile-21-11-2024.jpg?w=360',
      link: 'https://www.kalkifashion.com/in/ethnic/kalki-influencers.html',
    },
    {
      title: 'Shaadi Wardrobe',
      subtitle: 'Styles Under Budget',
      img: 'https://staticm247.kalkifashion.com/media/wysiwyg/2-editors-picks-india-800x586-desk-banner-21-11-2024.jpg?w=700',
      mobileImg: 'https://staticm247.kalkifashion.com/media/wysiwyg/2-editors-picks-india-420x568-mobile-banner-21-11-24.jpg?w=360',
      link: 'https://www.kalkifashion.com/in/ethnic/styles-under-budget.html',
    },
  ];

  return (
    <Container fluid className="editors-picks-section py-5">
      <h2 className="text-center mb-4">Editor's Picks</h2>
      <Row className="g-3">
        {picks.map((pick, index) => (
          <Col key={index} md={6}>
            <a href={pick.link} target="_blank" rel="noopener noreferrer" className="editor-pick-link">
              <picture>
                <source media="(max-width: 767px)" srcSet={pick.mobileImg} />
                <source media="(min-width: 768px)" srcSet={pick.img} />
                <img src={pick.img} alt={pick.title} className="w-100 img-fluid" />
              </picture>
              {/* <div className="overlay-text">
                <h3>{pick.title}</h3>
                <p>{pick.subtitle}</p>
                <button className="shop-now-btn">Shop Now</button>
              </div> */}
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default EditorsPicks;
