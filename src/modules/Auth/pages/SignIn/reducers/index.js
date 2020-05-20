import { handleActions } from "redux-actions";
import { signInFailed, signInSuccess } from "../actions";

const defaultState = "";

export default handleActions(
  {
    [signInFailed]() {
      return {
        errorMessage: "Incorrect email or password."
      };
    },
    [signInSuccess]() {
      return defaultState;
    }
  },
  defaultState
);
