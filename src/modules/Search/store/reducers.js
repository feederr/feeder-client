import { handleActions } from "redux-actions";
import { getChannelsRequest, getChannelsSuccess } from "./actions";

const defaultState = {
  foundedChannels: [
    // { // just for understanding how object looks like
    //   link: "",
    //   id: "",
    //   title: "",
    //   description: "",
    //   author: "",
    //   copyright: "",
    //   image: {
    //     title: "",
    //     url: ""
    //   },
    //   pubDate: ""
    // }
  ],
  isChannelsLoading: false
};

const followPageReducer = handleActions(
  {
    [getChannelsRequest](state) {
      return {
        ...state,
        isChannelsLoading: true
      };
    },
    [getChannelsSuccess](state, action) {
      return {
        ...state,
        foundedChannels: action.response.data.content,
        isChannelsLoading: false
      };
    }
  },
  defaultState
);

export default followPageReducer;
