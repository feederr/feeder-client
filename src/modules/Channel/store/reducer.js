import { handleActions } from "redux-actions";
import {
  getNewsForChannelsSuccess,
  getStatisticsForChannelSuccess,
  getStatisticsForItemSuccess,
  redirectToNewsForChannel
} from "./actions";
import { parseImage } from "../../../helper/imageParser";

const defaultState = {
  allChannels: [{}],
  currentChannel: {},
  currentChannelStatistics: {},
  currentChannelNews: [
    {
      title: "",
      description: "",
      link: "",
      pubDate: "",
      id: ""
    }
  ],
  newsStatistics: [{}]
};

const channelPageReducer = handleActions(
  {
    [redirectToNewsForChannel](state, action) {
      return {
        ...state,
        currentChannel: action.payload
      };
    },
    [getNewsForChannelsSuccess](state, action) {
      const news = action.response.data.content;
      news.forEach(item => {
        try {
          let parsedData = parseImage(item.description);
          item.description = parsedData.restOfDescription;
          item.image = parsedData.urlToImage;
          item.viewed = Math.floor(Math.random() * 400 + 1);
          item.bookmarked = Math.floor(Math.random() * 50 + 1);
        } catch (e) {
          console.log(e);
        }
      });
      return {
        ...state,
        currentChannelNews: news
      };
    },
    [getStatisticsForItemSuccess](state, action) {
      console.log("got statistic for news");
      console.log(action.response.data);
    },
    [getStatisticsForChannelSuccess](state, action) {
      console.log("got statistics for channel");
      console.log(action.response.data);
      return {
        ...state,
        currentChannelStatistics: action.response.data.content
      };
    },
    [getStatisticsForItemSuccess](state, action) {
      const currentNewsStatistics = state.newsStatistics;
      currentNewsStatistics.push(action.response.data.content);
      return {
        ...state,
        newsStatistics: currentNewsStatistics
      };
    }
  },
  defaultState
);

export default channelPageReducer;
