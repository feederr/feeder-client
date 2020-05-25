import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { IconButton } from "@material-ui/core";
// import LocationSearchingIcon from "@material-ui/icons/LocationSearching";
import SearchIcon from "@material-ui/icons/Search";
import AddBoxIcon from "@material-ui/icons/AddBox";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import GrainIcon from "@material-ui/icons/Grain";

const SidebarStripe = ({ classes }) => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.navigationSideBar}>
        <IconButton
          color="primary"
          className={`${classes.navButton} ${classes.logoButton}`}
        >
          <GrainIcon />
        </IconButton>
        <div className={classes.splitOfButtons}>
          <IconButton color="primary" className={classes.navButton}>
            <AddBoxIcon />
          </IconButton>
          <IconButton color="primary" className={classes.navButton}>
            <SearchIcon />
          </IconButton>
        </div>
        <IconButton
          color="primary"
          className={`${classes.navButton} ${classes.accountButton}`}
        >
          <AccountCircleIcon />
        </IconButton>
      </div>
      <div className={classes.containerContent} />
    </div>
  );
};

SidebarStripe.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SidebarStripe);
