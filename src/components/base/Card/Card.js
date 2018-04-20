import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Card.scss'

const Card = ({className, children, ...rest}) => {
  const classes = classNames('card', className)
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default Card
