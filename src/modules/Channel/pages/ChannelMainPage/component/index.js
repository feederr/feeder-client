import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import styles from "./styles";
import { withStyles } from "@material-ui/core";
import parse from "html-react-parser";

const ChannelMainPage = ({ classes, channelInfo, news }) => {
  return (
    <Grid className={classes.mainLayout}>
      <Typography className={classes.channelTitle}>
        {channelInfo.title}
      </Typography>
      <hr style={{ color: "#a3a09c" }} />
      <Typography>{channelInfo.description}</Typography>
      <Grid>
        {news
          ? news.map(item => {
              console.log(item.image);
              return (
                <Grid key={item.id} container direction="row">
                  <img
                    src={item.image}
                    style={{ width: "5em", height: "5em" }}
                  />
                  <Typography className={classes.mainTitle}>
                    {item.title}
                  </Typography>
                </Grid>
              );
            })
          : null}
      </Grid>
    </Grid>
  );
};

ChannelMainPage.propTypes = {
  channelInfo: PropTypes.object,
  classes: PropTypes.object,
  news: PropTypes.arrayOf(PropTypes.object)
};

export default withStyles(styles)(ChannelMainPage);
