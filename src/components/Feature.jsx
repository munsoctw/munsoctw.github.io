// import React from 'react'
import PropTypes from 'prop-types'
import '../css/feature.css'

const Feature = ( {listings} ) => {
  return (

    <div className='feature'>
        {listings.map((item, index) => (
            <div className="item" key={index} style={{backgroundImage:`url(${item.img})`}}>
                <h1>{item.title}</h1>
            </div>

        ))}

    </div>
  )
}

Feature.propTypes = {
  listings: PropTypes.arrayOf(
      PropTypes.shape({
          id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
          title: PropTypes.string.isRequired,
      })
  ).isRequired,
}

export default Feature