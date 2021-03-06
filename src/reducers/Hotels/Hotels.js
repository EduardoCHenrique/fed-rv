const initial = {
  error: null,
  fetching: false,
  payload: [],
  success: false
}

export default function Hotels (state = initial, action) {
  if (action.type === 'FETCH_HOTELS_REQUEST') {
    return { ...initial, fetching: true }
  }
  if (action.type === 'FETCH_HOTELS_REQUEST_FAILED') {
    return { ...initial, error: action.error }
  }
  if (action.type === 'FETCH_HOTELS_REQUEST_SUCCEED') {
    return { ...initial, success: true, payload: action.payload }
  }
  return state
}