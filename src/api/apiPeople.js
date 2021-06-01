import axios from './axios'

const get = page => {
  if (!page) {
    page = 1
  }

  return axios.get(`?page=${page}`);
}

export default get