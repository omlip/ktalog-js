import Vue from 'vue'
import VueRouter from 'vue-router'
import ListItems from '@/components/ListItems.vue'
import AddItem from '@/components/AddItem.vue'
import DetailItem from '@/components/DetailItem.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ListItems',
    component: ListItems
  },
  {
    path: '/add',
    name: 'AddItem',
    component: AddItem
  },
  {
    path : '/detail/:id',
    name : 'DetailItem',
    component: DetailItem,
    props: (route) => ({ id: route.params.id })
  }

]

const router = new VueRouter({
  routes
})

export default router
