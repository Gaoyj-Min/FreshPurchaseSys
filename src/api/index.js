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
    projectList(params) {
        return axios.get(base.projectList, { params });
    },
    addProduct(params) {
        // console.log({ params });
        return axios.get(base.addProduct, { params });
    },
    selectItemCategoryByParentId(params) {
        return axios.get(base.selectItemCategoryByParentId, { params });
    }
}
export default api