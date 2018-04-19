import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Hero.scss'

const Hero = ({className, children, ...rest}) => {
  const classes = classNames('hero', className)
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}

Hero.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default Hero
