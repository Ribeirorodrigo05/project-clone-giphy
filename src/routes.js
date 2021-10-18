import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import Comedy from './components/Comedy'
import Sports from './components/Sports'
import Animals from './components/Animals'
import Emotions from './components/Emotions'
import Cartoons from './components/Cartoons'
import Search from './components/Search'

Vue.use(Router)

export default new Router({
    routes:[
        { 
        path:'/', 
        name:Home,
        component:Home
    },
    { 
        path:'/comedy', 
        name: Comedy,
        component:Comedy
    },
    { 
        path:'/sports', 
        name: Sports,
        component:Sports
    },
    { 
        path:'/animals', 
        name: Animals,
        component:Animals
    },
    { 
        path:'/emotions', 
        name: Emotions,
        component:Emotions
    },
    { 
        path:'/cartoons', 
        name: Cartoons,
        component:Cartoons
    },
    { 
        path:'/search', 
        name: Search,
        component:Search
    }

    ]
})

