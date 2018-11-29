import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
    { path: '/', component: () => import('../components/helloworld') },
    { path: '/helloworld', component: () => import('../components/helloworld') },
    { path: '/foo', component: () => import('../components/foo') },
    { path: '/bar', component: () => import('../components/bar') }
    ]
});

export default router;
