// import React from 'react'
import mstIcon from '../data/src.json'
import menuItems from '../data/menuItem.json'
import { Link } from 'react-router-dom'
import '../css/footer.css'
import mediaItem from '../data/media.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareBehance, faSquareFacebook, faSquareInstagram } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {

    const iconMapping = {
        faSquareInstagram: faSquareInstagram,
        faSquareFacebook: faSquareFacebook,
        faSquareBehance: faSquareBehance
    }

    const listRender = menuItems.map((menu, index) => {
        const subRender = menu.sub.map((sub, subIndex) => {
            return(
                <li
                    key={subIndex}
                    style={{color:"var(--white-0)", marginBottom:"8px", fontSize:"14px"}}
                >
                    <Link to={`/${menu.id}/#${sub.id}`}>{sub.menu}</Link>
                </li>
            )
        })

        return(
            <div key={index} className='mg-r-30'>
                <h3 style={{color:"var(--white-0)"}} className='mg-b-20'>{menu.menu}</h3>
                <ul className='df fd-c'>
                    {subRender}
                </ul>
            </div>
        )

    })

    const mediaRender = mediaItem.map((media, index) => {
        return(
            <Link to={`${media.url}`} key={index} className='mg-r-20'>
                <FontAwesomeIcon 
                    icon={iconMapping[media.icon]}
                    color='#ffffff'
                    style={{fontSize:"26px"}}
                />
            </Link>
        )
    })


    return (
        <footer className="phoneFooter componentContainer">

            <div className="df">
                <ul className="df">
                    <div className='df'>
                        {listRender}
                    </div>
                </ul>
                <ul className="pd-t-10">
                    <a href=""><li>Tel:  +886 972-859-487</li></a>
                    <a href=""><li>Mail:  taipei@worldmun.org</li></a>
                </ul>
                {mediaRender}
            </div>

            <div className="bottomContext">
                <p className='copyright'>Copyright &copy; 2024 MUN Society Taiwan All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer