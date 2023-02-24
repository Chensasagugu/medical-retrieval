import Vue from 'vue';
import VueRouter from 'vue-router';

import RetrievalInput from '../views/retrieval/input'
import RetrievalOutput from '../views/retrieval/output'
import test from '../views/user/test'
import UserLogin from '../views/user/login'
import ImageSearch from '../views/retrieval/ImageSearch'
import IndexPage from '../views/index'

Vue.use(VueRouter)

const routes = [
    { 
        path: '/retrieval/input', 
        name: 'input',
        component: RetrievalInput 
    },
    {
        path: '/retrieval/output',
        name: 'output',
        component: RetrievalOutput
    },
    {
        path: '/user/test',
        name: 'test',
        component: test
    },
    {
        path: '/user/login',
        name: 'login',
        component: UserLogin
    },
    {
        path: '/retrieval/ImageSearch',
        name: 'imageSearch',
        component: ImageSearch
    },
    {
        path: '/index',
        name: 'index',
        component: IndexPage
    }
];

export default new VueRouter({
    routes
});