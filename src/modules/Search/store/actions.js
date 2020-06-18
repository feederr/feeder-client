import { createAction } from "redux-actions";

export const getChannelsRequest = createAction("GET_CHANNELS_REQUEST");
export const getChannelsSuccess = createAction("GET_CHANNELS_SUCCESS");
export const getChannelsFailed = createAction("GET_CHANNELS_FAILED");
