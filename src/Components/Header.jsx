import React, { useState } from "react";
import { IoSearch, IoLogoWhatsapp } from "react-icons/io5";
import { CiVideoOn } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { GoHeart } from "react-icons/go";
import { HiOutlineShoppingBag, HiMiniBars3 } from "react-icons/hi2";
import "../styles/Header.scss";
import TabList from "./TabList";

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [tabsOpen, setTabsOpen] = useState(false); 

  const toggleMenu = () => {
    // setMenuOpen(!menuOpen);
    setTabsOpen(false);
  };

  const handleToggleMenu = () => {
    setTabsOpen(!tabsOpen); 
  };

  // const [searchSuggestions, setSearchSuggestions] = useState([
  //   "Sarees",
  //   "Lehengas",
  //   "Kurtas",
  //   "Jewelry",
  //   "Accessories",
  // ]); // Example suggestions

  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <>
      <div id="header" className="relative z-10 w-full pb-3 lg:pt-4 lg:pb-3">
        <div className="container d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-between pb-0">
          <nav className={`nav-tabs ${tabsOpen ? "open" : ""}`}> {/* Added conditional class for visibility */}
            {/* Main Navbar Tabs */}
            <div className={`d-none d-lg-block ${tabsOpen ? 'show-tabs' : ''}`} id="tabs"> {/* Tabs visibility based on `tabsOpen` */}
              <div className="header-tabs tab-set d-flex">
                <div className="tab menu-active" id="women-nav">
                  <a href="#">WOMEN</a>
                </div>
                <div className="tab menu-active" id="men-nav">
                  <a href="#">MEN</a>
                </div>
                <div className="tab menu-active" id="kids-nav">
                  <a href="#">KIDS</a>
                </div>
                <div className="tab menu-active" id="bridal-nav">
                  <a href="#">BRIDAL</a>
                </div>
                <div className="tab menu-active" id="luxe-nav">
                  <a href="#">LUXE</a>
                </div>
              </div>
            </div>

            {/* Mobile Menu Toggle (Hamburger Icon) */}
            <button className="menu-toggle d-lg-none" onClick={handleToggleMenu} aria-label="Toggle navigation menu">
              <HiMiniBars3 className="menu-icon" size={20}/>
            </button>
          </nav>

          {/* Header Logo */}
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

          {/* Header Search and Icons */}
          <div className="flex items-center justify-between order-2 md:w-2/5 max-w-prose">
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
          {/* Search */}
        {/* <div className="header-search relative">
          <div
            className="search-toggle flex items-center cursor-pointer"
            onClick={handleSearchToggle}
          >
            <IoSearch size={20} />
            <span className="ml-2 text-sm">Search for styles, collections & more</span>
          </div>

          {searchOpen && (
            <div
              className={`search-dropdown lg:absolute lg:top-0 lg:left-0 lg:w-full lg:z-10 lg:bg-white lg:p-4`}
            >
              <div className="lg:max-w-[1060px] mx-auto">
                <form className="search-form flex items-center w-full">
                  <input
                    type="text"
                    className="search-input w-full bg-gray-100 p-2 rounded-lg"
                    placeholder="Search for Styles, Collections & more"
                  />
                </form>

                <div className="search-suggestions mt-2">
                  {searchSuggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="suggestion-item p-2 bg-gray-50 border-b cursor-pointer hover:bg-gray-100"
                    >
                      {suggestion}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div> */}
        </div>
        {/* Mobile Menu */}
        <nav className={`mobile-menu ${tabsOpen ? "open" : ""}`}>
          <button className="close-menu" onClick={toggleMenu}>
            ✖
          </button>
          <ul className="menu-list">
            <li><a href="#">Women</a></li>
            <li><a href="#">Men</a></li>
            <li><a href="#">Kids</a></li>
            <li><a href="#">Bridal</a></li>
            <li><a href="#">Luxe</a></li>
          </ul>
        </nav>
      </div>

       {/* Mobile Version Search Input */}
        <div className="header-search-small-screen">
          <div className="search-bar-container">
            <input type="text" placeholder="Search for style, Collections & more" />
            <button className="search-icon-btn">
              <IoSearch color="#404040" size={20}/>
            </button>
          </div>
        </div>
      {/* Mega Menu (Tab content for mobile) */}
      {/* <div className={`tabContent-list py-1 px-4 border shadow-xm p-0 mb-3 ${tabsOpen ? 'show' : ''}`}>
        <div className="tabContent d-flex flex-wrap justify-content-start gap-0">
    
          <div className="mega-tab-menu py-2 px-0 bg-white text-dark text-center">
            <a href="#">BESTSELLER</a>
          </div>
          <div className="mega-tab-menu py-2 px-1 bg-white text-dark text-center">
            <a href="#">SAREE</a>
          </div>
          <div className="mega-tab-menu py-2 px-1 bg-white text-dark text-center">
            <a href="#">SALWAR KAMEEZ</a>
          </div>
          <div className="mega-tab-menu py-2 px-1 bg-white text-dark text-center">
            <a href="#">LEHENGAS</a>
          </div>
          <div className="mega-tab-menu py-2 px-1 bg-white text-dark text-center">
            <a href="#">INDO WESTERN</a>
          </div>
          <div className="mega-tab-menu py-2 px-1 bg-white text-dark text-center">
            <a href="#">BLOUSE</a>
          </div>
          <div className="mega-tab-menu my-2 px-1 bg-black text-white text-center">
            <a href="#">MEN</a>
          </div>
          <div className="mega-tab-menu py-2 px-1 bg-white text-dark text-center">
            <a href="#">BRIDAL</a>
          </div>
          <div className="mega-tab-menu my-2 px-1 bg-white text-dark text-center">
            <a href="#">MEHENDI</a>
          </div>
          <div className="mega-tab-menu my-2 px-1 bg-white text-dark text-center">
            <a href="#">SANGEET</a>
          </div>
          <div className="mega-tab-menu my-2 px-1 bg-white text-dark text-center">
            <a href="#">WEDDING</a>
          </div>
          <div className="mega-tab-menu py-2 px-1 bg-white text-dark text-center">
            <a href="#">READY TO SHIP</a>
          </div>
          <div className="mega-tab-menu py-2 px-1 bg-white text-dark text-center">
            <a href="#">COLLECTION</a>
          </div>
          <div className="mega-tab-menu py-2 px-1 bg-white text-dark text-center">
            <a href="#">NEW</a>
          </div>
          <div className="mega-tab-menu py-2 px-1 bg-white text-dark text-center">
            <a href="#">SELL</a>
          </div>
        </div>
      </div> */}
      <TabList />
      
    </>
  );
};

