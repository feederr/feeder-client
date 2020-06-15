import { handleActions } from "redux-actions";
import { getNewsForChannelsSuccess, redirectToNewsForChannel } from "./actions";

const defaultState = {
  currentChannel: {},
  currentChannelNews: [
    {
      title: "",
      description: "",
      link: "",
      pubDate: "",
      id: ""
    }
  ]
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
    }
  },
  defaultState
);

export default channelPageReducer;
