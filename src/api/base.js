



//接口路由
const base = {
    //首页
    totalInfo: '/api/home/dataCount',//首页统计数据
    orderInfo: '/api/home/orderinfo',//首页统计数据
    getFormat: '/api/home/format',//折线图
    orderList: "/api/order/list",//订单列表 page
    projectList: "/api/goods/projectList",
    addProduct: "/api/goods/item/insertTbItem",
    selectItemCategoryByParentId: '/api/goods/itemCategory/selectItemCategoryByParentId',
    insertTbItem:'/api/goods/item/insertTbItem'
}

export const uploadUrl='/api/upload'
export default base
