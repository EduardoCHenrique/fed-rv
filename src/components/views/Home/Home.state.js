import React, {Component} from 'react'
import moment from 'moment'
import HotelsRepository from 'infra/repositories/HotelsRepository'

import Home from './Home.js'
export default class HomeState extends Component {

  constructor (props) {
    super(props)

    this.handleChangeCheckin = this.handleChangeCheckin.bind(this)
    this.handleSearchHotels = this.handleSearchHotels.bind(this)
    this.state = {
      checkInDate: moment(),
      checkOutDate: moment()
    }
  }

  handleChangeCheckin ({start, end}) {
    this.setState({
      checkInDate: moment(start),
      checkOutDate: moment(end)
    })
  }

  handleSearchHotels () {
    this.props.getHotels()
  }

  render () {
    return (
      <Home
        onChangeCheckin={this.handleChangeCheckin}
        onSearchHotels={this.handleSearchHotels}
        {...this.state}
        {...this.props}
      />
    )
  }
}
