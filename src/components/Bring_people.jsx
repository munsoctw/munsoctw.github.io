// import React from 'react'
import PropTypes from 'prop-types'

const Bring_people = ({ listings }) => {
    return(
        <div className="container PageXContainer">
            {listings.map((item, index) => (
                <div key={index}>
                    <h1 className="topic_light">{item.topic}</h1>
                    <h2 className="sub_topic_light">{item.sub_topic}</h2>
                    <p className="content_light">{item.content}</p>
                </div>
            ))}
        </div>
    )
}

Bring_people.propTypes = {
    listings: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            topic: PropTypes.string.isRequired,
            sub_topic: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
        })
    ).isRequired,
}

export default Bring_people