import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Icon from 'components/base/Icon'
import './StarsRate.scss'

const Star = ({index, active, handleClick}) => {
  const name = active ? 'star-filled' : 'star-outline'
  return <Icon className='stars-rate__star' name={name} onClick={handleClick} />
}

const renderStars = ({maxRate, activeLength, handleClick, onRate}) => {
  let i = 1
  let stars = []

  while (i <= maxRate) {
    stars.push(
      <Star
        key={i}
        index={i}
        active={i <= activeLength}
        handleClick={onRate} />
    )
    i++
  }

  return stars
}

const StarsRate = (props) => {
  const classes = classNames('stars-rate', props.className)
  return (
    <div className={classes}>
      {renderStars(props)}
    </div>
  )
}

StarsRate.propTypes = {
  className: PropTypes.string,
  maxRate: PropTypes.number,
  activeLength: PropTypes.number,
  onRate: PropTypes.func
}

StarsRate.defaultProps = {
  maxRate: 5,
  activeLength: 3
}

export default StarsRate
