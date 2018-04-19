import React from 'react'
import InfiniteCalendar, {withRange, Calendar} from 'react-infinite-calendar'
import Hero from 'components/base/Hero'
import Icon from 'components/base/Icon'
import Header from 'components/composed/Header'
import Footer from 'components/composed/Footer'
import HomeLettering from 'components/composed/HomeLettering'

import 'react-infinite-calendar/styles.css'

import './Home.scss'

const theme = {
  accentColor: '#448AFF',
  floatingNav: {
    background: 'rgba(56, 87, 138, 0.94)',
    chevron: '#FFA726',
    color: '#FFF'
  },
  headerColor: '#448AFF',
  selectionColor: '#559FFF',
  textColor: {
    active: '#FFF',
    default: '#333',
  },
  todayColor: '#FFA726',
  weekdayColor: '#559FFF'
};

function handleSelectDate(a,b,c) {
  console.log('a,b,c', a,b,c)
}

const Home = () => {
  return (
    <main className='home'>
      <Hero>
        <Header />
        <HomeLettering />
      </Hero>
      <section className='home__section'>
        <div className='home__check-in-section'>
          <div>
            <p>Check in</p>
          </div>
          <div>
            <p>Check out</p>
          </div>
        </div>
        <div className='home__calendar-section'>
          <InfiniteCalendar
            theme={theme}
            Component={withRange(Calendar)}
            width={300}
            height={350}
            selected={{
              start: new Date(2018, 4, 20),
              end: new Date(2018, 5, 5)
            }} />
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default Home
