import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const SearchPage = ({ classes, searchString, onSearchStringChanged }) => {
  return (
    <React.Fragment>
      <div className={classes.mainLayout}>
        <Typography className={classes.mainTitle}>Search</Typography>
        <hr style={{ color: "white" }} />
        <Typography className={classes.inspiration}>
          Search in your Feeder
        </Typography>
        <TextField
          className={classes.searchInput}
          variant="outlined"
          value={searchString}
          onChange={onSearchStringChanged}
        />
      </div>
    </React.Fragment>
  );
};

SearchPage.propTypes = {
  classes: PropTypes.object.isRequired,
  searchString: PropTypes.string,
  onSearchStringChanged: PropTypes.func
};

export default withStyles(styles)(SearchPage);
