import { useState } from 'react'
import axios from 'axios'

const BASE_URL = '/wp-json/wp/v2/'

const useApi = ({ route }) => {
  const [loading, setLoading] = useState(null)
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)

  const request = async ({ method = 'get', id, query, body }) => {
    try {
      setLoading(true)
      let res
      if (method === 'get') {
        const queryString = query ? `?${query}` : id ? `/${id}` : ''

        res = await axios.get(`${BASE_URL}${route}${queryString}`)
      } else {
        res = await axios[method](route).send(`${BASE_URL}${body}`)
      }

      setResponse(res)
      return res
    } catch (e) {
      setError(e)
      return e
    } finally {
      setLoading(false)
    }
  }

  return { loading, request, response, error }
}

export default useApi
