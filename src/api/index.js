import base from './base.js'
import axios from '../utils/requset.js'

const api = {
    totalInfo() {
        return axios.get(base.totalInfo)
    },
    OrderInfo() {
        return axios.get(base.orderInfo)
    },
    format() {
        return axios.get(base.getFormat);
    },
}
export default api