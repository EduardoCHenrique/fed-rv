import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import HotelsList from 'components/composed/HotelsList'
import Range from 'components/base/Range'
import StarsFilter from 'components/composed/StarsFilter'

import './HotelsSection.scss'

const HotelsSection = ({className, hotels, ...rest}) => {
  const classes = classNames('hotels-section', className)
  return hotels.length && (
    <section className={classes}>
      <aside className='hotels__filter'>
        <Range />
        <StarsFilter />
      </aside>
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
