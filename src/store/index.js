import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    state, 
    mutations,
    // vuex 中的 getter 类似组件中的 computed 计算属性，可用于提供新的数据，避免数据冗余
    // getters: {
    //     doubleCity(state){
    //         return state.city + '' + state.city
    //     }
    // }
})