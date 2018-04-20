import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import HotelsList from 'components/composed/HotelsList'

import './HotelsSection.scss'

const HotelsSection = ({className, hotels, ...rest}) => {
  console.log('HotelsSection', hotels.length);
  
  const classes = classNames('hotels-section', className)
  return hotels.length && (
    <section className={classes}>
      <HotelsList hotels={hotels} />
    </section>
  )
}

HotelsSection.propTypes = {
  className: PropTypes.string,
  hotels: PropTypes.array
}

HotelsSection.defaultProps = {
  hotels: []
}

export default HotelsSection
