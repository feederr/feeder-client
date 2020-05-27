import React, { useState } from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import { SideBarRoutes } from "../constants/SideBarRouterConstants";
import SidebarStripe from "../component/SidebarStripe";

const SideBarContainer = props => {
  const [menuOpened, setMenuOpened] = useState(true);

  function onOpenMenuButtonClicked() {
    setMenuOpened(!menuOpened);
  }

  function onNavButtonClicked(e) {
    onMainContentClicked();
    RedirectToAnotherComponent(e, props.history);
  }

  function onMainContentClicked() {
    if (menuOpened) onOpenMenuButtonClicked();
  }

  return (
    <SidebarStripe
      onNavButtonClicked={onNavButtonClicked}
      onOpenMenuButtonClicked={onOpenMenuButtonClicked}
      children={props.children}
      menuOpened={menuOpened}
      onMainContentClicked={onMainContentClicked}
    />
  );
};

export function RedirectToAnotherComponent(redirectName, history) {
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
