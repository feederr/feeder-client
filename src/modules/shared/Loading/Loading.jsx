import React from "react";
import { CircularProgress, withStyles } from "@material-ui/core";

const styles = () => ({
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(100, 100, 100, 0.5)",
    position: "absolute",
    zIndex: 9999,
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

const Loading = ({ classes }) => {
  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
};

export default withStyles(styles)(Loading);
