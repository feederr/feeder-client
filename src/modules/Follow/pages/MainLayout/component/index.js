import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";

const FollowLayout = ({ classes }) => {
  return (
    <div className={classes.mainLayout}>
      <Typography className={classes.mainTitle}>Follow New Sources</Typography>
      <hr style={{ color: "white" }} />
      <Typography className={classes.inspiration}>
        Discover the best sources for any topic
      </Typography>
    </div>
  );
};

FollowLayout.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FollowLayout);
