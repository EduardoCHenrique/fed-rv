const initialState = {
  filters: {
    stars: [],
    price: {
      min: 0,
      max: 0
    }
  }
}

export default function Hotels (state = initialState, action) {
  if (action.type === 'SET_FILTERS') {
    return { ...initialState, filters: action.filters }
  }
  return state
}
