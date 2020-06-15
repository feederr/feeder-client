import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Autocomplete from "@material-ui/lab/Autocomplete";

const FollowLayout = ({
  classes,
  categoriesList,
  rssLink,
  onRssLinkChanged,
  followNewSource,
  onSelectedCategoryChanged
}) => {
  return (
    <div className={classes.mainLayout}>
      <Typography className={classes.mainTitle}>Follow New Sources</Typography>
      <hr style={{ color: "white" }} />
      <Typography className={classes.inspiration}>
        Discover the best sources for any topic
      </Typography>
      <Grid
        container
        justify="center"
        direction="row"
        style={{ width: "100%" }}
      >
        <Grid item xs={5} md={7} lg={8} className={classes.inputField}>
          <TextField
            style={{ width: "100%" }}
            variant="outlined"
            value={rssLink}
            onChange={onRssLinkChanged}
            onKeyDown={followNewSource}
            placeholder="Paste RSS link here in order to add channel"
          />
        </Grid>
        <Grid item xs={4}>
          <Autocomplete
            multiple
            onChange={(e, value) => onSelectedCategoryChanged(e, value)}
            options={categoriesList}
            getOptionLabel={option => option.name}
            renderInput={params => (
              <TextField {...params} variant="outlined" label="Category" />
            )}
            renderOption={option => <Typography>{option.name}</Typography>}
          />
        </Grid>
      </Grid>
    </div>
  );
};

FollowLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  categoriesList: PropTypes.array,
  followNewSource: PropTypes.func,
  onSelectedCategoryChanged: PropTypes.func,
  onRssLinkChanged: PropTypes.func,
  rssLink: PropTypes.string
};

export default withStyles(styles)(FollowLayout);
