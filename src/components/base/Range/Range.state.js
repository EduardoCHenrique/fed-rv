import React, {Component} from 'react'

import Range from './Range.js'

const VALUES = {
  MIN: 100,
  MAX: 600
}

export default class RangeState extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      value: {
        min: VALUES.MIN,
        max: VALUES.MAX
      }
    }
  }

  handleChange (value) {
    this.setState({
      value: {
        min: value.min,
        max: value.max
      }
    })
  }

  render () {
    return (
      <Range maxValue={VALUES.MAX} minValue={VALUES.MIN} value={this.state.value} onChange={this.handleChange} />
    )
  }
}