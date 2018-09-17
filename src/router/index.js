import Vue from 'vue'
import Router from 'vue-router'
import Reacommend from '../components/recommend/recommend.vue'
import Singer from '../components/singer/singer.vue'
import Rank from '../components/rank/rank.vue'
import Serch from '../components/serch/serch.vue'
import Disc from '../components/disc/disc.vue'
import User from '../components/user/user.vue'

import SingerDetail from '../components/singer-detail/singer-detail.vue'
import TopList from '../components/top-list/top-list.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: Reacommend,
    children: [
      {
        path: ':id',
        component: Disc
      }]

  },
  {
    path: '/singer',
    component: Singer,
    children: [{
      path: ':id',
      component: SingerDetail
    }]
  },
  {
    path: '/rank',
    component: Rank,
    children: [
      {
        path: ':id',
        component: TopList
      }
    ]
  },
  {
    path: '/search',
    component: Serch
  },
  {
    path: '/user',
    component: User
  }
  ]
})
