export default {
    outputPath: "./build",
    theme: {
        "@primary-color": "#30b767",
    },
    plugins: [
        ['umi-plugin-react', {
            antd: true,
            dva: true,
            locale: {
                enable: true,
            },
        }],
    ],
    routes: [{
        path: '/',
        component: '../layout',
        routes: [
            {
                path: '/',
                component: 'css-modules-with-antd'
            },
            {
                path: 'helloworld',
                component: 'HelloWorld'
            },
            {
                path: '/dashboard',
                routes: [
                    { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
                    { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
                    { path: '/dashboard/workplace', component: 'Dashboard/Workplace' }
                ]
            },
            {
                path: 'puzzlecards', component: './puzzlecards'
            },
            {
                path: 'list',
                component: '../page/list'
            },
            {
                path: 'css-modules-with-less',
                component: 'css-modules-with-less/Index'
            },
            {
                path: 'css-modules-with-antd',
                component: 'css-modules-with-antd/Index'
            }
        ]
    }
    ],
    singular: true,
};