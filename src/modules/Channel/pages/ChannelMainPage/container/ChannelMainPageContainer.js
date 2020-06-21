import React, { useEffect, useState } from "react";
import ChannelPage from "../component";
import { withRouter } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  getNewsForChannelsRequest,
  getStatisticsForChannelRequest
} from "../../../store/actions";
import { parseImage } from "../../../../../helper/imageParser";

const ChannelMainPage = ({ history }) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [viewableItem, setViewableItem] = useState({});
  const channelInfo = useSelector(state => state.channel.currentChannel);
  const channelNews = useSelector(state => state.channel.currentChannelNews);
  const dispatch = useDispatch();
  const channelNewsStatistics = useSelector(
    state => state.channel.newsStatistics
  );
  const channelStatistics = useSelector(
    state => state.channel.currentChannelStatistics
  );
  function openDescriptionModal(item) {
    setViewableItem(item);
    setIsModalOpened(true);
  }

  useEffect(() => {
    dispatch(getNewsForChannelsRequest({ channelId: channelInfo.id }));
    if (channelInfo) {
      dispatch(getStatisticsForChannelRequest({ channelId: channelInfo.id }));
    }
  }, [channelInfo, dispatch]);

  return (
    <ChannelPage
      news={channelNews}
      channelInfo={channelInfo}
      openDescriptionModal={openDescriptionModal}
      isModalOpened={isModalOpened}
      viewableItem={viewableItem}
    />
  );
};

export default withRouter(ChannelMainPage);
