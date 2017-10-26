import Vue from 'vue'
import Router from 'vue-router'
import index from '../page/index.vue'
import Home from '../page/Home.vue'
import company from '../page/company.vue'
import message from '../page/message.vue'
import my from '../page/my.vue'
import search from '../components/public/Home/search.vue'
import city from '../components/public/common/city.vue'
import add from '../components/public/Home/add.vue'
import searchResult from '../components/public/common/search-result.vue'
import messageDetail from '../components/public/message/message-detail.vue'
import detail from '../components/public/common/detail.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index,
      children:[
        {
          path:'',
          component:Home,
        },
        {
          path:'home',
          component:Home,
        },
        {
          path: '/company',
          name: 'company',
          component: company
        },
        {
          path: '/message',
          name: 'message',
          component: message
        },
        {
          path: '/my',
          name: 'my',
          component: my
        }
      ]
    },
    {
      path: '/city',
      name: 'city',
      component: city
    },
    {
      path: '/add',
      name: 'add',
      component: add
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/searchResult',
      name: 'searchResult',
      component: searchResult
    },
    {
      path: '/messageDetail',
      name: 'messageDetail',
      component: messageDetail
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    }
  ]
})
