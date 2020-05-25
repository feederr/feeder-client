import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { IconButton, Tooltip } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import GrainIcon from "@material-ui/icons/Grain";

const SidebarStripe = ({ classes, onNavButtonClicked }) => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.navigationSideBar}>
        <div className={classes.logoButton}>
          <Tooltip title="Home">
            <IconButton
              color="default"
              name="Home"
              className={classes.navButton}
              onClick={onNavButtonClicked}
            >
              <GrainIcon />
            </IconButton>
          </Tooltip>
        </div>
        <div className={classes.splitOfButtons}>
          <Tooltip title="Follow new sources">
            <IconButton
              color="primary"
              className={classes.navButton}
              onClick={onNavButtonClicked}
            >
              <AddIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Search">
            <IconButton
              color="primary"
              className={classes.navButton}
              onClick={onNavButtonClicked}
            >
              <SearchIcon />
            </IconButton>
          </Tooltip>
        </div>
        <div className={classes.accountButton}>
          <Tooltip title="Account settings">
            <IconButton
              color="primary"
              className={classes.navButton}
              onClick={onNavButtonClicked}
            >
              <AccountCircleIcon />
            </IconButton>
          </Tooltip>
        </div>
      </div>
      <div className={classes.containerContent}>
        <div className={classes.content} />
      </div>
    </div>
  );
};

SidebarStripe.propTypes = {
  classes: PropTypes.object.isRequired,
  onNavButtonClicked: PropTypes.func
};

export default withStyles(styles)(SidebarStripe);
