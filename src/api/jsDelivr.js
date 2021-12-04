import axios from 'axios'

const baseURL = 'https://data.jsdelivr.com/v1'

const axiosInstance = axios.create({
  baseURL
})

const API = {
  getPackageFiles (name, version, structure = 'tree') {
    return axiosInstance.get(`/package/npm/${encodeURI(name)}@${encodeURI(version)}/${structure}`)
  }
}

export default API
