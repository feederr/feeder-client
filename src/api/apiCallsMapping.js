import * as signUpActionCreators from "../modules/Auth/pages/SignUp/actions";
import * as signInActionCreators from "../modules/Auth/pages/SignIn/actions";
import * as tokenActionCreators from "../modules/Auth/actions/tokenActions";
import { getChannelsRequest } from "../modules/Search/store/actions";
import * as authCall from "../modules/Auth/api";
import { getChannels } from "../modules/Search/api";
import {
  followNewSourceRequest,
  getCategoriesRequest
} from "../modules/Follow/store/actions";
import { followNewSource, getAllCategories } from "../modules/Follow/api";
import {
  createNewCompilationRequest,
  deleteCompilationRequest,
  getChannelsForCompilationRequest,
  getCompilationsRequest,
  updateCompilationRequest
} from "../modules/Layout/store/actions";
import {
  createNewCompilation,
  deleteCompilation,
  getChannelsForCompilation,
  getCompilations,
  updateCompilation
} from "../modules/Layout/api";
import {
  getNewsForChannelsRequest,
  getStatisticsForChannelRequest,
  getStatisticsForItemRequest
} from "../modules/Channel/store/actions";
import {
  getNewsForChannel,
  getStatisticsForChannel,
  getStatisticsForItem
} from "../modules/Channel/api";

const mapping = {
  [signUpActionCreators.signUpRequest]: authCall.signUpRequest,
  [signInActionCreators.signInRequest]: authCall.signInRequest,
  [tokenActionCreators.refreshTokenRequest]: authCall.refreshTokenRequest,
  [tokenActionCreators.getClientTokenRequest]: authCall.tokenForClientRequest,
  [getChannelsRequest]: getChannels,
  [getCategoriesRequest]: getAllCategories,
  [followNewSourceRequest]: followNewSource,
  [createNewCompilationRequest]: createNewCompilation,
  [getCompilationsRequest]: getCompilations,
  [getChannelsForCompilationRequest]: getChannelsForCompilation,
  [updateCompilationRequest]: updateCompilation,
  [deleteCompilationRequest]: deleteCompilation,
  [getNewsForChannelsRequest]: getNewsForChannel,
  [getStatisticsForChannelRequest]: getStatisticsForChannel,
  [getStatisticsForItemRequest]: getStatisticsForItem
};
const apiCallsMapping = actionType => {
  if (mapping.hasOwnProperty(actionType)) {
    return mapping[actionType];
  } else {
    throw new Error("There is no such mapped action");
  }
};

export default apiCallsMapping;
