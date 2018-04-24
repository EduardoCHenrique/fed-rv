import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import HomeState from './Home.state'
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
)(HomeState)
