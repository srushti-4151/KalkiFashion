import React, { useState } from "react";
import { IoSearch, IoLogoWhatsapp } from "react-icons/io5";
import { CiVideoOn } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { GoHeart } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";
import { HiOutlineShoppingBag, HiMiniBars3 } from "react-icons/hi2";
import "../styles/Header.scss";
import TabList from "./TabList";
import MobileTab from "./MobileTab";
import { NavLink, useLocation } from 'react-router-dom';

const Header = ({ isBridalPage }) => {
  const location = useLocation();
  const isBridalPage1 = location.pathname == "/bridal";

  const [searchOpen, setSearchOpen] = useState(false);
  const [tabsOpen, setTabsOpen] = useState(false); 

  const toggleMenu = () => {
    // setMenuOpen(!menuOpen);
    setTabsOpen(false);
  };

  const handleToggleMenu = () => {
    setTabsOpen(!tabsOpen); 
  };
  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <>
      <div 
      id="header" 
      className={`relative z-10 w-full pb-3 lg:pt-4 lg:pb-3 ${isBridalPage1 ? "bridal-header" : ""}`}>
        <div className="container d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-between pb-0">
          <nav className={`nav-tabs ${tabsOpen ? "open" : ""}`}> 
      
            <div className={`d-none d-lg-block ${tabsOpen ? 'show-tabs' : ''}`} id="tabs">
              <div className="header-tabs tab-set d-flex">
                <div className="tab menu-active" id="women-nav">
                <NavLink to="/women" className="">
                  WOMEN
                </NavLink>
                </div>
                <div className="tab menu-active" id="men-nav">
                <NavLink to="/men" className="nav-link">
                  MEN
                </NavLink>
                </div>
                <div className="tab menu-active" id="men-nav">
                <NavLink to="/kids" className="nav-link">
                  KIDS
                </NavLink>
                </div>
                <div className="tab menu-active" id="bridal-nav">
                <NavLink to="/bridal" className="">
                  BRIDAL
                </NavLink>
                </div>
                <div className="tab menu-active" id="luxe-nav">
                <NavLink to="/luxe" className="nav-link">
                  LUXE
                </NavLink>
                </div>
              </div>
            </div>

            {/* Mobile Menu Toggle (Hamburger Icon) */}
            <button className="menu-toggle d-lg-none" onClick={handleToggleMenu} aria-label="Toggle navigation menu">
              <HiMiniBars3 className="menu-icon" size={20}/>
            </button>
          </nav>

          {/* Header Logo */}
          {/* <div className={`order-2 w-auto header-logo ${isBridalPage ? "bridal-logo" : ""}`}> */}
          <div className={"order-2 w-auto header-logo"}>
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

          {/* Header Search and Icons */}
          <div className={"flex items-center justify-between order-2 md:w-2/5 max-w-prose"}>
            <div className="d-flex align-items-center">
              {/* Search Input */}
              <div className="lg:inline-block header-search-icon flex items-center">
                <div className="cursor-pointer head-search-12" onClick={handleSearchToggle}>
                  <div className="head-search-123">
                    <div className="head-search-1234">
                      Search for style, Collections & more
                      <IoSearch className="head-search-12345" color="#404040" />
                    </div>
                  </div>
                </div>
                {searchOpen && (
                  <div className="search-dropdown">
                    <input type="text" className="search-input" placeholder="Search..." />
                  </div>
                )}
              </div>
              

              {/* Header Icons */}
              <a className="header-video-shop" href="#" target="_blank">
                <CiVideoOn className="head-icon-12345" color="#404040"/>
              </a>
              <a className="header-video-shop" id="whatsapp-icon" href="#" target="_blank">
                <IoLogoWhatsapp className="head-icon-12345 head-icon-wp" color="#404040"/>
              </a>
              <a className="header-video-shop" href="#" target="_blank">
                <CgProfile className="head-icon-12345" color="#404040"/>
              </a>
              <a className="header-video-shop" href="#" target="_blank">
                <GoHeart className="head-icon-12345" color="#404040"/>
              </a>
              <a className="header-video-shop" href="#" target="_blank">
                <HiOutlineShoppingBag className="head-icon-12345" color="#404040"/>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <nav className={`mobile-menu ${tabsOpen ? "open" : ""}`}>
          <button className="close-menu" onClick={toggleMenu}>
            <RxCross1/>
          </button>
          {/* <ul className="menu-list">
              <div className="tab menu-active" id="women-nav">
                <NavLink to="/women" className="">
                  WOMEN
                </NavLink>
                </div>
                <div className="tab menu-active" id="men-nav">
                <NavLink to="/men" className="">
                  MEN
                </NavLink>
                </div>
                <div className="tab menu-active" id="men-nav">
                <NavLink to="/kids" className="">
                  KIDS
                </NavLink>
                </div>
                <div className="tab menu-active" id="bridal-nav">
                <NavLink to="/bridal" className="">
                  BRIDAL
                </NavLink>
                </div>
                <div className="tab menu-active" id="luxe-nav">
                <NavLink to="/luxe" className="">
                  LUXE
                </NavLink>
                </div>
          </ul> */}
          <div className="cta-section">
            <h2>Get Exclusive Insider Information.</h2>
            <button>Sign in/Sign Up</button>
            </div>
          <div className="categories">
            <div className="category-item">
              <img src="https://staticm247.kalkifashion.com/media/wysiwyg/250x350-womens-banner-5-12-24.jpg" alt="Women" />
              <span>Women</span>
            </div>
            <div className="category-item">
              <img src="https://staticm247.kalkifashion.com/media/wysiwyg/250x350-men-banner-5-12-24.jpg" alt="Men" />
              <span>Men</span>
            </div>
            <div className="category-item">
              <img src="https://staticm247.kalkifashion.com/media/wysiwyg/250x350-bridal-banner-5-12-24.jpg" alt="Bridal" />
              <span>Bridal</span>
            </div>
            <div className="category-item">
              <img src="https://staticm247.kalkifashion.com/media/wysiwyg/250x350-luxe-banner-5-12-24.jpg" alt="Luxe" />
              <span>Luxe</span>
            </div>
          </div>
        </nav>
      

       {/* Mobile Version Search Input */}
        <div className="header-search-small-screen">
          <div className="search-bar-container">
            <input type="text" placeholder="Search for style, Collections & more" />
            <button className="search-icon-btn">
              <IoSearch color="#404040" size={20}/>
            </button>
          </div>
        </div>

        </div>

        {/* Conditionally render TabList only for non-bridal pages */}
        {!isBridalPage && (
          <div className="tab-list-container">
            <TabList />
          </div>
        )}
        
      {/* <div className="tab-list-container">
        <TabList />
      </div> */}
      {/* <div className="mobile-tab-container">
        <MobileTab />
      </div> */}
    </>
  );
};

export default Header;

