import React, {Component} from 'react'
import moment from 'moment'

import Home from './Home.js'
export default class HomeState extends Component {
  constructor (props) {
    super(props)
    this.handleChangeCheckin = this.handleChangeCheckin.bind(this)
    this.state = {
      checkInDate: moment(),
      checkOutDate: moment()
    }
  }

  handleChangeCheckin ({start, end}) {
    console.log('handleChangeCheckin', start)
    this.setState({
      checkInDate: moment(start),
      checkOutDate: moment(end)
    })
  }

  render () {
    return (
      <Home
        onChangeCheckin={this.handleChangeCheckin}
        {...this.state} />
    )
  }
}