export default Header;













// import React, { useState } from "react";
// import { IoSearch, IoLogoWhatsapp } from "react-icons/io5";
// import { CiVideoOn } from "react-icons/ci";
// import { CgProfile } from "react-icons/cg";
// import { GoHeart } from "react-icons/go";
// import { HiOutlineShoppingBag, HiMiniBars3 } from "react-icons/hi2";
// import "../styles/Header.scss";

// const HeaderTabs = ({ tabsOpen }) => (
//   <div className={`header-tabs d-flex ${tabsOpen ? "show-tabs" : ""}`}>
//     {["WOMEN", "MEN", "KIDS", "BRIDAL", "LUXE"].map((tab, index) => (
//       <div className="tab menu-active" key={index}>
//         <a href="#">{tab}</a>
//       </div>
//     ))}
//   </div>
// );

// const HeaderIcons = ({ handleSearchToggle, searchOpen }) => (
//   <div className="d-flex align-items-center">
//     <div className="lg:inline-block header-search-icon flex items-center">
//       <div className="cursor-pointer head-search-12" onClick={handleSearchToggle}>
//         <div className="head-search-123">
//           <div className="head-search-1234">
//             Search for style, Collections & more
//             <IoSearch className="head-search-12345" color="#404040" />
//           </div>
//         </div>
//       </div>
//       {searchOpen && (
//         <div className="search-dropdown">
//           <input type="text" className="search-input" placeholder="Search..." />
//         </div>
//       )}
//     </div>
//     {[CiVideoOn, IoLogoWhatsapp, CgProfile, GoHeart, HiOutlineShoppingBag].map((Icon, index) => (
//       <a className="header-video-shop" href="#" key={index} target="_blank" rel="noopener noreferrer">
//         <Icon className="head-icon-12345" color="#404040" />
//       </a>
//     ))}
//   </div>
// );

