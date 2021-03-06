import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// import './Icon.scss'

const Icon = (props) => {
  const { name, className, ...rest } = props

  try {
    require(`../../../assets/svgs/${name}.svg`)
    return (
      <svg className={classNames('icon__svg', className)} {...rest}>
        <use xlinkHref={`#${name}`} />
      </svg>
    )
  } catch (e) {
    return null
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default Icon
