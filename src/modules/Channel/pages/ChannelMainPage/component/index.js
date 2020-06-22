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
  viewableItem,
  closeModal
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
                  {item.image && (
                    <img
                      src={item.image}
                      style={{
                        width: "12em",
                        height: "8em",
                        paddingRight: "2em"
                      }}
                    />
                  )}
                  <Grid>
                    <Typography>{item.title}</Typography>
                  </Grid>
                </Grid>
              );
            })
          : null}
      </Grid>
      <Modal
        open={isModalOpened}
        onClose={closeModal}
        style={{
          display: "flex",
          alignContent: "center",
          border: "1px solid wheat",
          borderRadius: "0.5em"
        }}
      >
        <Grid
          container
          alignItems="center"
          direction="column"
          style={{
            background: "black",

            height: "70%",
            width: "40%",
            margin: "auto",
            top: "50%",
            overflowY: "auto"
          }}
        >
          <Typography style={{ fontSize: "2em", padding: "1em" }}>
            {viewableItem.title}
          </Typography>
          {viewableItem.image && (
            <img
              src={viewableItem.image}
              style={{ height: "15em", width: "30em", margin: "auto" }}
            />
          )}
          <Typography
            style={{ fontSize: "1em", padding: "0.7em" }}
            dangerouslySetInnerHTML={{ __html: viewableItem.description }}
          />
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
  viewableItem: PropTypes.object,
  closeModal: PropTypes.func
};

export default withStyles(styles)(ChannelMainPage);
