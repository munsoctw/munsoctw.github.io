// import React from 'react'
import '../css/content.css'
import '../index.css'
import PropTypes from 'prop-types'

const IntroLists = ( {listings} ) => {

  const renderItems = listings.map((item, index) => {
  
    const renderParagraph = item.content.map((paragraph, index) => {
      return( 
        <p
          key={index}
          className="mg-b-10"
          style={{
            fontSize: "16px",
            lineHeight: "1.5",
            marginBottom: "1em"
          }}
        >
          {paragraph}
        </p>
      )
    })

    return (
      <div
        key={index}
        className="PageXContainer"
        style={{marginBottom:"100px", color:"var(--white-0)"}}
        id={item.id}
      >
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