import axios from 'axios'

export const request = () => (
  {
    type: 'FETCH_HOTELS_REQUEST'
  }
)

export const failed = error => (
  {
    type: 'FETCH_HOTELS_REQUEST_FAILED',
    error
  }
)

export const succeed = payload => (
  {
    type: 'FETCH_HOTELS_REQUEST_SUCCEED',
    payload
  }
)

function buildQueryParams (query) {
  return {
    params: {
      minPrice: query.price.min,
      maxPrice: query.price.max,
      stars: query.stars
    }
  }
}

export function getHotels (query) {
  const queryParams = query ? buildQueryParams(query) : {}

  return dispatch => {
    dispatch(request())
    return axios.get('https://rif2ibxnjk.execute-api.sa-east-1.amazonaws.com/prod/hotels', queryParams)
      .then(res => res.data.data)
      .then(data => dispatch(succeed(data)))
      .catch(error => dispatch(failed(error)))
  }
}
