// import React from 'react'
import '../css/colors.css'
import '../css/meet_team.css'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import Slick from 'slick-carousel';

const Meet_team = ({listings}) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    
    const renderItems = listings.map((item, index) => {
        
        const renderContent = item.content.map((paragraph, index) => {
            return (
                <p key={index}>{paragraph}</p>
            )
        })

        return (
            <div className="MeetTeam PageXContainer" key={index}>
                <div className="pic">
                    <img className="avatar" src={item.avatar} alt="" />
                </div>
                <div className='text'>
                    <div className="top_title">
                        <h1 style={{borderRight:"3px solid #000", paddingRight:"10px", marginRight:"10px"}}>{item.title}</h1>
                        <h1>{item.name}</h1>
                    </div>
                    <h3>{item.university}</h3>
                    {renderContent}
                </div>
            </div>
        )
        
    })

    const renderMobileContent = listings.map((item, index) =>{
        const renderContent = item.content.map((paragraph, index) => {
            return (
                <p key={index}>{paragraph}</p>
            )
        })

        return (
            <div className="mobile_MeetTeam" key={index}>
                <div className="pic">
                    <img className="avatar" src={item.avatar} alt="" />
                </div>
                {/* <div className='text'>
                    <div className="top_title">
                        <h1 style={{borderRight:"3px solid #000", paddingRight:"10px", marginRight:"10px"}}>{item.title}</h1>
                        <h1>{item.name}</h1>
                    </div>
                    <h3>{item.university}</h3>
                    {renderContent}
                </div> */}
            </div>
        )
    })

    return (
        <div>
            <div className='topic'>Meet the team</div>
            <div className='desktopTeam'>
                {renderItems}
            </div>

            <div className='mobileTeam'>
                <Slider {...settings}>
                    {renderMobileContent}

                </Slider>
            </div>

        </div>
    )
}

Meet_team.propTypes = {
    listings: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            title: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            university: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            content: PropTypes.array.isRequired,
        })
    ).isRequired,
}

export default Meet_team