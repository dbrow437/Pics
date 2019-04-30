import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ab5ed91161c01a58921e4993a90e8704f225838fb0e65816529e2df5570fa0e1'
  }
})