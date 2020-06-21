import { handleActions } from "redux-actions";
import {
  getNewsForChannelsSuccess,
  getStatisticsForChannelSuccess,
  getStatisticsForItemSuccess,
  redirectToNewsForChannel
} from "./actions";

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
      console.log(action.response.data.content);
      return {
        ...state,
        currentChannelNews: action.response.data.content
      };
    },
    [getStatisticsForChannelSuccess](state, action) {
      console.log(action.response.data);
      return {
        ...state,
        currentChannelStatistics: action.response.data.content
      };
    },
    [getStatisticsForItemSuccess](state, action) {
      console.log(action.response.data);
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
