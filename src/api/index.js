import base from './base.js'
import axios from '../utils/requset.js'

const api = {
    totalInfo(){
        return axios.get(base.totalInfo)
    }
}
export default api