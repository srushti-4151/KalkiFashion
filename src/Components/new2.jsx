import React, { useState } from "react";
import { IoSearch, IoLogoWhatsapp } from "react-icons/io5";
import { CiVideoOn } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { GoHeart } from "react-icons/go";
import { HiOutlineShoppingBag, HiMiniBars3 } from "react-icons/hi2";
import "../styles/Header.scss";

const Header2 = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="header">

        <div className="header-container">
          {/* Navigation Tabs */}
          <nav className={`nav-tabs ${menuOpen ? "open" : ""}`}>
            <a href="#">Women</a>
            <a href="#">Men</a>
            <a href="#">Kids</a>
            <a href="#">Bridal</a>
            <a href="#">Luxe</a>
          </nav>

         {/* Logo */}
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
          
          {/* Header Icons */}
          <div className="header-icons">
            <IoSearch
              className="svg-icon"
              onClick={() => setSearchOpen(!searchOpen)}
            />
            <CiVideoOn className="svg-icon" />
            <IoLogoWhatsapp className="svg-icon" />
            <CgProfile className="svg-icon" />
            <GoHeart className="svg-icon" />
            <HiOutlineShoppingBag className="svg-icon" />
          </div>


          {/* Mobile Menu Toggle */}
          <button
            className="menu-toggle d-lg-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <HiMiniBars3 className="menu-icon" />
          </button> 
        </div>


        {/* Search Bar */}
        {searchOpen && (
          <div className="search-bar">
            <input
              type="text"
              className="search-input"
              placeholder="Search for styles, collections, and more..."
            />
          </div>
        )}

      
        {/* Mega Tab Content */}
        <div className="tabContent-list">
          <div className="tabContent">
            {[
              "BESTSELLER",
              "SAREE",
              "SALWAR KAMEEZ",
              "LEHENGAS",
              "INDO WESTERN",
              "BLOUSE",
              "MEN",
              "BRIDAL",
              "MEHENDI",
              "SANGEET",
              "WEDDING",
            ].map((item) => (
              <div className="mega-tab-menu" key={item}>
                <a href="#">{item}</a>
              </div>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header2;

