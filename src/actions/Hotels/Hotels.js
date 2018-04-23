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

export function getHotels () {
  return dispatch => {
    dispatch(request())

    return axios.get('https://rif2ibxnjk.execute-api.sa-east-1.amazonaws.com/prod/hotels')
      .then(res => res.data.data)
      .then(data => dispatch(succeed(data)))
      .catch(error => dispatch(failed(error)))
  }
}
