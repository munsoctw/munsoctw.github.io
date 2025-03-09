// import React from 'react'
// import MediaIcon from '../data/icon.json';
import menuItem from '../data/menuItem.json'
import mstIcon from '../data/src.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareInstagram, faSquareFacebook, faSquareBehance } from '@fortawesome/free-brands-svg-icons';
import { Link, NavLink } from 'react-router-dom'


const Header = () => {

  const getOpacity_status = () => {
    switch (location.pathname) {
      case '/MUN-Society-Taiwan/' :
        return "0"
      default: return "1"
    }
  }

  const menuRender = menuItem.map((menu, index) => {
    return(
      <div>Header
      </div>
    )
  })


  return (

    <>
    {/*  Desktop version header */}
      <header className="desktopHeader" style={{opacity: getOpacity_status()}}>

        <div className='df'>
          {/* Logo Container */}
          <div className="logo_container">
            <Link to="MUN-Society-Taiwan/">
              <img className="logo" src={mstIcon.logo_icon} alt="MST Logo" />
            </Link>
          </div>

          {/* Header Navigation */}
          

        </div>


        {/* Social Media Link Icon */}
        <ul className="social_media">
          <a href="https://www.instagram.com/munsoc.tw?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank'>
            <FontAwesomeIcon 
            icon={faSquareInstagram}
            // size={20}
            color='#ffffff'
            className='media_icon'
            />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61555679222438" target='_blank'>
            <FontAwesomeIcon 
            icon={faSquareFacebook}
            // size={20}
            color='#ffffff'
            className='media_icon'
            />
          </a>
          <a href="">
            <FontAwesomeIcon 
            icon={faSquareBehance}
            // size={20}
            color='#ffffff'
            className='media_icon'
            />
          </a>
        </ul>
      </header>

    {/*  Cellphone version header */}
      <div className="HeaderLogo">
        <img src={mstIcon.logo_icon} alt="" />
      </div>

      <header className="phoneHeader" style={{opacity: getOpacity_status()}}>

        <nav>
          <ul>
            <li>
              <NavLink className="navLink" to="MUN-Society-Taiwan/about">About</NavLink>
            </li>
            <li>
              <NavLink className="navLink" to="MUN-Society-Taiwan/events">Events</NavLink>
            </li>
            <li>
              <NavLink className="navLink" to="MUN-Society-Taiwan/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>

      </header>

    </>

    
  )
}

export default Header