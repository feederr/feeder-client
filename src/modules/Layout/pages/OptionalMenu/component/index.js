import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Typography from "@material-ui/core/Typography";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

const OptionalMenuLayout = ({
  classes,
  currentPathName,
  loadTopicChannels,
  channelsListOpened,
  redirectToSpecificSection,
  isModalOpen,
  onToggleModal,
  compilationName,
  onCompilationNameChanged,
  saveNewCompilation,
  allCompilations
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
        container
        direction="column"
        onClick={() => redirectToSpecificSection("Follow")}
        className={`${classes.menuItem}  ${
          currentPathName === "/random" ? classes.menuItemSelected : null
        }`}
        style={{ paddingLeft: "1em" }}
      >
        <Grid item container direction="row" alignItems="center">
          <KeyboardArrowRightIcon
            className={`${classes.arrowIcon} ${
              channelsListOpened ? classes.moveArrow : null
            }`}
            onClick={loadTopicChannels}
          />
          <Typography className={classes.menuItemTitle}>
            Subscription
          </Typography>
        </Grid>
        <Grid
          className={`${
            channelsListOpened
              ? classes.openedSpecificChannels
              : classes.closedSpecificChannels
          }`}
        >
          {allCompilations
            ? allCompilations.map(compilation => (
                <Grid key={compilation.id} className={classes.compilationItem}>
                  <Grid>{compilation.name}</Grid>
                  <Grid>
                    {compilation.list
                      ? compilation.list.map((item, itemId) => (
                          <Grid key={itemId}>sadfasf</Grid>
                        ))
                      : null}
                  </Grid>
                </Grid>
              ))
            : null}
        </Grid>
      </Grid>
      <Button style={{ margin: "auto", width: "100%" }} onClick={onToggleModal}>
        Create New Feed
      </Button>
      <Dialog open={isModalOpen} onClose={onToggleModal}>
        <DialogTitle>Create New Compilation</DialogTitle>
        <DialogContent className={classes.modalLayout}>
          <TextField
            value={compilationName}
            variant="outlined"
            required
            fullWidth
            label="Name of compilation"
            onChange={onCompilationNameChanged}
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="inherit"
            style={{ background: "green" }}
            onClick={saveNewCompilation}
          >
            Save
          </Button>
          <Button variant="outlined" color="secondary" onClick={onToggleModal}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

OptionalMenuLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  currentPathName: PropTypes.string.isRequired,
  loadTopicChannels: PropTypes.func,
  channelsListOpened: PropTypes.bool.isRequired,
  redirectToSpecificSection: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool,
  onToggleModal: PropTypes.func,
  compilationName: PropTypes.string,
  onCompilationNameChanged: PropTypes.func,
  saveNewCompilation: PropTypes.func,
  allCompilations: PropTypes.array
};

export default withStyles(styles)(OptionalMenuLayout);
