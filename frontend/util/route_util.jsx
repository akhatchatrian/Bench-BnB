import React from "react";
import { Redirect, withRouter, Route } from "react-router-dom";
import { connect } from "react-redux";


const Auth = ({ component: Component, path, loggedIn, exact}) => (
    <Route 
        path={path}
        exact={exact}
        render={props =>
            !loggedIn ? <Component {...props} /> : <Redirect to="/" />
        }
    />
);

const mstp = state => ({
    loggedIn: Boolean(state.session.id)
});

export const AuthRoute = withRouter(connect(mstp, null)(Auth));