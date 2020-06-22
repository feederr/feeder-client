import { createAction } from "redux-actions";

export const createNewCompilationRequest = createAction(
  "CREATE_NEW_COMPILATION_REQUEST"
);
export const createNewCompilationSuccess = createAction(
  "CREATE_NEW_COMPILATION_SUCCESS"
);
export const createNewCompilationFailed = createAction(
  "CREATE_NEW_COMPILATION_FAILED"
);

export const getCompilationsRequest = createAction("GET_COMPILATIONS_REQUEST");
export const getCompilationsSuccess = createAction("GET_COMPILATIONS_SUCCESS");
export const getCompilationsFailed = createAction("GET_COMPILATIONS_FAILED");

export const getChannelsForCompilationRequest = createAction(
  "GET_CHANNELS_FOR_COMPILATION_REQUEST"
);
export const getChannelsForCompilationSuccess = createAction(
  "GET_CHANNELS_FOR_COMPILATION_SUCCESS"
);
export const getChannelsForCompilationFailed = createAction(
  "GET_CHANNELS_FOR_COMPILATION_FAILED"
);

export const updateCompilationRequest = createAction(
  "UPDATE_COMPILATION_REQUEST"
);
export const updateCompilationSuccess = createAction(
  "UPDATE_COMPILATION_SUCCESS"
);
export const updateCompilationFailed = createAction(
  "UPDATE_COMPILATION_FAILED"
);

export const deleteCompilationRequest = createAction(
  "DELETE_COMPILATION_REQUEST"
);
export const deleteCompilationSuccess = createAction(
  "DELETE_COMPILATION_SUCCESS"
);
export const deleteCompilationFailed = createAction(
  "DELETE_COMPILATION_FAILED"
);
export const openCompilationAction = createAction("OPEN_COMPILATION_ACTION");
