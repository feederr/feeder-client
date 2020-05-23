import React from "react";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";

import styles from "./styles";

const MessageBox = props => {
  const { classes, children } = props;

  return (
    <div className={classes.messageContainer}>
      <div className={classes.message}>{children}</div>
    </div>
  );
};

MessageBox.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.string.isRequired
};

export default withStyles(styles)(MessageBox);
