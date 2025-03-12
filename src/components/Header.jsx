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
      case '/' :
        return "0"
      default: return "1"
    }
  }

  const menuRender = menuItem.map((menu, index) => {
    return(
      <li className='mg-r-40' key={index}>
        <Link to={`/${menu.id}`} style={{color:"#fff"}}>{menu.menu}</Link>
      </li>
    )
  })


  return (

    <>
    {/*  Desktop version header */}
      <header className="" style={{opacity: getOpacity_status()}}>

        <div className='df' style={{width:"75%", height:"100%"}}>
          {/* Logo Container */}
          <Link to="/" style={{height:"100%"}} className='mg-r-40'>
            <img className="logo" src={mstIcon.logo_icon} alt="MST Logo" style={{height:"100%"}}/>
          </Link>

          {/* Header Navigation */}
          <ul className='df aln-itm-c' style={{width:"80%"}}>
            {menuRender}
          </ul>

        </div>


        {/* Social Media Link Icon */}
        <ul className="social_media df jc-fe" style={{width:"10%"}}>
          <a href="https://www.instagram.com/munsoc.tw?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank'>
            <FontAwesomeIcon 
            icon={faSquareInstagram}
            // size={20}
            color='#ffffff'
            className='mg-r-20'
            style={{fontSize:"20"}}
            />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61555679222438" target='_blank'>
            <FontAwesomeIcon 
            icon={faSquareFacebook}
            // size={20}
            color='#ffffff'
            className='mg-r-20'
            style={{fontSize:"20"}}
            />
          </a>
          <a href="">
            <FontAwesomeIcon 
            icon={faSquareBehance}
            // size={20}
            color='#ffffff'
            className='mg-r-20'
            style={{fontSize:"20"}}
            />
          </a>
        </ul>
      </header>

    {/*  Cellphone version header */}
      {/* <div className="HeaderLogo">
        <img src={mstIcon.logo_icon} alt="" />
      </div>

      <header className="phoneHeader" style={{opacity: getOpacity_status()}}>

        <nav>
          <ul>
            <li>
              <NavLink className="navLink" to="/about">About</NavLink>
            </li>
            <li>
              <NavLink className="navLink" to="/events">Events</NavLink>
            </li>
            <li>
              <NavLink className="navLink" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>

      </header> */}

    </>

    
  )
}

export default Header