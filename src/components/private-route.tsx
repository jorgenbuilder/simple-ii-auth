import React, { ReactNode, useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import Routes, { RouteConf } from '../constants/routes';
import { InternetIdentityContext } from '../context/internet-identity';

interface PrivateRouteProps extends RouteConf {
    children?: ReactNode;
}

export default function PrivateRoute({ path, exact, requiresAuth, ...rest }: PrivateRouteProps) {
    const { isAuthed } = useContext(InternetIdentityContext);
    if (requiresAuth && !isAuthed) {
        return <Redirect to={{ pathname: Routes.auth.path, state: { referrer: path }}}  />
    }
    return <Route path={path} exact={exact} {...rest} />
}