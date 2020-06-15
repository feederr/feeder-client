import React from "react";
import { Route, Switch } from "react-router";
import PrivateRoute from "./modules/Auth/services/PrivateRoute/containers/PrivateRouteContainer";
import Auth from "./modules/Auth/components/Auth";
import SideBarContainer from "./modules/Layout/pages/Sidebar/container/SidebarContainer";
import { FollowMainContainer } from "./modules/Follow/pages/MainLayout/container/FollowMainContainer";
import { HomeMainContainer } from "./modules/Home/pages/MainLayout/container/HomeMainContainer";
import SearchContainer from "./modules/Search/container/SearchContainer";
import ChannelMainPage from "./modules/Channel/pages/ChannelMainPage/container/ChannelMainPageContainer";

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
      <PrivateRoute path="/home" component={HomeMainContainer} />
      <PrivateRoute path="/follow" component={FollowMainContainer} />
      <PrivateRoute path="/search" component={SearchContainer} />
      <PrivateRoute path="/channel" component={ChannelMainPage} />
    </SideBarContainer>
  );
};
