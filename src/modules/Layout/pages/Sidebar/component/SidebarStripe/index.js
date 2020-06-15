import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import OptionalMenuContainer from "../../../OptionalMenu/container/OptionalMenuContainer";
import { IconButton, Tooltip } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import GrainIcon from "@material-ui/icons/Grain";
import Grid from "@material-ui/core/Grid";

const SidebarStripe = ({
  classes,
  onNavButtonClicked,
  onOpenMenuButtonClicked,
  onMainContentClicked,
  menuOpened,
  children
}) => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.navigationSideBar}>
        <div className={classes.splitOfButtons}>
          <div className={classes.logoButton}>
            <Tooltip title="Home">
              <IconButton
                className={classes.navButton}
                onClick={() => onNavButtonClicked("Home")}
              >
                <GrainIcon />
              </IconButton>
            </Tooltip>
          </div>
          <Tooltip title="Open menu">
            <IconButton
              color="default"
              className={classes.navButton}
              onClick={onOpenMenuButtonClicked}
            >
              <MenuIcon />
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
      <div
        className={`${classes.rollingOutMenu} ${
          menuOpened ? classes.moveMenu : null
        }`}
      >
        <OptionalMenuContainer />
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
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onNavButtonClicked: PropTypes.func,
  onOpenMenuButtonClicked: PropTypes.func,
  onMainContentClicked: PropTypes.func,
  menuOpened: PropTypes.bool
};

export default withStyles(styles)(SidebarStripe);
