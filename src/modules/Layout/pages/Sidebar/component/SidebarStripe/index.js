import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { IconButton, Tooltip } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import GrainIcon from "@material-ui/icons/Grain";
import Grid from "@material-ui/core/Grid";

const SidebarStripe = ({ classes, onNavButtonClicked, children }) => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.navigationSideBar}>
        <div className={classes.logoButton}>
          <Tooltip title="Home">
            <IconButton
              color="default"
              className={classes.navButton}
              onClick={() => onNavButtonClicked("Home")}
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
              onClick={() => onNavButtonClicked("Follow")}
            >
              <AddIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Search">
            <IconButton
              color="primary"
              className={classes.navButton}
              onClick={() => onNavButtonClicked("Search")}
            >
              <SearchIcon />
            </IconButton>
          </Tooltip>
        </div>
        <div className={classes.accountButton}>
          <Tooltip title="Account settings">
            <IconButton
              name="Profile"
              color="primary"
              className={classes.navButton}
              onClick={() => onNavButtonClicked("Account")}
            >
              <AccountCircleIcon />
            </IconButton>
          </Tooltip>
        </div>
      </div>
      <div className={classes.containerContent}>
        <div className={classes.content}>
          <Grid>{children}</Grid>
        </div>
      </div>
    </div>
  );
};

SidebarStripe.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  onNavButtonClicked: PropTypes.func
};

export default withStyles(styles)(SidebarStripe);
