import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";
import { CiVideoOn } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { GoHeart } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";


import '../styles/Header.scss';

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
    <div id="header" className="relative z-10 w-full pb-3 lg:pt-4 lg:pb-3">
      <div className="container d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-between pb-0">
        
        <div className="d-none d-lg-block" id="tabs">
          <div className="tab-set d-flex">
            <div className="tab menu-active" id="women-nav">
              <a href="#">Women</a>
            </div>
            <div className="tab menu-active" id="men-nav">
              <a href="#">Men</a>
            </div>
            <div className="tab menu-active" id="kids-nav">
              <a href="#">Kids</a>
            </div>
            <div className="tab menu-active" id="bridal-nav">
              <a href="#">Bridal</a>
            </div>
            <div className="tab menu-active" id="luxe-nav">
              <a href="#">Luxe</a>
            </div>
          </div>
        </div>

        <div className="order-2 w-auto header-logo">
          <a
            href="/"
            className="d-flex align-items-center justify-content-center text-xl font-medium tracking-wide no-underline hover:no-underline"
            title="Store Logo"
            aria-label="store logo"
          >
            <img
              src="https://www.kalkifashion.com/static/version1733131259/frontend/Aureatelabs/kalki/en_US/images/logo.svg"
              title="Logo"
              alt="Logo"
              width="180"
              height="54"
              className="w-auto max-h-8 md:max-h-11 lg:max-h-full"
            />
          </a>
        </div>  

        <div className="flex items-center justify-between order-2 md:w-2/5 max-w-prose">
          <div className="d-flex align-items-center">
            {/* Search Input */}
            <div className="lg:inline-block header-search-icon flex items-center">
              <div className="cursor-pointer head-search-12" onClick={() => setSearchOpen(!searchOpen)}>
                <div className="head-search-123">
                  <div className="head-search-1234">
                    Search for style, Collections & more
                    <IoSearch className="head-search-12345" size={20} color="#404040" />
                  </div>
                </div>
              </div>
              {searchOpen && (
                <div className="search-dropdown">
                  <input type="text" className="search-input" placeholder="Search..." />
                </div>
              )}
            </div>

            {/* Video Shopping Icon */}
            <a className="header-video-shop" 
               href="#" 
               target="_blank" 
               onClick={() => headerClickInteraction('Video Shopping')}>
                  <CiVideoOn className="head-icon-12345" size={20} color="#404040"/>
            </a>
            <a className="header-video-shop" 
               href="#" 
               target="_blank" 
               onClick={() => headerClickInteraction('Video Shopping')}>
                  <IoLogoWhatsapp className="head-icon-12345" size={20} color="#404040"/>
            </a>
            <a className="header-video-shop" 
               href="#" 
               target="_blank" 
               onClick={() => headerClickInteraction('Video Shopping')}>
                  <CgProfile className="head-icon-12345" size={20} color="#404040"/>
            </a>
            <a className="header-video-shop" 
               href="#" 
               target="_blank" 
               onClick={() => headerClickInteraction('Video Shopping')}>
                  <GoHeart className="head-icon-12345" size={20} color="#404040"/>
            </a>
            <a className="header-video-shop" 
               href="#" 
               target="_blank" 
               onClick={() => headerClickInteraction('Video Shopping')}>
                  <HiOutlineShoppingBag className="head-icon-12345" size={20} color="#404040"/>
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* <div className='tabContent-list order-3 lg:block pt-1.5 pb-0.5 shadow-sm border-b'>
      <div className='tabContent' id="women-submenu">
        <div className='z-20 order-3 sm:order-1 lg:order-2 navigation hidden lg:flex lg:justify-center lg:w-full container'>
          <div className='hidden lg:block lg:relative lg:min-h-0 lg:w-full lg:pt-0'>
            <nav className='duration-150 ease-in-out transform flex flex-wrap justify-start w-full relative min-h-0 transition-display'>
              <div className='class="level0 cmsb519-lg:text-center cmsb519-relative cmsb519-min-h-[42px] cmsb519-flex"'>
                <div className='mega-tab-menu cmsb519-relative'>
                  <a>Bestseller</a>
                </div>
                <div className='mega-tab-menu half-mobile-menu'>
                 <a>Saree</a>
                </div>
                <div className='mega-tab-menu half-mobile-menu'>
                 <a>Salwar Kameez</a>
                </div>
                <div className='mega-tab-menu half-mobile-menu'>
                 <a>Lehengas</a>
                </div>
                <div className='mega-tab-menu half-mobile-menu'>
                 <a>Indo Western</a>
                </div>
                <div className='mega-tab-menu half-mobile-menu'>
                 <a>Blouse</a>
                </div>
                <div className='mega-tab-menu half-mobile-menu'>
                 <a>Men</a>
                </div>
                <div className='mega-tab-menu half-mobile-menu'>
                 <a>Bridal</a>
                </div>
                <div className='mega-tab-menu half-mobile-menu'>
                 <a>Mehendi</a>
                </div>
                <div className='mega-tab-menu half-mobile-menu'>
                 <a>Sangeet</a>
                </div>
                <div className='mega-tab-menu half-mobile-menu'>
                 <a>Wedding</a>
                </div>
                <div className='mega-tab-menu half-mobile-menu'>
                 <a>Ready to ship</a>
                </div>
                <div className='mega-tab-menu half-mobile-menu'>
                 <a>Collection</a>
                </div>
                <div className='mega-tab-menu half-mobile-menu'>
                 <a>New</a>
                </div>
                <div className='mega-tab-menu half-mobile-menu'>
                 <a>Sale</a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div> */}
    <div className="tabContent-list py-3 px-4 border shadow-xm p-0 mb-3">
        <div className="tabContent d-flex flex-wrap justify-content-start gap-0">
          <div className="mega-tab-menu py-2 px-0 bg-white text-dark text-center">
            <a href="#">Bestseller</a>
          </div>
          <div className="mega-tab-menu py-2 px-1 bg-white text-dark text-center">
            <a href="#">Saree</a>
          </div>
          <div className="mega-tab-menu py-2 px-1 bg-white text-dark text-center">
            <a href="#">Salwar Kameez</a>
          </div>
          <div className="mega-tab-menu py-2 px-1 bg-white text-dark text-center">
            <a href="#">Lehengas</a>
          </div>
          <div className="mega-tab-menu py-2 px-1 bg-white text-dark text-center">
            <a href="#">Indo Western</a>
          </div>
          <div className="mega-tab-menu py-2 px-1 bg-white text-dark text-center">
            <a href="#">Indo Western</a>
          </div>
          <div className="mega-tab-menu py-2 px-1 bg-white text-dark text-center">
            <a href="#">Indo Western</a>
          </div>
          <div className="mega-tab-menu py-2 px-1 bg-white text-dark text-center">
            <a href="#">Indo Western</a>
          </div>
          <div className="mega-tab-menu py-2 px-1 bg-white text-dark text-center">
            <a href="#">Indo Western</a>
          </div>
          <div className="mega-tab-menu py-2 px-1 bg-white text-dark text-center">
            <a href="#">Indo Western</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;


