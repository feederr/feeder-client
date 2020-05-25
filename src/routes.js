import React from "react";
import { Route, Switch } from "react-router";
import PrivateRoute from "./modules/Auth/services/PrivateRoute/containers/PrivateRouteContainer";
import Auth from "./modules/Auth/components/Auth";
// import SidebarStripe from "./modules/Layout/pages/Sidebar/component/SidebarStripe";
import SideBarContainer from "./modules/Layout/pages/Sidebar/container/SidebarContainer";
import SearchContainer from "./modules/Search/container/SearchContainer";

export default function AppRoutes() {
  return (
    <Switch>
      <Route path="/auth" component={Auth} />
      <PrivateRoute path="/" component={authorizedRoutes} />
    </Switch>
  );
}

const authorizedRoutes = () => {
  return (
    <SideBarContainer>
      <PrivateRoute path="/search" component={SearchContainer} />
    </SideBarContainer>
  );
};
