import { createRouter, createWebHistory } from 'vue-router';
import About from '../views/About.vue';
import Home from '../views/Home.vue';
import NotFound from '../views/NotFound.vue';
import Tutorial from '../views/Tutorial.vue';
import Jobs from '../views/jobs/Jobs.vue';
import JobDetails from '../views/jobs/JobDetails.vue';
import SingleJob from '../views/jobs/SingleJob.vue';

const router = createRouter({
	// history: createWebHistory(import.meta.env.BASE_URL),
	history: createWebHistory(process.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/tutorial',
			name: 'tutorial',
			component: Tutorial,
		},
		{
			path: '/about',
			name: 'about',
			component: About,
		},
		{
			path: '/jobs',
			name: 'jobs',
			component: Jobs,
		},
		// {
		// 	path: '/jobs/:id',
		// 	name: 'jobDetails',
		// 	component: JobDetails,
		// 	props: true,
		// },
		{
			path: '/jobs/:id',
			name: 'singleJob',
			component: SingleJob,
			props: true,
		},
		// redirect
		{
			path: '/all-jobs',
			redirect: '/jobs',
		},
		// catchall 404
		{ path: '/:catchAll(.*)', name: 'notFound', component: NotFound },
	],
});

export default router;
