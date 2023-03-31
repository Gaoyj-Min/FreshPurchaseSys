import Vuex from 'vuex'

  export default {
    namespaced:true,
    state:{
        rowData:{},//当前行的数据容器
        title:'添加',//标题信息
    },
    mutations:{
       changerowData(state,payload){
        state.rowData = payload;
       },
       changetitle(state,title){
        console.log('编辑');
        state.title = title
       } 
    }
}