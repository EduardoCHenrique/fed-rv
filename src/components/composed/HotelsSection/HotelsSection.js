import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import HotelsList from 'components/composed/HotelsList'
import Range from 'components/base/Range'
import Button from 'components/base/Button'
import StarsFilter from 'components/composed/StarsFilter'

import './HotelsSection.scss'

const HotelsSection = ({className, hotels, onChangeRangeFilter, onChangeStarsFilter, onApplyFilters, ...rest}) => {
  const classes = classNames('hotels-section', className)
  return hotels.length && (
    <section className={classes}>
      <aside className='hotels__filter'>
        <Range onChange={onChangeRangeFilter} />
        <StarsFilter handleSelect={onChangeStarsFilter} />
        <Button onClick={onApplyFilters} type='button'>Apply</Button>
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
