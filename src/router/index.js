import Vue from 'vue';
import VueRouter from 'vue-router';

import RetrievalInput from '../views/retrieval/input'
import RetrievalOutput from '../views/retrieval/output'

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
    }
];

export default new VueRouter({
    routes
});