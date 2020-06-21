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
        } catch (e) {
          console.log(e);
        }
      });
      return {
        ...state,
        currentChannelNews: news
      };
    },
    [getStatisticsForChannelSuccess](state, action) {
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
