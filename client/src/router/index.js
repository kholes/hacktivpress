import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Posting from '@/components/Posting'
import ArticleDetail from '@/components/ArticleDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Posting',
      name: 'Posting',
      component: Posting
    },
    {
      path: '/:id',
      name: 'Article',
      component: ArticleDetail,
      props: true
    }
  ]
})
