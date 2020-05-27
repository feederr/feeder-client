import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { withRouter } from "react-router";
import OptionalMenuLayout from "../component";
import { RedirectToAnotherComponent } from "../../Sidebar/container/SidebarContainer";

const OptionalMenuContainer = props => {
  const currentPathName = useLocation().pathname;
  const [channelsListOpened, setChannelsListOpened] = useState(false);

  function loadTopicChannels() {
    setChannelsListOpened(!channelsListOpened);
  }

  function redirectToSpecificSection(redirectPath) {
    RedirectToAnotherComponent(redirectPath, props.history);
  }

  return (
    <OptionalMenuLayout
      currentPathName={currentPathName}
      channelsListOpened={channelsListOpened}
      loadTopicChannels={loadTopicChannels}
      redirectToSpecificSection={redirectToSpecificSection}
    />
  );
};

export default withRouter(OptionalMenuContainer);
