import React from "react";
import {Route, Switch} from "react-router";
import PrivateRoute from "./modules/Auth/services/PrivateRoute/containers/PrivateRouteContainer";
import Auth from "./modules/Auth/components/Auth";

export default function AppRoutes() {
    return (
        <Switch>
            <Route path="/auth" component={Auth}/>
            <PrivateRoute path="/" component={authorizedRoutes}/>
        </Switch>
    );
}

const authorizedRoutes = () => {
    return (
        <div>Private routes</div>
    );
};
