import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/index/index'
import Cart from 'components/cart/cart'
import Own from 'components/own/own'
import Destination from "components/destination/destination"

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: "/destination",
      name: "Destination",
      component: Destination
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart
    },
    {
      path: "/own",
      name: "Own",
      component: Own
    }
  ]
})
