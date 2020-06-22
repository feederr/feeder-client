import { handleActions } from "redux-actions";
import {
  createNewCompilationRequest,
  createNewCompilationSuccess,
  getChannelsForCompilationSuccess,
  getCompilationsSuccess,
  openCompilationAction
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
    [getChannelsForCompilationSuccess](state, action) {
      const channelsId = [];
      const channelsForCompilation = action.response.data.content;
      channelsForCompilation.forEach(channel => {
        channelsId.push(channel.id);
      });
      const compilationId = action.payload.compilationId;
      const compilationList = state.compilationsList;
      compilationList.forEach(compilation => {
        compilation.isOpened = false;
        if (compilation.id === compilationId) {
          compilation.channelsInfo = channelsForCompilation;
          compilation.channelsId = channelsId;
        }
      });
      return {
        ...state,
        compilationList: compilationList
      };
    },
    [openCompilationAction](state, action) {
      return {
        ...state,
        compilationsList: [...action.payload]
      };
    }
  },
  defaultState
);

export default layoutReducer;
