import { handleActions } from "redux-actions";
import {
  createNewCompilationRequest,
  createNewCompilationSuccess,
  getChannelsForCompilationSuccess,
  getCompilationsSuccess
} from "./actions";

const defaultState = {
  compilationsList: [],
  isCompilationCreating: false
};

const layoutReducer = handleActions(
  {
    [createNewCompilationRequest](state) {
      return {
        ...state,
        isCompilationCreating: true
      };
    },
    [createNewCompilationSuccess](state, action) {
      const currentList = state.compilationsList;
      currentList.push(action.response.content);
      return {
        ...state,
        compilationsList: currentList,
        isCompilationCreating: false
      };
    },
    [getCompilationsSuccess](state, action) {
      const currentList = state.compilationsList;
      action.response.data.content.forEach(compilation =>
        currentList.push(compilation)
      );
      return {
        ...state,
        compilationsList: currentList
      };
    },
    [getChannelsForCompilationSuccess](state, action) {}
  },
  defaultState
);

export default layoutReducer;
