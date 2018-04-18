import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// import './Icon.scss'

const Icon = (props) => {
  const { name, className, ...rest } = props

  try {
    require(`../../../assets/svgs/${name}.svg`)
    return (
      <i className={classNames('icon', className)} {...rest}>
        <svg className='icon__svg'>
          <use xlinkHref={`#${name}`} />
        </svg>
      </i>
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
