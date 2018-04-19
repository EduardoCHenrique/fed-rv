import axios from 'axios'

// function createHotel({id, thumbnail, price, title}) {
// }

const HotelsRepository = {
  getAllHotels (search) {
    return axios.get('https://rif2ibxnjk.execute-api.sa-east-1.amazonaws.com/prod/hotels')
      .then(response => {
        console.log('response', response)
      })
  }
  // getAllHotels(search) {
  //   return axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${search}&limit=4`)
  //     .then(response => response.data.results.map(createProduct))
  // }

}

export default HotelsRepository
