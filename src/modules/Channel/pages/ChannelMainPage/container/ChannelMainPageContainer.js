import React, { useEffect } from "react";
import ChannelPage from "../component";
import { withRouter } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { getNewsForChannelsRequest } from "../../../store/actions";

const ChannelMainPage = ({ history }) => {
  const channelInfo = useSelector(state => state.channel.currentChannel);
  const channelNews = useSelector(state => state.channel.currentChannelNews);
  const dispatch = useDispatch();

  useEffect(() => {
    if (channelNews) {
      channelNews.forEach(news => {
        let element = document.getElementById(news.id);
        if (element) {
          element.innerHTML = news.description;
        }
      });
    }
  });

  useEffect(() => {
    dispatch(getNewsForChannelsRequest({ channelId: channelInfo.id }));
  }, [channelInfo.id, dispatch]);

  return <ChannelPage news={channelNews} channelInfo={channelInfo} />;
};

export default withRouter(ChannelMainPage);
