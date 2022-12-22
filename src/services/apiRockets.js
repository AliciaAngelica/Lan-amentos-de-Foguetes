import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.spacexdata.com'
})

export default api