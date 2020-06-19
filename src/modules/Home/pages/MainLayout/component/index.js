import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";

const HomeLayout = ({ classes }) => {
  return (
    <div className={classes.mainLayout}>
      <Typography className={classes.mainTitle}>Today</Typography>
      <hr style={{ color: "#a3a09c" }} />
      <Typography className={classes.inspiration}>
        The insights you need to keep ahead
      </Typography>
    </div>
  );
};

HomeLayout.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomeLayout);
