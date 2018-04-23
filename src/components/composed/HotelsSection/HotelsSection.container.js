import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import HotelsSectionState from './HotelsSection.state'
import { getHotels } from 'actions/Hotels'

const mapStateToProps = state => {
  const { hotels } = state
  return { hotels }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  { getHotels },
  dispatch
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HotelsSectionState)
