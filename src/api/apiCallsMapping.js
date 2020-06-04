import * as signUpActionCreators from "../modules/Auth/pages/SignUp/actions";
import * as signInActionCreators from "../modules/Auth/pages/SignIn/actions";
import * as tokenActionCreators from "../modules/Auth/actions/tokenActions";
import { getChannelsRequest } from "../modules/Search/store/actions";
import * as authCall from "../modules/Auth/api";
import { getChannels } from "../modules/Search/api";

const mapping = {
  [signUpActionCreators.signUpRequest]: authCall.signUpRequest,
  [signInActionCreators.signInRequest]: authCall.signInRequest,
  [tokenActionCreators.refreshTokenRequest]: authCall.refreshTokenRequest,
  [tokenActionCreators.getClientTokenRequest]: authCall.tokenForClientRequest,
  [getChannelsRequest]: getChannels
};
const apiCallsMapping = actionType => {
  if (mapping.hasOwnProperty(actionType)) {
    return mapping[actionType];
  } else {
    throw new Error("There is no such mapped action");
  }
};

export default apiCallsMapping;
