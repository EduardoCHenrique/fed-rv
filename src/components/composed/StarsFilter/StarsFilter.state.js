import React, {Component} from 'react'
import StarsFilter from './StarsFilter.js'

export default class StarsFilterState extends Component {
  constructor (props) {
    super(props)
    this.handleSelect = this.handleSelect.bind(this)
    this.state = {
      stars: []
    }
  }

  handleSelect (starValue) {
    const {stars} = this.state
    const indexOf = stars.indexOf(starValue)
    if (indexOf > -1) {
      stars.splice(indexOf, 1)
    } else {
      stars.push(starValue)
    }

    this.props.handleSelect(stars)
  }

  render () {
    return (
      <StarsFilter stars={this.state.stars} handleSelect={this.handleSelect} />
    )
  }
}
