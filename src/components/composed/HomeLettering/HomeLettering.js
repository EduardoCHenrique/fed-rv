import React from 'react'
import Icon from 'components/base/Icon'

import './HomeLettering.scss'

const HomeLettering = () => {
  return (
    <div className='home-lettering'>
      <header className='home-lettering__header' >
        <Icon name='crown' className='home-lettering__crow' />
        <p className='home-lettering__header-text'>WELCOME TO</p>
      </header>
      <h1 className='home-lettering__main-text'>Charlotte</h1>
      <p className='home-lettering__footer-text'>The Queen City</p>
    </div>
  )
}

export default HomeLettering
