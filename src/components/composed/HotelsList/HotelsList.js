import React from 'react'
import classNames from 'classnames'
import HotelListItem from 'components/base/HotelListItem'

// import './HotelsList.scss'

const renderHotel = function (hotel, index) {
  return <HotelListItem {...hotel} key={index} />
}

const HotelsList = ({className, hotels, ...rest}) => {
  console.log('render do HotelsList');
  
  const classes = classNames('hotels-list__wrapper', className)
  return (
    <section className={classes}>
      <ul className='hotels-list'>
        {hotels.map(renderHotel)}
      </ul>
    </section>
  )
}

export default HotelsList
