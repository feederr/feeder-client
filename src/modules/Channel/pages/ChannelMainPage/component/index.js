import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const ChannelMainPage = ({ classes, channelInfo, news }) => {
  return (
    <Grid>
      <Typography>{channelInfo.title}</Typography>
      <Typography>{channelInfo.description}</Typography>
      // statistics info should be here
      {/*<Grid>*/}
      {/*  {news*/}
      {/*    ? news.map(item => (*/}
      {/*        <Grid key={item.id}>*/}
      {/*          <Typography>{item.title}</Typography>*/}
      {/*          <Typography>{item.description}</Typography>*/}
      {/*          <Typography>{item.pubDate}</Typography>*/}
      {/*        </Grid>*/}
      {/*      ))*/}
      {/*    : null}*/}
      {/*</Grid>*/}
      <Grid id="randomtron" />
    </Grid>
  );
};

ChannelMainPage.propTypes = {
  channelInfo: PropTypes.object,
  classes: PropTypes.object,
  news: PropTypes.arrayOf(PropTypes.object)
};

export default ChannelMainPage;
