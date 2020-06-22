import React, { useState } from "react";
import ChannelPreview from "../component";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { updateCompilationRequest } from "../../../../Layout/store/actions";
import { withRouter } from "react-router";
import { SideBarRoutes } from "../../../../Layout/pages/Sidebar/constants/SideBarRouterConstants";
import { redirectToNewsForChannel } from "../../../store/actions";

const ChannelPreviewContainer = ({ history, channelInfo }) => {
  const [isFollowed, setIsFollowed] = useState(false);
  const [anchorForPopupEl, setAnchorForPopupEl] = useState(null);
  const dispatch = useDispatch();
  const compilationsList = useSelector(state => state.layout.compilationsList);
  const isPopupOpen = Boolean(anchorForPopupEl);
  console.log(channelInfo);

  function followUpChannel(compilation) {
    console.log(compilation);
    // if (!compilation.channels) {
    //   compilation.channels = [];
    // }
    // compilation.channels.push(channelInfo.id);
    // const updateCompilationsListConfig = {
    //   compilationId: compilation.id,
    //   compilationName: compilation.name,
    //   channels: compilation.channels
    // };
    // dispatch(updateCompilationRequest(updateCompilationsListConfig));
    // setIsFollowed(true);
  }

  function redirectToNews(channelName) {
    dispatch(redirectToNewsForChannel(channelInfo));
    history.push(`${SideBarRoutes.CHANNELPAGE}/${channelName}`);
  }

  function onOpenPopup(event) {
    setAnchorForPopupEl(event.currentTarget);
  }

  function onClosePopup() {
    setAnchorForPopupEl(null);
  }

  return (
    <ChannelPreview
      redirectToNews={redirectToNews}
      compilationsList={compilationsList}
      anchorForPopupEl={anchorForPopupEl}
      isPopupOpen={isPopupOpen}
      onOpenPopup={onOpenPopup}
      onClosePopup={onClosePopup}
      followUpChannel={followUpChannel}
      isFollowed={isFollowed}
      channelImageUrl={channelInfo.image ? channelInfo.image.url : null}
      nameOfChannel={channelInfo.title}
      descriptionForChannel={channelInfo.description}
    />
  );
};

ChannelPreviewContainer.propTypes = {
  channelInfo: PropTypes.object
};

export default withRouter(ChannelPreviewContainer);
