import Vue from 'vue'
import Router from 'vue-router'


import CastBallot from '@/components/CastBallot'
import QueryAll from '@/components/QueryAll'
import QueryWithQueryString from '@/components/QueryWithQueryString'
import QueryByKey from '@/components/QueryByKey'
import GetCurrentStanding from '@/components/GetCurrentStanding'
import RegistroElector from '@/components/RegistroElector'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CastBallot',
      component: CastBallot
    },
    {
      path: '/queryAll',
      name: 'QueryAll',
      component: QueryAll
    },
    {
      path: '/queryWithQueryString',
      name: 'QueryWithQueryString',
      component: QueryWithQueryString
    },
    {
      path: '/queryByKey',
      name: 'QueryByKey',
      component: QueryByKey
    },
    {
      path: '/getCurrentStanding',
      name: 'GetCurrentStanding',
      component: GetCurrentStanding
    },
    {
      path: '/registroElector',
      name: 'RegistroElector',
      component: RegistroElector
    }
  ]
})