// const MobileMenu = ({ tabsOpen, toggleMenu }) => (
//   <nav className={`mobile-menu ${tabsOpen ? "open" : ""}`}>
//     <button className="close-menu" onClick={toggleMenu}>
//       ✖
//     </button>
//     <ul className="menu-list">
//       {["Women", "Men", "Kids", "Bridal", "Luxe"].map((item, index) => (
//         <li key={index}>
//           <a href="#">{item}</a>
//         </li>
//       ))}
//     </ul>
//   </nav>
// );

// const MegaMenu = ({ tabsOpen }) => (
//   <div className={`tabContent-list py-1 px-4 border shadow-xm p-0 mb-3 ${tabsOpen ? "show" : ""}`}>
//     <div className="tabContent d-flex flex-wrap justify-content-start gap-0">
//       {["BESTSELLER", "SAREE", "SALWAR KAMEEZ", "LEHENGAS", "INDO WESTERN", "BLOUSE"].map((item, index) => (
//         <div className="mega-tab-menu py-2 px-1 bg-white text-dark text-center" key={index}>
//           <a href="#">{item}</a>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// const Header = () => {
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [tabsOpen, setTabsOpen] = useState(false);

//   const toggleMenu = () => setTabsOpen(false);
//   const handleToggleMenu = () => setTabsOpen(!tabsOpen);
//   const handleSearchToggle = () => setSearchOpen(!searchOpen);

//   return (
//     <header id="header" className="relative z-10 w-full pb-3 lg:pt-4 lg:pb-3">
//       <div className="container d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-between pb-0">
//         <nav className="nav-tabs">
//           <HeaderTabs tabsOpen={tabsOpen} />
//           <button
//             className="menu-toggle d-lg-none"
//             onClick={handleToggleMenu}
//             aria-label="Toggle navigation menu"
//           >
//             <HiMiniBars3 className="menu-icon" size={20} />
//           </button>
//         </nav>

//         <div className="order-2 w-auto header-logo">
//           <a
//             href="/"
//             className="d-flex align-items-center justify-content-center text-xl font-medium tracking-wide no-underline hover:no-underline"
//             title="Store Logo"
//             aria-label="store logo"
//           >
//             <img
//               src="https://www.kalkifashion.com/static/version1733131259/frontend/Aureatelabs/kalki/en_US/images/logo.svg"
//               title="Logo"
//               alt="Logo"
//               width="180"
//               height="54"
//               className="w-auto max-h-8 md:max-h-11 lg:max-h-full"
//             />
//           </a>
//         </div>

//         <div className="flex items-center justify-between order-2 md:w-2/5 max-w-prose">
//           <HeaderIcons handleSearchToggle={handleSearchToggle} searchOpen={searchOpen} />
//         </div>
//       </div>

//       <MobileMenu tabsOpen={tabsOpen} toggleMenu={toggleMenu} />
//       <MegaMenu tabsOpen={tabsOpen} />

//       <div className="header-search-small-screen">
//         <div className="search-bar-container">
//           <input type="text" placeholder="Search for style, Collections & more" />
//           <button className="search-icon-btn">
//             <IoSearch color="#404040" size={20} />
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

