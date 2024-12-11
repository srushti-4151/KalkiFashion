// import React from 'react';
// import { Row, Col, Image } from 'react-bootstrap';
// import "../styles/MobileTab.scss"; 

// const MobileTab = () => {
//   const tabs = [
//     {
//       imgSrc: "https://staticm247.kalkifashion.com/media/wysiwyg/182x182-mobile-bestseller-all-15-11-24.jpg?w=55",
//       altText: "Bestseller",
//       link: "https://www.kalkifashion.com/in/ethnic/best-sellers-in-india.html/",
//       label: "Bestseller"
//     },
//     {
//       imgSrc: "https://staticm247.kalkifashion.com/media/wysiwyg/182x182-mobile-saree-26-11-24.jpg?w=55",
//       altText: "Saree",
//       link: "https://www.kalkifashion.com/in/sarees.html/",
//       label: "Saree"
//     },
//     {
//         imgSrc: "https://staticm247.kalkifashion.com/media/wysiwyg/182x182-mobile-saree-26-11-24.jpg?w=55",
//         altText: "Saree",
//         link: "https://www.kalkifashion.com/in/sarees.html/",
//         label: "Saree"
//       },
//       {
//         imgSrc: "https://staticm247.kalkifashion.com/media/wysiwyg/182x182-mobile-saree-26-11-24.jpg?w=55",
//         altText: "Saree",
//         link: "https://www.kalkifashion.com/in/sarees.html/",
//         label: "Saree"
//       },
//       {
//         imgSrc: "https://staticm247.kalkifashion.com/media/wysiwyg/182x182-mobile-saree-26-11-24.jpg?w=55",
//         altText: "Saree",
//         link: "https://www.kalkifashion.com/in/sarees.html/",
//         label: "Saree"
//       },
//       {
//         imgSrc: "https://staticm247.kalkifashion.com/media/wysiwyg/182x182-mobile-saree-26-11-24.jpg?w=55",
//         altText: "Saree",
//         link: "https://www.kalkifashion.com/in/sarees.html/",
//         label: "Saree"
//       },
//       {
//         imgSrc: "https://staticm247.kalkifashion.com/media/wysiwyg/182x182-mobile-saree-26-11-24.jpg?w=55",
//         altText: "Saree",
//         link: "https://www.kalkifashion.com/in/sarees.html/",
//         label: "Saree"
//       },
//       {
//         imgSrc: "https://staticm247.kalkifashion.com/media/wysiwyg/182x182-mobile-saree-26-11-24.jpg?w=55",
//         altText: "Saree",
//         link: "https://www.kalkifashion.com/in/sarees.html/",
//         label: "Saree"
//       },
//   ];

//   return (
//     <div className="mobile-quick-tabs-content">
//       <Row className="justify-content-center">
//         {tabs.map((tab, index) => (
//           <Col xs={4} sm={3} md={2} key={index} className="text-center mb-3">
//             <a href={tab.link} className="d-block mx-2.5">
//               <div className="icon-container">
//                 <Image 
//                   src={tab.imgSrc} 
//                   alt={tab.altText} 
//                   className="rounded-circle w-100 h-100" 
//                   style={{ objectFit: 'cover' }}
//                 />
//               </div>
//               <div>{tab.label}</div>
//             </a>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// }

// export default MobileTab;
import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import "../styles/MobileTab.scss"; 

const MobileTab = () => {
  const tabs = [
    {
      imgSrc: "https://staticm247.kalkifashion.com/media/wysiwyg/182x182-mobile-bestseller-all-15-11-24.jpg?w=55",
      altText: "Bestseller",
      link: "https://www.kalkifashion.com/in/ethnic/best-sellers-in-india.html/",
      label: "Bestseller"
    },
    {
      imgSrc: "https://staticm247.kalkifashion.com/media/wysiwyg/182x182-mobile-saree-26-11-24.jpg?w=55",
      altText: "Saree",
      link: "https://www.kalkifashion.com/in/sarees.html/",
      label: "Saree"
    },
    {
        imgSrc: "https://staticm247.kalkifashion.com/media/wysiwyg/182x182-mobile-bestseller-all-15-11-24.jpg?w=55",
        altText: "Bestseller",
        link: "https://www.kalkifashion.com/in/ethnic/best-sellers-in-india.html/",
        label: "Bestseller"
      },
      {
        imgSrc: "https://staticm247.kalkifashion.com/media/wysiwyg/182x182-mobile-saree-26-11-24.jpg?w=55",
        altText: "Saree",
        link: "https://www.kalkifashion.com/in/sarees.html/",
        label: "Saree"
      },
      {
        imgSrc: "https://staticm247.kalkifashion.com/media/wysiwyg/182x182-mobile-bestseller-all-15-11-24.jpg?w=55",
        altText: "Bestseller",
        link: "https://www.kalkifashion.com/in/ethnic/best-sellers-in-india.html/",
        label: "Bestseller"
      },
      {
        imgSrc: "https://staticm247.kalkifashion.com/media/wysiwyg/182x182-mobile-saree-26-11-24.jpg?w=55",
        altText: "Saree",
        link: "https://www.kalkifashion.com/in/sarees.html/",
        label: "Saree"
      },
      {
        imgSrc: "https://staticm247.kalkifashion.com/media/wysiwyg/182x182-mobile-bestseller-all-15-11-24.jpg?w=55",
        altText: "Bestseller",
        link: "https://www.kalkifashion.com/in/ethnic/best-sellers-in-india.html/",
        label: "Bestseller"
      },
      {
        imgSrc: "https://staticm247.kalkifashion.com/media/wysiwyg/182x182-mobile-saree-26-11-24.jpg?w=55",
        altText: "Saree",
        link: "https://www.kalkifashion.com/in/sarees.html/",
        label: "Saree"
      },
      {
        imgSrc: "https://staticm247.kalkifashion.com/media/wysiwyg/182x182-mobile-bestseller-all-15-11-24.jpg?w=55",
        altText: "Bestseller",
        link: "https://www.kalkifashion.com/in/ethnic/best-sellers-in-india.html/",
        label: "Bestseller"
      },
      {
        imgSrc: "https://staticm247.kalkifashion.com/media/wysiwyg/182x182-mobile-saree-26-11-24.jpg?w=55",
        altText: "Saree",
        link: "https://www.kalkifashion.com/in/sarees.html/",
        label: "Saree"
      },
    // More tabs as required...
  ];

  return (
    <div className="mobile-quick-tabs-content">
      <Row className="justify-content-start">
        {tabs.map((tab, index) => (
          <Col xs="auto" key={index} className="text-center mb-3">
            <a href={tab.link}>
              <div className="icon-container">
                <Image 
                  src={tab.imgSrc} 
                  alt={tab.altText} 
                  className="rounded-circle w-100 h-100" 
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>{tab.label}</div>
            </a>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MobileTab;
