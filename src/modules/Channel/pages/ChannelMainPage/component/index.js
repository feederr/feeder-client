import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import styles from "./styles";
import { Modal, withStyles } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

const ChannelMainPage = ({
  classes,
  channelInfo,
  news,
  openDescriptionModal,
  isModalOpened,
  viewableItem
}) => {
  return (
    <Grid className={classes.mainLayout}>
      <Typography className={classes.channelTitle}>
        {channelInfo.title}
      </Typography>
      <hr style={{ color: "#a3a09c" }} />
      <Typography style={{ paddingBottom: "3em" }}>
        {channelInfo.description}
      </Typography>
      <Grid container justify="center">
        {news
          ? news.map(item => {
              return (
                <Grid
                  item
                  key={item.id}
                  container
                  direction="row"
                  style={{
                    padding: "2em",
                    width: "100%"
                  }}
                  onClick={() => openDescriptionModal(item)}
                >
                  <img
                    src={item.image}
                    style={{
                      width: "12em",
                      height: "8em",
                      paddingRight: "2em"
                    }}
                  />
                  <Grid>
                    <Typography>{item.title}</Typography>
                  </Grid>
                </Grid>
              );
            })
          : null}
      </Grid>
      <Modal open={isModalOpened}>
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ height: "60vh", width: "40wh", background: "black" }}
        >
          <img src={viewableItem.image} />
          <Typography>{viewableItem.title}</Typography>
          <Typography>{viewableItem.description}</Typography>
        </Grid>
      </Modal>
    </Grid>
  );
};

ChannelMainPage.propTypes = {
  channelInfo: PropTypes.object,
  classes: PropTypes.object,
  news: PropTypes.arrayOf(PropTypes.object),
  openDescriptionModal: PropTypes.func,
  isModalOpened: PropTypes.bool,
  viewableItem: PropTypes.object
};

export default withStyles(styles)(ChannelMainPage);
