import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Loader from './components/Loader/Loader';
import AdminLayout from "./layouts";

export const renderRoutes = (routes = []) => (
    <Suspense fallback={<Loader />}>
        <Routes>
            {routes.map((route, i) => {
                const Component = route.component;

                return (
                    <Route
                        key={i}
                        path={route.path}
                        exact={route.exact}
                        element={route.routes ? renderRoutes(route.routes): <AdminLayout><Component /></AdminLayout>}
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
        path: '/dash',
        component: lazy(() => import('./views/dashboard/Dashboard'))
    },
    {
        exact: true,
        path: '/test',
        component: lazy(() => import('./views/Test'))
    },
    // CHART
    {
        path: '*',
        routes: [
            {
                exact: true,
                path: '/chart/line',
                component: lazy(() => import('./views/chart/LineChart'))
            },
            {
                exact: true,
                path: '/chart/discrete-bar',
                component: lazy(() => import('./views/chart/LineChart'))
            },
            {
                exact: true,
                path: '/chart/multi-bar',
                component: lazy(() => import('./views/chart/MultiBarChart'))
            },
            {
                exact: true,
                path: '/chart/pie',
                component: lazy(() => import('./views/chart/PieChart'))
            },
            {
                exact: true,
                path: '/chart/donut',
                component: lazy(() => import('./views/chart/DonutChart'))
            }
        ]
    },

    // forms
    {
        exact: true,
        path: '/forms/form-basic',
        component: lazy(() => import('./views/forms/FormElements'))
    },
    {
        exact: true,
        path: '/forms/new-account',
        component: lazy(() => import('./views/forms/account/AccountForm'))
    },

    // tables
    {
        exact: true,
        path: '/table/account',
        component: lazy(() => import('./views/tables/AccountTable'))
    },

    // views
    {
        path: '/view/account/:id',
        component: lazy(() => import('./views/AccountInfo'))
    },
    {
        exact: true,
        path: '/basic/badges',
        component: lazy(() => import('./views/elements/BasicBadges'))
    },
    {
        exact: true,
        path: '/basic/breadcrumb',
        component: lazy(() => import('./views/elements/BasicBreadcrumb'))
    },
    {
        exact: true,
        path: '/basic/button',
        component: lazy(() => import('./views/elements/BasicButton'))
    },
    {
        exact: true,
        path: '/basic/collapse',
        component: lazy(() => import('./views/elements/BasicCollapse'))
    },
    {
        exact: true,
        path: '/basic/notifications',
        component: lazy(() => import('./views/elements/BasicNotification'))
    },
    {
        exact: true,
        path: '/basic/pagination',
        component: lazy(() => import('./views/elements/BasicPagination'))
    },
    {
        exact: true,
        path: '/basic/tabs-pills',
        component: lazy(() => import('./views/elements/BasicTabsPills'))
    },
    {
        exact: true,
        path: '/basic/typography',
        component: lazy(() => import('./views/elements/BasicTypography'))
    }
];

export default routes;