import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import InlineError from "../../../../../shared/Messages/InlineError";
import Card from "@material-ui/core/Card";

const Login = ({ data, onChange, onSubmit, serverResponseErrors, classes }) => {
  document.body.className = classes.root;
  return (
    <Card className={classes.mainLayout}>
      <Typography className={classes.mainTitle}>Feeder</Typography>
      <Typography className={classes.signInTitle} component="h1" variant="h5">
        Sign In
      </Typography>
      <form className={classes.form} onSubmit={onSubmit}>
        {serverResponseErrors && <InlineError message={serverResponseErrors} />}
        <Grid className={classes.inputsArea} container spacing={5}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="username"
              label="User Name"
              name="username"
              value={data.username || ""}
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              value={data.password || ""}
              label="Password"
              type="password"
              id="password"
              onChange={onChange}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submitButton}
        >
          Sign In
        </Button>
        <Link to="/auth/register">Have no account? Click here to register</Link>
      </form>
    </Card>
  );
};

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  serverResponseErrors: PropTypes.array,
  data: PropTypes.shape({
    username: PropTypes.string,
    password: PropTypes.string
  })
};

export default withStyles(styles)(Login);
