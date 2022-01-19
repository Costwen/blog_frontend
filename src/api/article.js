import axios from 'axios'

export default {
  async getArticle (id) {
    let data = await axios.get('/api/v1/article/' + id)
    console.log("getarticle")
    console.log(data)
    return data["data"]
  }
}
