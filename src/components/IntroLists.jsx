// import React from 'react'
import '../css/content.css'
import '../index.css'
import '../css/intro.css'
import PropTypes from 'prop-types'

const IntroLists = ( {listings} ) => {

  const renderItems = listings.map((item, index) => {
  
    const renderParagraph = item.content.map((paragraph, index) => {
      return( 
        <p className="mg-b-10" key={index}>{paragraph}</p>
      )
    })

    return (
      <div key={index} className="intro PageXContainer" id={item.id}>
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "600",
            borderBottom: "1px solid rgb(161, 161, 161)",
            marginBottom: "20px",
            paddingBottom: "12px"
          }}
        >
          {item.topic}
        </h1>
        {renderParagraph}
      </div>
    )
  });


  return (
    <>
      {renderItems}
    </>
  )

}


IntroLists.propTypes = {
  listings: PropTypes.arrayOf(
      PropTypes.shape({
          id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
          // id: PropTypes.number.isRequired,
          topic: PropTypes.string.isRequired,
          content: PropTypes.array.isRequired,
          // content: PropTypes.object.isRequired
      })
  ).isRequired,
}

export default IntroLists