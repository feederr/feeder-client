import { createAction } from "redux-actions";

export const getCategoriesRequest = createAction("GET_CATEGORIES_REQUEST");
export const getCategoriesSuccess = createAction("GET_CATEGORIES_SUCCESS");
export const getCategoriesFailed = createAction("GET_CATEGORIES_FAILED");

export const followNewSourceRequest = createAction("FOLLOW_NEW_SOURCE_REQUEST");
export const followNewSourceSuccess = createAction("FOLLOW_NEW_SOURCE_SUCCESS");
export const followNewSourceFailed = createAction("FOLLOW_NEW_SOURCE_FAILED");
