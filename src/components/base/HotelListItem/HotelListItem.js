import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Button, {SIZES, SORT} from 'components/base/Button'
import Card from 'components/base/Card'
import './HotelListItem.scss'

const HotelListItem = ({className, image, name, description}) => {
  const classes = classNames('hotel', className)

  return (
    <div className={classes}>
      <Card className='hotel__card'>
        <figure className='hotel__image__wrapper'>
          <img src={image} className='hotel__image' />
        </figure>
        <div className='hotel__main__data'>
          <div className='hotel__rating'>rate</div>
          <div className='hotel__name'>{name}</div>
          <div className='hotel__description'>{description}</div>
          <div className='hotel__actions'>
            <Button className='hotel__action' size={SIZES.SMALL} sort={SORT.PRIMARY} >Book now</Button>
            <Button className='hotel__action' size={SIZES.SMALL} sort={SORT.SECONDARY}>Price History</Button>
          </div>
        </div>
        <div>
          <p>Total 8 nights</p>
          <p className='hotel__full-price'>$670</p>
          <span>Per night</span>
          <span>$670</span>
        </div>
      </Card>
    </div>
  )
}

HotelListItem.propTypes = {
  className: PropTypes.string
}

export default HotelListItem
