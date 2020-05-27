import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Typography from "@material-ui/core/Typography";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import MenuIcon from "@material-ui/icons/Menu";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import Grid from "@material-ui/core/Grid";

const OptionalMenuLayout = ({
  classes,
  currentPathName,
  loadTopicChannels,
  channelsListOpened,
  redirectToSpecificSection
}) => {
  return (
    <div className={classes.mainLayout}>
      <div style={{ height: "2.5em" }} />
      <Grid
        onClick={() => redirectToSpecificSection("Home")}
        className={`${classes.menuItem}  ${
          currentPathName === "/home" ? classes.menuItemSelected : null
        }`}
      >
        <div
          className={`${classes.outlineMenuElement} ${
            currentPathName === "/home" ? classes.selectOutline : null
          }`}
        />
        <CalendarTodayIcon className={classes.navButton} />
        <Typography className={classes.menuItemTitle}>Today</Typography>
      </Grid>
      <Grid
        onClick={() => redirectToSpecificSection("Follow")}
        className={`${classes.menuItem}  ${
          currentPathName === "/follow" ? classes.menuItemSelected : null
        }`}
      >
        <div
          className={`${classes.outlineMenuElement} ${
            currentPathName === "/follow" ? classes.selectOutline : null
          }`}
        />
        <BookmarkBorderIcon className={`${classes.bookmarkIcon} `} />
        <Typography className={classes.menuItemTitle}>Read Later</Typography>
      </Grid>
      <div style={{ height: "1.5em" }} />
      <Typography className={classes.feedsTitle}>FEEDS</Typography>
      <div style={{ height: "0.5em" }} />
      <Grid
        onClick={() => redirectToSpecificSection("Search")}
        className={`${classes.menuItem}  ${
          currentPathName === "/search" ? classes.menuItemSelected : null
        }`}
      >
        <div
          className={`${classes.outlineMenuElement} ${
            currentPathName === "/search" ? classes.selectOutline : null
          }`}
        />
        <MenuIcon className={`${classes.bookmarkIcon} `} />
        <Typography className={classes.menuItemTitle}>All</Typography>
      </Grid>
      <Grid
        onClick={() => redirectToSpecificSection("Follow")}
        className={`${classes.menuItem}  ${
          currentPathName === "/random" ? classes.menuItemSelected : null
        }`}
      >
        <div
          className={`${classes.outlineMenuElement} ${
            currentPathName === "/random" ? classes.selectOutline : null
          }`}
        />
        <KeyboardArrowRightIcon
          className={`${classes.arrowIcon} ${
            channelsListOpened ? classes.moveArrow : null
          }`}
          onClick={loadTopicChannels}
        />
        <Typography className={classes.menuItemTitle}>Subscription</Typography>
      </Grid>
      <div
        className={`${
          channelsListOpened
            ? classes.openedSpecificChannels
            : classes.closedSpecificChannels
        }`}
      >
        <Grid container direction="row" alignItems="center">
          <LibraryMusicIcon color="error" />
          <Typography className={classes.specificChannel}>Item</Typography>
        </Grid>
        <Grid container direction="row" alignItems="center">
          <LibraryMusicIcon color="error" />
          <Typography className={classes.specificChannel}>Item</Typography>
        </Grid>
        <Grid container direction="row" alignItems="center">
          <LibraryMusicIcon color="error" />
          <Typography className={classes.specificChannel}>Item</Typography>
        </Grid>
        <Grid container direction="row" alignItems="center">
          <LibraryMusicIcon color="error" />
          <Typography className={classes.specificChannel}>Item</Typography>
        </Grid>
        <Grid container direction="row" alignItems="center">
          <LibraryMusicIcon color="error" />
          <Typography className={classes.specificChannel}>Item</Typography>
        </Grid>
      </div>
    </div>
  );
};

OptionalMenuLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  currentPathName: PropTypes.string.isRequired,
  loadTopicChannels: PropTypes.func,
  channelsListOpened: PropTypes.bool.isRequired,
  redirectToSpecificSection: PropTypes.func.isRequired
};

export default withStyles(styles)(OptionalMenuLayout);
