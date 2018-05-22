import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
// import User from '@/components/User'
// import UserList from '@/components/UserList'
// import UserDetail from '@/components/UserDetail'
// import UserEdit from '@/components/UserEdit'
import Header from '@/components/Header'

const User = resolve => {
  require.ensure(['@/components/User.vue'], () => {
      resolve(require('@/components/User.vue'));
  });
};
const UserList = resolve => {
  require.ensure(['@/components/UserList.vue'], () => {
      resolve(require('@/components/UserList.vue'));
  });
};
const UserDetail = resolve => {
  require.ensure(['@/components/UserDetail.vue'], () => {
      resolve(require('@/components/UserDetail.vue'));
  });
};
const UserEdit = resolve => {
  require.ensure(['@/components/UserEdit.vue'], () => {
      resolve(require('@/components/UserEdit.vue'));
  });
};

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      components: {
        default: Home,
        'header': Header
      }
    },
    {
      path: '/user',
      components: {
        default: User,
        'header-top': Header
      },
      children: [
        {path: '', component: UserList},
        {path: ':id', component: UserDetail},
        {
          path: ':id/edit', 
          component: UserEdit, 
          name: 'userEdit',
          beforeEnter:(to, from, next) => {
            console.log('before enter home - inside route setup');
            next();
          }
        }
      ]
    },
    {
      path: '*',
      redirect: {name: 'home'}
    }
  ]
})
