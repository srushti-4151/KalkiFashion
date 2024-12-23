import React, { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TopSlider from './Components/TopSlider';
import Header from './Components/Header';
import Footer from './Components/Footer';

const Layout = () => {
  const location = useLocation();
  const isBridalPage = location.pathname.includes("/bridal");

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
    
    {!isBridalPage && <TopSlider />}
    <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} isBridalPage={isBridalPage}/>
      
    <Outlet />

    <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    <Footer/>
    </>
  )
}

export default Layout;