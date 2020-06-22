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
import CircularProgress from "@material-ui/core/CircularProgress";
import { Modal } from "@material-ui/core";

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
  allCompilations,
  isCompilationCreating,
  isCompilationCreated,
  channelsForCompilation,
  openCompilation
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
        <Typography className={classes.menuItemTitle}>
          Follow new sources
        </Typography>
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
      <Grid container direction="column" style={{ paddingLeft: "1em" }}>
        {allCompilations &&
          allCompilations.map(compilation => (
            <Grid key={compilation.id}>
              <Grid item container direction="row" alignItems="center">
                <KeyboardArrowRightIcon
                  className={`${classes.arrowIcon} ${
                    compilation.isOpened ? classes.moveArrow : null
                  }`}
                  onClick={() => openCompilation(compilation)}
                />
                <Typography className={classes.menuItemTitle}>
                  {compilation.name}
                </Typography>
              </Grid>
              <Grid
                className={`${
                  compilation.isOpened
                    ? classes.openedSpecificChannels
                    : classes.closedSpecificChannels
                }`}
              >
                {compilation.channels &&
                  compilation.channels.map(channel => (
                    <Grid container key={channel.id} direction="row">
                      <img
                        src={channel.image.url}
                        style={{
                          width: "1em",
                          height: "1em"
                        }}
                      />
                      <Grid style={{ paddingLeft: "0.5em" }}>
                        {channel.title}
                      </Grid>
                    </Grid>
                  ))}
              </Grid>
            </Grid>
          ))}
      </Grid>
      <Button style={{ margin: "auto", width: "100%" }} onClick={onToggleModal}>
        Create New Feed
      </Button>
      <Dialog
        open={isModalOpen && !isCompilationCreated}
        onClose={onToggleModal}
      >
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
      <Modal open={isCompilationCreating}>
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ height: "100%" }}
        >
          <CircularProgress />
        </Grid>
      </Modal>
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
  allCompilations: PropTypes.array,
  isCompilationCreating: PropTypes.bool,
  isCompilationCreated: PropTypes.bool,
  channelsForCompilation: PropTypes.array,
  openCompilation: PropTypes.func
};

export default withStyles(styles)(OptionalMenuLayout);
