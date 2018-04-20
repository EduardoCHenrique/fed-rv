import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import InfiniteCalendar, {withRange, Calendar} from 'react-infinite-calendar'
import Hero from 'components/base/Hero'
import Button from 'components/base/Button'
import Header from 'components/composed/Header'
import Footer from 'components/composed/Footer'
import HomeLettering from 'components/composed/HomeLettering'
import HotelsSection from 'components/composed/HotelsSection'

import 'react-infinite-calendar/styles.css'
import './Home.scss'

const CalendarWithRange = withRange(Calendar)
const secondaryColor = `${window.getComputedStyle(document.documentElement).getPropertyValue('--secondary-color')}`
const textColor = `${window.getComputedStyle(document.documentElement).getPropertyValue('--light-text-color')}`
const calendarTheme = {
  accentColor: secondaryColor,
  floatingNav: {
    background: secondaryColor,
    chevron: '#FFF',
    color: secondaryColor
  },
  headerColor: secondaryColor,
  selectionColor: secondaryColor,
  textColor: {
    active: '#FFF',
    default: textColor
  },
  todayColor: secondaryColor,
  weekdayColor: secondaryColor
}

const Home = ({onChangeCheckin, checkInDate, checkOutDate, onSearchHotels, hotels}) => {
  return (
    <main className='home'>
      <Hero>
        <Header />
        <HomeLettering />
      </Hero>
      <section className='home__section'>
        <h3 className='home__calendar-section__title'>Select the dates to stay in Charlotte</h3>
        <div className='home__check-in__section'>
          <div className='home__check-in__date__wrapper'>
            <p className='home__check-in__date__title'>Check in</p>
            <span className='home__check-in__date'>{checkInDate.format('dddd, mm, Y')}</span>
          </div>
          <div className='home__check-in__date__wrapper'>
            <p className='home__check-in__date__title'>Check out</p>
            <span className='home__check-in__date'>{checkOutDate.format('dddd, mm, Y')}</span>
          </div>
          <Button className='home__check-in__searchInput' onClick={onSearchHotels}>Search hotels</Button>
        </div>
        <div className='home__calendar-section'>
          <InfiniteCalendar
            Component={CalendarWithRange}
            width={350}
            height={350}
            theme={calendarTheme}
            onSelect={onChangeCheckin}
            selected={{
              start: checkInDate,
              end: checkOutDate
            }}
            locale={{headerFormat: 'MMM Do'}}
          />
        </div>
      </section>
      <HotelsSection hotels={hotels} />
      <Footer />
    </main>
  )
}

Home.propTypes = {
  checkInDate: PropTypes.object,
  checkOutDate: PropTypes.object
}

export default Home
