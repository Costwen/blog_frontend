import axios from 'axios'

export default {
  async login (username, password) {
      console.log(username, password)
    return await axios.get('/api/v1/articles/')
  }
}
