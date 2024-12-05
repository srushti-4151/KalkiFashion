import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/custom.scss'; 
import 'swiper/css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Home from './Pages/Home.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
);

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import "./styles/custom.scss"
// import Header from './Components/Header.jsx';
// import 'swiper/swiper-bundle.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Header />
//   </StrictMode>,
// )
