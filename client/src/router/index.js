import Vue from 'vue'
import Router from 'vue-router'
import landing from '../components/landing.vue'
import chat from '../components/chat.vue'
Vue.use(Router)

const router=new Router({
    mode: 'history',
    routes:[
        {
            path:'/',
            component:landing
        },
        {
            path:'/chat',
            component:chat
        }

    ]

})


export default router