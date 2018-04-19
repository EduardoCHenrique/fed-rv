import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Button.scss'

export const SIZES = {
  SMALL: 'small',
  NORMAL: 'normal'
}

export const SORT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
}

const Button = ({className, children, size, sort, ...rest}) => {
  const classes = classNames(`button button--${size} button--${sort}`, {[className]: className})

  return (
    <button className={classes} {...rest}>
      {children && children}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf([SIZES.SMALL, SIZES.NORMAL]),
  sort: PropTypes.oneOf([SORT.PRIMARY, SORT.SECONDARY])
}

Button.defaultProps = {
  size: SIZES.NORMAL,
  sort: SORT.PRIMARY
}

export default Button
