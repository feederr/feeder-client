import { handleActions } from "redux-actions";
import { getCategoriesSuccess } from "./actions";

const defaultState = {
  categories: [
    {
      name: "",
      imageUrl: "",
      id: ""
    }
  ]
};

const followPageReducer = handleActions(
  {
    [getCategoriesSuccess](state, action) {
      console.log(action.response.data.content);
      return {
        ...state,
        categories: action.response.data.content
      };
    }
  },
  defaultState
);

export default followPageReducer;
