import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import User from '@/components/User'
import UserList from '@/components/UserList'
import UserDetail from '@/components/UserDetail'
import UserEdit from '@/components/UserEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'Home',
      component: Home
    },
    {
      path: '/user',
      component: User,
      children: [
        {path: '', component: UserList},
        {path: ':id', component: UserDetail},
        {path: ':id/edit', component: UserEdit}
      ]
    }
  ]
})
