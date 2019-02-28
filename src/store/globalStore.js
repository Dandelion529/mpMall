import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.store({
    state: {
        count:1
    },
    mutations: {
        increment(state){
            // 变更状态
            state.count++
        }
    },
})