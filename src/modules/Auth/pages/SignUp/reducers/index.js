import { handleActions } from "redux-actions";
import * as actionCreators from "../actions";

const defaultState = "";

export default handleActions(
  {
    [actionCreators.signUpSuccess](state, action) {
      return { errorMessage: "", email: action.payload.email };
    },
    [actionCreators.signUpFailed]() {
      // TODO check for server error
      return {
        errorMessage: "Incorrect email or password."
      };
    }
  },
  defaultState
);
