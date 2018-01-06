import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/index/index'
import Cart from 'components/cart/cart'
import Own from 'components/own/own'
import Detail from 'components/detail/detail'
import List from 'components/list/list'
import Register from 'components/register/register'
import Login from 'components/login/login'
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
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    },
    {
      path: "/list",
      name: "List",
      component: List
    },
    {
      path: "/detail",
      name: "Detail",
      component: Detail
    }
  ]
})
