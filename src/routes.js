import React, { Suspense, Fragment, lazy } from 'react';
import { Routes, Navigate, Route } from 'react-router-dom';

import Loader from './components/Loader/Loader';
import AdminLayout from "./layouts";

import { BASE_URL } from './config/constant';

export const renderRoutes = (routes = []) => (
    <Suspense fallback={<Loader />}>
        <Routes>
            {routes.map((route, i) => {
                const Layout = route.layout || Fragment;
                const Component = route.component;

                return (
                    <Route
                        key={i}
                        path={route.path}
                        exact={route.exact}
                        element={<AdminLayout><Component /></AdminLayout>}
                        // element={(props) => <Layout>{route.routes ? renderRoutes(route.routes) : <Component {...props} />}</Layout>}
                    />
                );
            })}
        </Routes>
    </Suspense>
);

const routes = [
    {
        exact: true,
        path: '/',
        component: lazy(() => import('./views/dashboard/Dashboard'))
    },
    {
        exact: true,
        path: '/test',
        component: lazy(() => import('./views/Test'))
    },
    {
        path: '*',
        layout: AdminLayout,
        routes: [
            {
                exact: true,
                path: '/dash',
                component: lazy(() => import('./views/dashboard/Dashboard'))
            },
            // {
            //     exact: true,
            //     path: '/basic/button',
            //     component: lazy(() => import('./views/ui-elements/basic/BasicButton'))
            // },
            // {
            //     exact: true,
            //     path: '/basic/badges',
            //     component: lazy(() => import('./views/ui-elements/basic/BasicBadges'))
            // },
            // {
            //     exact: true,
            //     path: '/basic/breadcrumb',
            //     component: lazy(() => import('./views/ui-elements/basic/BasicBreadcrumb'))
            // },
            // {
            //     exact: true,
            //     path: '/basic/pagination',
            //     component: lazy(() => import('./views/ui-elements/basic/BasicPagination'))
            // },
            // {
            //     exact: true,
            //     path: '/basic/collapse',
            //     component: lazy(() => import('./views/ui-elements/basic/BasicCollapse'))
            // },
            // {
            //     exact: true,
            //     path: '/basic/tabs-pills',
            //     component: lazy(() => import('./views/ui-elements/basic/BasicTabsPills'))
            // },
            // {
            //     exact: true,
            //     path: '/basic/typography',
            //     component: lazy(() => import('./views/ui-elements/basic/BasicTypography'))
            // },
            // {
            //     exact: true,
            //     path: '/forms/form-basic',
            //     component: lazy(() => import('./views/forms/FormsElements'))
            // },
            // {
            //     exact: true,
            //     path: '/tables/bootstrap',
            //     component: lazy(() => import('./views/tables/BootstrapTable'))
            // },
            // {
            //     exact: true,
            //     path: '/charts/nvd3',
            //     component: lazy(() => import('./views/charts/nvd3-chart'))
            // },
            // {
            //     exact: true,
            //     path: '/maps/google-map',
            //     component: lazy(() => import('./views/maps/GoogleMaps'))
            // },
            // {
            //     exact: true,
            //     path: '/sample-page',
            //     component: lazy(() => import('./views/extra/SamplePage'))
            // },
            {
                path: '*',
                exact: true,
                element: () => <Navigate to={BASE_URL} />
            }
        ]
    }
];

export default routes;