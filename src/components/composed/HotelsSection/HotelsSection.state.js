import React, {Component} from 'react'
import PropTypes from 'prop-types'
import HotelsSection from './HotelsSection.js'
import { VALUES } from 'components/base/Range'

export default class HotelsSectionState extends Component {
  constructor (props) {
    super(props)
    this.onChangeRangeFilter = this.onChangeRangeFilter.bind(this)
    this.onChangeStarsFilter = this.onChangeStarsFilter.bind(this)
    this.onApplyFilters = this.onApplyFilters.bind(this)
    this.state = {
      stars: [],
      price: {
        min: VALUES.MIN,
        max: VALUES.MAX
      },
      hotels: props.hotels.payload
    }
  }

  componentWillReceiveProps (nextProps) {
    const {hotels: {payload}} = nextProps
    this.setState({
      hotels: payload.length ? payload : this.props.hotels.payload
    })
  }

  onChangeRangeFilter (value) {
    this.setState({
      price: value
    })
  }

  onChangeStarsFilter (stars) {
    this.setState({
      stars: stars
    })
  }

  onApplyFilters () {
    const {stars, price} = this.state
    this.props.getHotels({ stars: stars.join(','), price })
  }

  render () {
    return (
      <HotelsSection
        onChangeRangeFilter={this.onChangeRangeFilter}
        onChangeStarsFilter={this.onChangeStarsFilter}
        hotels={this.state.hotels}
        loading={this.props.hotels.fetching}
        onApplyFilters={this.onApplyFilters} />
    )
  }
}

HotelsSectionState.propTypes = {
  getHotels: PropTypes.func,
  hotels: PropTypes.object
}
