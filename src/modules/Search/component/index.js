import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import ImageSearchIcon from "@material-ui/icons/ImageSearch";
import Grid from "@material-ui/core/Grid";
import ChannelPreviewContainer from "../../Channel/pages/ChannelPreview/container/ChannelPreviewContainer";

const SearchPage = ({
  classes,
  onSearchStringChanged,
  searchStringValue,
  typeOfSearch,
  onTypeOfSearchChanged,
  isLoading,
  searchResults,
  onChannelSelected,
  isChannelSelected,
  selectedChannel
}) => {
  return (
    <div className={classes.mainLayout}>
      <Typography className={classes.mainTitle}>Search</Typography>
      <hr style={{ color: "#a3a09c" }} />
      <Typography className={classes.inspiration}>
        Search in your Feeder
      </Typography>
      <Grid container direction="row" style={{ width: "100%" }}>
        <Autocomplete
          id="searchString"
          className={classes.searchBar}
          options={searchResults}
          getOptionLabel={option => option.title}
          loading={isLoading}
          onSelect={(event, option) => onChannelSelected(event, option)}
          noOptionsText="There is no channels for such credentials"
          renderOption={option => (
            <Grid
              container
              direction="row"
              onClick={event => onChannelSelected(event, option)}
              onKeyPress={event => onChannelSelected(event, option)}
              onKeyPressCapture={event => onChannelSelected(event, option)}
            >
              {option.image ? (
                <img
                  src={option.image.url}
                  className={classes.imageForSearchPreview}
                  alt=""
                />
              ) : (
                <ImageSearchIcon />
              )}
              <Typography>{option.title}</Typography>
            </Grid>
          )}
          renderInput={params => (
            <TextField
              {...params}
              label="Channels"
              variant="outlined"
              value={searchStringValue}
              onChange={onSearchStringChanged}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {isLoading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                )
              }}
            />
          )}
        />
      </Grid>
      {isChannelSelected ? (
        <div>
          <ChannelPreviewContainer channelInfo={selectedChannel} />
        </div>
      ) : null}
    </div>
  );
};

SearchPage.propTypes = {
  classes: PropTypes.object.isRequired,
  onSearchStringChanged: PropTypes.func,
  searchStringValue: PropTypes.string,
  isLoading: PropTypes.bool,
  onTypeOfSearchChanged: PropTypes.func,
  typeOfSearch: PropTypes.number,
  searchResults: PropTypes.array,
  isChannelSelected: PropTypes.bool,
  onChannelSelected: PropTypes.func,
  selectedChannel: PropTypes.object
};

export default withStyles(styles)(SearchPage);
