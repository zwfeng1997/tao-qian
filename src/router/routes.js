import Login from '../components/login/login'
import Register from '../components/register/register'
import Home from '../page/Home/index'
import Order from '../page/Order/index'
import PersonalCenter from '../page/PersonalCenter/index'
import ShoppingCart from '../page/ShoppingCart/index'
import Details from '../page/Details/index'
import Evaluate from '../page/Evaluate/index'
import Write from '../page/Write/index'
import Add from '../page/Add/addEvaluate'
import Picture from '../page/Picture/index'
import UserImg from '../page/Picture/userImg.vue'

export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/picture',
    name: 'Picture',
    component: Picture
  },
  {
    path: '/userImg',
    name: 'UserImg',
    component: UserImg
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/order',
    name: 'Order',
    component: Order
  },
  {
    path: '/personalcenter',
    name: 'PersonalCenter',
    component: PersonalCenter
  },
  {
    path: '/shoppingcart',
    name: 'ShoppingCart',
    component: ShoppingCart
  },
  {
    path: '/details',
    name: 'Details',
    component: Details
  },
  {
    path: '/evaluate',
    name: 'Evaluate',
    component: Evaluate
  },
  {
    path: '/write',
    name: 'Write',
    component: Write
  },
  {
    path: '/add',
    name: 'Add',
    component: Add
  },
]
