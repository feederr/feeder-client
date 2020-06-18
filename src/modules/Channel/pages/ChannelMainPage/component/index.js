import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import styles from "./styles";
import { withStyles } from "@material-ui/core";

const ChannelMainPage = ({ classes, channelInfo, news }) => {
  return (
    <Grid className={classes.mainLayout}>
      <Typography className={classes.channelTitle}>{channelInfo.title}</Typography>
      <hr style={{ color: "white" }} />
      <Typography>{channelInfo.description}</Typography>
      {/*// statistics info should be here*/}
      <Grid>
        {news
          ? news.map(item => (
              <Grid key={item.id}>
                <Typography className={classes.mainTitle}>
                  {item.title}
                </Typography>
                <Typography
                  id={item.id}
                  className={classes.descriptionForNews}
                />
                <Typography>{item.pubDate}</Typography>
              </Grid>
            ))
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
