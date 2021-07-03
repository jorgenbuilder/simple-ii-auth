import React from 'react';
import { Route, Switch } from 'react-router';
import PrivateRoute from '../components/private-route';
import { index, auth } from '../screens';

export interface RouteConf {
    path: string;
    component: React.FC;
    exact?: boolean;
    requiresAuth?: boolean;
}

const Routes: {
    [key: string]: RouteConf;
} = {
    auth: {
        path: '/auth',
        component: auth,
    },
    index: {
        path: '',
        component: index,
        requiresAuth: true,
    }
};

export function AppRoutes () {
    return <Switch>
        {Object.values(Routes).map(r => <PrivateRoute {...r} key={r.path} />)}
    </Switch>;
}

export default Routes;