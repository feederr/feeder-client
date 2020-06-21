import React, { useEffect } from "react";
import ChannelPage from "../component";
import { withRouter } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  getNewsForChannelsRequest,
  getStatisticsForChannelRequest
} from "../../../store/actions";
import { parseImage } from "../../../../../helper/imageParser";

const ChannelMainPage = ({ history }) => {
  const channelInfo = useSelector(state => state.channel.currentChannel);
  const channelNews = useSelector(state => state.channel.currentChannelNews);
  const channelNewsStatistics = useSelector(
    state => state.channel.newsStatistics
  );
  const channelStatistics = useSelector(
    state => state.channel.currentChannelStatistics
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (channelInfo) {
      dispatch(getStatisticsForChannelRequest({ channelId: channelInfo.id }));
    }
    if (channelNews) {
      channelNews.forEach(news => {
        let parsedData = parseImage(news.description);
        news.description = parsedData.restOfDescription;
        news.image = parsedData.urlToImage;
        // let element = document.getElementById(news.id);
        // if (element) {
        //   element.innerHTML = news.image;
        // }
      });
    }
  });

  useEffect(() => {
    dispatch(getNewsForChannelsRequest({ channelId: channelInfo.id }));
  }, [channelInfo.id, dispatch]);

  return <ChannelPage news={channelNews} channelInfo={channelInfo} />;
};

export default withRouter(ChannelMainPage);
