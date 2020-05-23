import React from "react";
import { Route, Switch } from "react-router";
import { Routes } from "../../constants/authRouterConstants";

import SignUp from "../../pages/SignUp/containers/SignUpConatainer";
import SignIn from "../../pages/SignIn/container/SignInContainer";
import PrivateRoute from "../../services/PrivateRoute/components/PrivateRoute";
import ForbiddenScreen from "../../pages/Forbidden";

const Auth = () => {
  return (
    <Switch>
      <Route path={Routes.SIGNUP} component={SignUp} />
      <Route path={Routes.SIGNIN} component={SignIn} />
      <PrivateRoute path={Routes.FORBIDDEN} component={ForbiddenScreen} />
    </Switch>
  );
};

export default Auth;
