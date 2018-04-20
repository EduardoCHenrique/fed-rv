import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import StarsRate from 'components/base/StarsRate'

const MAX_RATE = 5

function renderStarsRate () {
  let i = 1
  let starsRate = []
  while (i <= MAX_RATE) {
    starsRate.push(
      <li className='stars-filter__list__item' key={i}>
        <StarsRate maxRate={MAX_RATE} activeLength={i} className='stars-filter__list__star-rate' />
      </li>
    )
    i++
  }
  console.log('starsRate', starsRate)
  return starsRate
}

const StarsFilter = ({className, maxs}) => {
  const classes = classNames('stars-filter', className)
  return (
    <div className={classes}>
      <h5 className='stars-filter__title'>Stars</h5>
      <ul className='stars-filter__list'>
        {renderStarsRate()}
      </ul>
    </div>
  )
}

StarsFilter.propTypes = {
  className: PropTypes.string
}
export default StarsFilter
