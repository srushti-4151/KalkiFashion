import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/KalkiDes.scss";

const KalkiDes = () => {
  const [readMore, setReadMore] = useState(false);

  return (
    <section className="kalki-description">
      <Container>
        <hr/>
        <Row>
          <Col>
            <h1>KALKI Fashion - Buy Traditional Indian Clothing and Ethnic Wear Online in India</h1>
            <p>
              Launched in 2007 in Mumbai, KALKI is born out of a fiercely creative spirit and a unique design sensibility.
              The brand KALKI is synonymous with luxury, traditional Indian craft, and a distinct and refreshing design.
              Representing rooted culture and crafts of India and eclectic fusion through its ethnic wear collection is
              what explains KALKI’s design philosophy. The clothing fashion brand also has international attention and
              global appeal to its outfit designs.
            </p>
            {!readMore && (
              <Button
                variant="link"
                className="read-more-button"
                onClick={() => setReadMore(true)}
              >
                <strong>Read More...</strong>
              </Button>
            )}
            {readMore && (
              <div className="read-more-content">
                <p>Unusual textures, ‘fusion’ of styles, patchworks, ornate embroidery, and gorgeous embellishments on a diverse and vivid colour palette describe the ethnic and designer wear collection of KALKI and give the feeling of ‘going back to the roots.’ Overall, KALKI Fashion is all about the seamless confluence of ethnicity and femininity that allows the unique designs of the ethnic outfits to come alive on the wearer. Fashion consultants at KALKI help the brides with tailor-made lehengas, salwar kameez, and designer cocktail gowns and offer an integrated and unique experience to the wearer. The story of KALKI’s remarkable presence is never-ending. So, we go on!</p>

                <h2>Premium And Authentic Wear For Women In India</h2>
                <p>21st-century women look for clothes that define a major part of their personality. No wonder, they are heavily influenced by the fusion and Indo-western vibes, but the love for ethnic wear does prevail in their hearts. As a result, they prefer to go the ‘desi’ way but with a premium and authentic collection that includes premium sarees, designer outfits, fusion lehengas, modern ready-to-wear sarees, and more. The luxurious collection and the opulent feel of good clothing not only make them feel like a queen but also leave a lasting impression at office parties, family gatherings, anniversaries, and weddings.</p>

                <h2>The Demand For The Premium & Luxurious Ethnic Attire</h2>
                <p>No matter how much a woman loves that comfy pair of jeans, the glory of luxurious ethnic wear is just unmatched and has taken over the minds of ladies once again. Ethnic wear has seen a phenomenal change, and quintessential Indian garments like silk sarees, Banarasi suits, and georgette Anarkalis are seen as a symbol of grace and tradition. Here are the key features that have helped ethnic fashion clothing transition from being conventional to a versatile fashion statement:</p>

                <ul>
                    <li>Be it traditional dresses online or ethnic wear for women offline; the premium, high-quality and designer pieces like suits, sarees, palazzo sets, and pre-drapes effortlessly cater to the tastes and preferences of the modern generation.</li>
                    
                    <li>Influential designers and B-town celebrities have played a pivotal role in re-inventing the image of the Indian traditional dresses for women and designer clothing. Ethnic wear has been made relevant and appealing to the wider audience by infusing or blending contemporary elements into regular or traditional designs. Creative designs like frills, belts, shoulder shrugs, net capes and 3D patches encourage experimentation and exploration of various styles in saree, salwar kameez or designer lehenga choli arena. Prints, patterns, and unconventional fabrics are another area of experimentation.</li>
                    
                    <li>The visually captivating styles consisting of dramatic dupatta styles, brooches, hangings, bows, billowing sleeves, structured shoulders, floral blazers, and pant outfits are making the latest clothing accessible and appealing to the younger generation who wish to remain connected with their roots and exhibit a unique sense of style and confidence</li>
                </ul>

                <h2>Wedding Dress Trends To Look For In 2024</h2>
                <p>The Indian wedding season has always been one of the most exciting periods for the fashion industry, and this trend only seems to be growing stronger with time. Brides, bridesmaids, and guests alike continue to make bold statements with their choices of attire. The key to staying ahead of the trends in 2024 is to embrace uniqueness, individuality, and fusion. Below are some of the most popular wedding dress trends to look forward to this year:</p>

                <Button
                  variant="link"
                  className="read-less-button"
                  onClick={() => setReadMore(false)}
                >
                  <strong>Read Less...</strong>
                </Button>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default KalkiDes;
