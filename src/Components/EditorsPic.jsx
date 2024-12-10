import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/EditorsPicks.scss';


const EditorsPicks = () => {
  const picks = [
    {
      img: 'https://staticm247.kalkifashion.com/media/wysiwyg/01-editors-picks-india-800x586-desk-21-11-2024.jpg?w=700',
      mobileImg: 'https://staticm247.kalkifashion.com/media/wysiwyg/01-editors-picks-india-420x568-mobile-21-11-2024.jpg?w=360',
      link: 'https://www.kalkifashion.com/in/ethnic/kalki-influencers.html',
    },
    {
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
          <Col key={index} xs={6} sm={6} md={6}>
            <a href={pick.link} target="_blank" rel="noopener noreferrer" className="editor-pick-link">
              <picture>
                <source media="(max-width: 767px)" srcSet={pick.mobileImg} />
                <source media="(min-width: 768px)" srcSet={pick.img} />
                <img src={pick.img} alt={pick.title} className="w-100 img-fluid responsive-image" />
              </picture>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default EditorsPicks;
