import { handleActions } from "redux-actions";
import {
  createNewCompilationRequest,
  createNewCompilationSuccess,
  getChannelsForCompilationSuccess,
  getCompilationsSuccess
} from "./actions";

const defaultState = {
  compilationsList: [],
  isCompilationCreating: false,
  isCompilationCreated: false
};

const layoutReducer = handleActions(
  {
    [createNewCompilationRequest](state) {
      return {
        ...state,
        isCompilationCreating: true,
        isCompilationCreated: false
      };
    },
    [createNewCompilationSuccess](state, action) {
      const currentList = state.compilationsList;
      currentList.push(action.response.data);
      return {
        ...state,
        compilationsList: currentList,
        isCompilationCreating: false,
        isCompilationCreated: true
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
