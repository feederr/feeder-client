import React, { useEffect, useState } from "react";
import ChannelPage from "../component";
import { withRouter } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  getNewsForChannelsRequest,
  getStatisticsForChannelRequest
} from "../../../store/actions";

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
  const numberOfFollowers = Math.floor(Math.random() * 100 + 1);
  const numberOfArticlesPerWeek = Math.floor(Math.random() * 40 + 1);

  function openDescriptionModal(item) {
    setViewableItem(item);
    setIsModalOpened(true);
  }

  function closeModal() {
    setIsModalOpened(false);
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
      channelNewsStatistics={channelNewsStatistics}
      channelStatistics={channelStatistics}
      closeModal={closeModal}
      channelInfo={channelInfo}
      openDescriptionModal={openDescriptionModal}
      isModalOpened={isModalOpened}
      viewableItem={viewableItem}
      numberOfFollowers={numberOfFollowers}
      numberOfArticlesPerWeek={numberOfArticlesPerWeek}
    />
  );
};

export default withRouter(ChannelMainPage);
