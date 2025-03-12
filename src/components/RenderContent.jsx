// import React from 'react'
import PropTypes from 'prop-types'

const RenderContent = ({ listings }) => {
    return (
        <div className="darkBg container">
            {listings.map((item, index) => (
                <section key={index} style={{marginBottom:"150px"}}>
                    <h1 className="topic darkBg">{item.topic}</h1>
                    {item.content.map((paragraph, index) => (
                        <p
                            key={index}
                            className="content_P PageXContainer">
                            {paragraph}
                        </p>
                    ))}
                </section>
                
            ))}
        </div>
    );
};

RenderContent.propTypes = {
    listings: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            topic: PropTypes.string.isRequired,
            // content: PropTypes.string.isRequired,
            content: PropTypes.array.isRequired
        })
    ).isRequired,
}

export default RenderContent