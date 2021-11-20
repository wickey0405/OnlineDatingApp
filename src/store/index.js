import Vue from 'vue'
import Vuex from 'vuex'

import UsersModule from './users'
import MessagesModule from './messages'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    UsersModule,
    MessagesModule
  }
  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  // modules: {
  // }
})
