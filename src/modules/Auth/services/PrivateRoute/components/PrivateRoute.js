import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { Routes } from "../../../constants/authRouterConstants";

const PrivateRoute = ({
  component: Components,
  isLoggedIn,
  path
}) => {
  if (isLoggedIn) {
    return <Route path={path} render={props => <Components {...props} />} />;
  } else {
    return <Redirect to={Routes.SIGNIN} />;
  }
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired
};

export default PrivateRoute;
