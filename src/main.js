import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import Main from '@/views/MainView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		component: Main,
	},
];
const router = createRouter({
	history: createWebHistory(),
	routes,
});

createApp(App).use(router).mount('#app');
