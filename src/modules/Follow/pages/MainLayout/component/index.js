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
  onSelectedCategoryChanged,
  selectCategoryFromImage,
  someArray
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
          {/*<Autocomplete*/}
          {/*  id="autocompleteForCategory"*/}
          {/*  defaultValue={someArray}*/}
          {/*  multiple*/}
          {/*  onChange={(e, value) => onSelectedCategoryChanged(e, value)}*/}
          {/*  options={categoriesList}*/}
          {/*  getOptionLabel={option => option.name}*/}
          {/*  renderInput={params => (*/}
          {/*    <TextField {...params} variant="outlined" label="Category" />*/}
          {/*  )}*/}
          {/*  renderOption={option => <Typography>{option.name}</Typography>}*/}
          {/*/>*/}
          <Autocomplete
            multiple
            limitTags={2}
            id="multiple-limit-tags"
            options={categoriesList}
            getOptionLabel={option => option.name}
            defaultValue={someArray.map(ar => ar)}
            renderInput={params => (
              <TextField
                {...params}
                variant="outlined"
                label="limitTags"
                placeholder="Favorites"
              />
            )}
          />
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        style={{ height: "40em", overflowY: "scroll" }}
      >
        {categoriesList
          ? categoriesList.map(category => (
              <Grid
                key={category.id}
                style={{ marginTop: "3em" }}
                onClick={() => selectCategoryFromImage(category)}
              >
                <img
                  src={category.imageUrl}
                  className={classes.categoryImage}
                />
                <Typography className={classes.nameOfCategoryForImage}>
                  {category.name}
                </Typography>
              </Grid>
            ))
          : null}
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
  rssLink: PropTypes.string,
  selectCategoryFromImage: PropTypes.func
};

export default withStyles(styles)(FollowLayout);