import React from "react";
import Typography from "@material-ui/core/Typography";
import ImageSearchIcon from "@material-ui/icons/ImageSearch";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import PropTypes from "prop-types";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import Popover from "@material-ui/core/Popover";

const ChannelPreview = ({
  classes,
  channelImageUrl,
  nameOfChannel,
  followUpChannel,
  onClosePopup,
  onOpenPopup,
  anchorForPopupEl,
  descriptionForChannel,
  isPopupOpen,
  compilationsList,
  redirectToNews
}) => {
  return (
    <Grid className={classes.mainLayout}>
      <Grid>
        {channelImageUrl ? (
          <img src={channelImageUrl} className={classes.channelImage} />
        ) : (
          <ImageSearchIcon />
        )}
      </Grid>
      <Grid container direction="column">
        <Grid className={classes.titleButtonLine}>
          <Typography
            className={classes.mainTitle}
            onClick={() => redirectToNews(nameOfChannel)}
          >
            {nameOfChannel}
          </Typography>
          <Button
            variant="outlined"
            color="inherit"
            onClick={e => onOpenPopup(e)}
            className={classes.followButton}
          >
            FOLLOW
          </Button>
          <Popover
            open={isPopupOpen}
            style={{ padding: "1em" }}
            anchorEl={anchorForPopupEl}
            onClose={onClosePopup}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center"
            }}
          >
            <Grid className={classes.popupLayout}>
              <Typography style={{ marginBottom: "1em" }}>
                Choose the compilation
              </Typography>
              <Grid>
                {compilationsList
                  ? compilationsList.map(compilation => (
                      <Grid
                        container
                        direction="row"
                        alignItems="center"
                        key={compilation.id}
                        onClick={() => followUpChannel(compilation)}
                        className={classes.popupCompilation}
                      >
                        <PlaylistAddIcon style={{ marginRight: "0.8em" }} />
                        <Typography>{compilation.name}</Typography>
                      </Grid>
                    ))
                  : null}
              </Grid>
            </Grid>
          </Popover>
        </Grid>
        <Grid className={classes.descriptionForChannel}>
          {descriptionForChannel}
        </Grid>
      </Grid>
    </Grid>
  );
};

ChannelPreview.propTypes = {
  classes: PropTypes.object,
  anchorForPopupEl: PropTypes.object,
  channelImageUrl: PropTypes.string,
  nameOfChannel: PropTypes.string,
  followUpChannel: PropTypes.func,
  descriptionForChannel: PropTypes.string,
  onClosePopup: PropTypes.func,
  onOpenPopup: PropTypes.func,
  isPopupOpen: PropTypes.bool,
  compilationsList: PropTypes.array,
  redirectToNews: PropTypes.func
};

export default withStyles(styles)(ChannelPreview);
