const BASE_URL = 'https://api.holidu.com'

class Api {
  fetchOffers = async (
    url = `/rest/v6/search/offers?searchTerm=Mallorca,%20Spanien`
  ) => {
    try {
      const res = await fetch(`${BASE_URL}${url}`)
      return await res.json()
    } catch (error) {
      throw Error(error)
    }
  }
}

export default new Api()
