import loadable from '@loadable/component';

export default [
    {
        path: '/',
        exact: true,
        title: 'Home',
        navbar: true,
        component: () => loadable(() => import('../pages/Dashboard/Dashboard')),
    },
    {
        path: '/example',
        title: 'Example',
        navbar: true,
        component: () => loadable(() => import('../pages/Example/ExampleForm')),
    }
]