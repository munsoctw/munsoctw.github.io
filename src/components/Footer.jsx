// import React from 'react'
import mstIcon from '../data/src.json'
import { Link, NavLink } from 'react-router-dom'
import '../css/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareBehance, faSquareFacebook, faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import { HashLink } from 'react-router-hash-link';


const Footer = () => {
  return (
    <>
    
        {/* <footer className="container">
            <div className="footer_top">
                <div className="footer_pic">
                    <Link to="/MUN-Society-Taiwan/">
                        <img src={mstIcon.logo_icon_footer} alt="" />
                    </Link>
                </div>
            </div>
        </footer> */}

        <footer className="phoneFooter componentContainer">

            <div className="contact_text">
                <ul className="footer_nav">
                    <div className='item'>
                        <li><NavLink to="/MUN-Society-Taiwan/about" style={{color:"#ffffff"}}>About Us</NavLink></li>
                        <li><NavLink to="/MUN-Society-Taiwan/about#WhatIsMUN" style={{color:"#ffffff"}}>What is MUN</NavLink></li>
                        {/* <li><HashLink smooth to="/MUN-Society-Taiwan/about#WhatIsMUN" style={{color:"#ffffff"}}>What is MUN</HashLink></li> */}
                        <li><NavLink to="/MUN-Society-Taiwan/about#WhatWeDo" style={{color:"#ffffff"}}>What We Do</NavLink></li>
                        <li><NavLink to="/MUN-Society-Taiwan/about" style={{color:"#ffffff"}}>Our Mission</NavLink></li>
                        <li><NavLink to="/MUN-Society-Taiwan/about" style={{color:"#ffffff"}}>Meet the Team</NavLink></li>
                    </div>
                    <div className="item">
                        <li><NavLink to="/MUN-Society-Taiwan/events" style={{color:"#ffffff"}}>Events</NavLink></li>
                        <li><NavLink to="/MUN-Society-Taiwan/events" style={{color:"#ffffff"}}>Our Organizing Experiences</NavLink></li>
                        <li><NavLink to="/MUN-Society-Taiwan/events" style={{color:"#ffffff"}}>Harvard World MUN 2023 Paris</NavLink></li>
                        <li><NavLink to="/MUN-Society-Taiwan/events" style={{color:"#ffffff"}}>Spring Mock Conference</NavLink></li>
                        <li><NavLink to="/MUN-Society-Taiwan/events" style={{color:"#ffffff"}}>Re_MUN UN Conference</NavLink></li>
                    </div>
                    <div className="item">
                        <li><NavLink to="/MUN-Society-Taiwan/contact" style={{color:"#ffffff"}}>Contact</NavLink></li>
                    </div>
                </ul>
                <ul className="detail">
                    <a href=""><li>Phone:  +886 972-859-487</li></a>
                    <a href=""><li>Email:  taipei@worldmun.org</li></a>
                </ul>
            </div>

            <div className="bottomContext">
                <p className='copyright'>Copyright &copy; 2024 MUN Society Taiwan All rights reserved</p>
                <ul className='info'>
                    <li><NavLink className="navLink" to="/">Terms of Use</NavLink></li>
                    <li><NavLink className="navLink" to="/">Privacy</NavLink></li>
                    <li><NavLink className="navLink" to="/">Cookie Preference</NavLink></li>
                </ul>
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
            </div>
        </footer>
    </>
  )
}

export default Footer