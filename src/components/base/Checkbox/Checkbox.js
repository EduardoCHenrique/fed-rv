import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Icon from 'components/base/Icon'
import './Checkbox.scss'

const Checkbox = (props) => {
  const { className, iconName, handleClick, index, ...rest } = props
  const classes = classNames('checkbox', className)

  return (
    <div className={classes}>
      <input type='checkbox' className={classNames('checkbox__input', className)} onChange={() => props.handleClick(index)} {...rest} />
      <Icon name='check' className={classNames('checkbox__icon', className)} />
    </div>
  )
}

Checkbox.propTypes = {
  className: PropTypes.string,
  iconName: PropTypes.string
}

Checkbox.defaultProps = {
  iconName: 'check'
}

export default Checkbox
