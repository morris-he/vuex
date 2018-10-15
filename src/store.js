import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      teachers:[
          {name:"皮皮",num:50},
          {name:"梅琳",num:60},
          {name:"东哥",num:70},
          {name:"进哥",num:80}
      ]
  },
  getters:{
      changeTeachers(state){
          let changeTeachers = state.teachers.map(teacher =>{
              return {
                  name:'new' + teacher.name,
                  num:teacher.num * 2
              }
          })
          return changeTeachers
      }
},
  mutations: {
      reduceClass(state,payload){
        // setTimeout(function () {
            state.teachers.map(teacher =>{
                teacher.num -= payload.num
            })
        // },3000)
      },
  },
  actions: {
      reduceClass(context,payload){
        setTimeout(function () {
            context.commit("reduceClass",payload)
        },2000)
      }
  }
})
