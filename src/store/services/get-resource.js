import axios from 'axios'

export function getResource(data) {

  return axios.get(data.url).then(res => res.data)

}