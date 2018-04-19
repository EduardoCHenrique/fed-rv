import React from 'react'
import classNames from 'classnames'

import './Header.scss'

const Header = ({className, ...rest}) => {
  const classes = classNames('header', className)
  return (
    <header className={classes}>
      <ul className='header__menu'>
        <li className='header__menu__item'>The Queen City</li>
        <li className='header__menu__item'>My Reservations</li>
        <li className='header__menu__item'>Guide</li>
      </ul>
    </header>
  )
}

export default Header
