import React from "react";
import { toastr } from "react-redux-toastr";
import MessageBox from "./components/messageBox";

const getDefaultOptions = message => {
  return {
    component: <MessageBox>{message}</MessageBox>
  };
};

export const showNotification = (type, message) => {
  toastr[type]("", getDefaultOptions(message));
};
