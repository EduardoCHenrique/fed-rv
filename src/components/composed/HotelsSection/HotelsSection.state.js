import React, {Component} from 'react'
import HotelsSection from './HotelsSection.js'

export default class HotelsSectionState extends Component {
  constructor (props) {
    super(props)
    this.onChangeRangeFilter = this.onChangeRangeFilter.bind(this)
  }

  onChangeRangeFilter (a, b, c) {
    console.log('a, b, c', a, b, c)
  }

  render () {
    return (
      <HotelsSection onChangeRangeFilter={this.onChangeRangeFilter} hotels={this.props.hotels.payload} />
    )
  }
} 