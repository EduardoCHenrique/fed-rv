export const setFilter = payload => (
  {
    type: 'SET_FILTERS',
    payload
  }
)

export function setFilters (filters) {
  return dispatch => {
    dispatch(
      {
        type: 'SET_FILTERS',
        filters
      }
    )
  }
}
