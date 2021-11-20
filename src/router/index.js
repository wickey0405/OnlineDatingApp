import Vue from 'vue'
import VueRouter from 'vue-router'
import UserList from '../pages/user-list.vue'
import UserDetail from '../pages/user-detail.vue'
import Chat from '../pages/chat.vue'
import MessageList from '../pages/message-list.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'UserList',
    component: UserList
  },
  {
    path: '/user/:id',
    name: 'UserDetail',
    component: UserDetail,
    props: true,
  },
  {
    path: '/user/:id/chat',
    name: 'Chat',
    component: Chat,
    props: true,
  },
  {
    path: '/message-list',
    name: 'MessageList',
    component: MessageList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
