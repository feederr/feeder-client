import React from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import { SideBarRoutes } from "../constants/SideBarRouterConstants";
import SidebarStripe from "../component/SidebarStripe";

const SideBarContainer = props => {
  function onNavButtonClicked(e) {
    GetPathToComponent(e, props.history);
  }
  return (
    <SidebarStripe
      onNavButtonClicked={onNavButtonClicked}
      children={props.children}
    />
  );
};

function GetPathToComponent(redirectName, history) {
  switch (redirectName) {
    case "Search":
      history.push(SideBarRoutes.SEARCH);
      break;
    case "Follow":
      history.push(SideBarRoutes.FOLLOW);
      break;
    case "Home":
      history.push(SideBarRoutes.HOME);
      break;
    default:
      return;
  }
}

SideBarContainer.propTypes = {
  history: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object)
  ])
};

export default withRouter(SideBarContainer);
