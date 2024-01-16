import Link from 'next/link'
import React, { useState, useEffect } from 'react'
// import FaCartShopping from 'react-icons/fa';
import { AiFillShopping } from 'react-icons/ai'
import {FiMenu} from 'react-icons/fi'
const Navbar = () => {

  const [showMe, setShowMe] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMenuOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  function toggleNav(){
    setShowMe(!showMe);
    setIsActive(!isActive);
  }

  const changeBackground = () => {
    if (window.scrollY >= 40) {
      setNavbar(true);

    } else {
      setNavbar(false);

    }
  }; 

  useEffect(() => {
    window.addEventListener('scroll', changeBackground, true);
    return () => window.removeEventListener('scroll', changeBackground);
  }, []);
  return (
            <nav className={navbar ? 'navbar scroll' : 'navbar'} id="navbar">

        {/* <Link href='/'><img src='/danger-fit-logo-transparent.png' className='nav-logo'></img></Link> */}
        <Link href='/' className='nav-brand-link'><img src='/logo.png' className='nav-logo'></img><h1 className='nav-logo-brand'></h1></Link>

        <ul className='nav-menu'>
            <Link href='/'><li className='nav-link'>Home</li></Link>
            {/* <Link href='/apparel'><li className='nav-link'>Apparel</li></Link> */}
            <Link href='/team-danger'><li className='nav-link'>Team Danger</li></Link>
            {/* <Link href='/affiliate'><li className='nav-link'>Affiliate Program</li></Link> */}
            <Link href='/battlegrip'><li className='nav-link'>Shop</li></Link>
            <Link href='https://danger-fit.myshopify.com/'><li className='nav-link'>Apparel</li></Link>

            {/* <li className='nav-link shopping-nav-link'><AiFillShopping className='shopping-cart'/> <div className='cart-qty'>0</div></li> */}
        </ul>

        <div className='hamburger-btn' onClick={toggleMenu}>
                <FiMenu className='hamburger-menu-icon' />
              </div>

              {/* Mobile navigation menu */}
          
              <div className={isMenuOpen ? "mobile-nav" : "mobile-nav-not-visible"}>
                <ul className='mobile-nav-list'>
                    <Link href='/'><li className='mobile-nav-link dropdown' onClick={toggleMenu}>Home</li></Link>
                    <Link href='/team-danger'><li className='mobile-nav-link dropdown' onClick={closeMenu}>Team Danger</li></Link>
                    <Link href='/battlebar'><li className='mobile-nav-link dropdown' onClick={toggleMenu}>Shop</li></Link>
                    <Link href='https://75536e-2.myshopify.com/'><li className='mobile-nav-link dropdown' onClick={toggleMenu}>Apparel</li></Link>
                </ul>
            </div>
            
    </nav>
  )
}

export default Navbar

{/* <Link href='/affiliate'><li className='mobile-nav-link dropdown' onClick={closeMenu}>Affiliates</li></Link> */}
