import { createAction } from "redux-actions";

export const redirectToNewsForChannel = createAction(
  "REDIRECT_TO_NEWS_FOR_CHANNEL"
);

export const getNewsForChannelsRequest = createAction(
  "GET_NEWS_FOR_CHANNEL_REQUEST"
);
export const getNewsForChannelsSuccess = createAction(
  "GET_NEWS_FOR_CHANNEL_SUCCESS"
);
export const getNewsForChannelsFailed = createAction(
  "GET_NEWS_FOR_CHANNEL_FAILED"
);

export const getStatisticsForChannelRequest = createAction(
  "GET_STATISTICS_FOR_CHANNEL_REQUEST"
);
export const getStatisticsForChannelSuccess = createAction(
  "GET_STATISTICS_FOR_CHANNEL_SUCCESS"
);

export const getStatisticsForItemRequest = createAction(
  "GET_STATISTICS_FOR_ITEM_REQUEST"
);
export const getStatisticsForItemSuccess = createAction(
  "GET_STATISTICS_FOR_ITEM_SUCCESS"
);
