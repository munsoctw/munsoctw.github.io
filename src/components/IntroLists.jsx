// import React from 'react'
import '../css/content.css'
import '../index.css'
import '../css/intro.css'
import PropTypes from 'prop-types'

const IntroLists = ( {listings} ) => {

  const renderItems = listings.map((item, index) => {
  
    const renderParagraph = item.content.map((paragraph, index) => {
      return( 
        <p className="paragraph PageXContainer" key={index}>{paragraph}</p>
      )
    })

    return (
      <div key={index} className="intro" id={item.id}>
        <h1 className="topic">{item.topic}</h1>
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