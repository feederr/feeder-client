import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const SearchPage = ({
  classes,
  onSearchStringChanged,
  searchStringValue,
  typeOfSearch,
  onAutocompleteClose,
  isLoading,
  onTypeOfSearchChanged
}) => {
  return (
    <div className={classes.mainLayout}>
      <Typography className={classes.mainTitle}>Search</Typography>
      <hr style={{ color: "white" }} />
      <Typography className={classes.inspiration}>
        Search in your Feeder
      </Typography>
      <TextField
        id="searchString"
        className={classes.searchInput}
        variant="outlined"
        value={searchStringValue}
        onChange={onSearchStringChanged}
      />
      <Select value={typeOfSearch} onChange={onTypeOfSearchChanged}>
        <MenuItem value={0}>Author</MenuItem>
        <MenuItem value={1}>Title</MenuItem>
        <MenuItem value={2}>Description</MenuItem>
      </Select>
      {/*<Autocomplete*/}
      {/*  id="asynchronous-demo"*/}
      {/*  style={{ width: 300 }}*/}
      {/*  // open={open}*/}
      {/*  // onOpen={() => {*/}
      {/*  //   setOpen(true);*/}
      {/*  // }}*/}
      {/*  // onClose={() => {*/}
      {/*  //   setOpen(false);*/}
      {/*  // }}*/}
      {/*  getOptionSelected={(option, value) => option.name === value.name}*/}
      {/*  getOptionLabel={option => option.name}*/}
      {/*  // options={options}*/}
      {/*  loading={isLoading}*/}
      {/*  renderInput={params => (*/}
      {/*    <TextField*/}
      {/*      {...params}*/}
      {/*      label="Asynchronous"*/}
      {/*      variant="outlined"*/}
      {/*      InputProps={{*/}
      {/*        ...params.InputProps,*/}
      {/*        endAdornment: (*/}
      {/*          <React.Fragment>*/}
      {/*            {isLoading ? (*/}
      {/*              <CircularProgress color="inherit" size={20} />*/}
      {/*            ) : null}*/}
      {/*            {params.InputProps.endAdornment}*/}
      {/*          </React.Fragment>*/}
      {/*        )*/}
      {/*      }}*/}
      {/*    />*/}
      {/*  )}*/}
      {/*/>*/}
    </div>
  );
};

SearchPage.propTypes = {
  classes: PropTypes.object.isRequired,
  onSearchStringChanged: PropTypes.func,
  searchStringValue: PropTypes.string,
  isLoading: PropTypes.bool,
  onTypeOfSearchChanged: PropTypes.func,
  typeOfSearch: PropTypes.number
};

export default withStyles(styles)(SearchPage);
