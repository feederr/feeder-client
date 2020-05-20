import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { Routes } from "../../../constants/authRouterConstants";

const PrivateRoute = ({
  component: Components,
  isLoggedIn,
  allowedRoles,
  currentRole,
  path
}) => {
  if (isLoggedIn) {
    // if (currentRole === 2) {
    //   return <Redirect to={Routes.NOTACCESSED} />;
    // }
    if (allowedRoles && allowedRoles.indexOf(currentRole) === -1) {
      return <Redirect to={Routes.FORBIDDEN} />;
    }
    return <Route path={path} render={props => <Components {...props} />} />;
  } else {
    return <Redirect to={Routes.SIGNIN} />;
  }
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired
};

export default PrivateRoute;
