import React from 'react'
import PropTypes from 'prop-types'
import InputRange from 'react-input-range'

import './Range.scss'

const Range = ({maxValue, minValue, value, onChange}) => {
  return (
    <InputRange
      maxValue={maxValue}
      minValue={minValue}
      value={value}
      draggableTrack
      onChange={onChange} />
  )
}

export default Range
