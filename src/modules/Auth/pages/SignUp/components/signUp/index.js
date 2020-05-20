import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import InlineError from "../../../../../shared/Messages/InlineError";
import {withStyles} from "@material-ui/core/styles";
import styles from "./styles";
import Card from "@material-ui/core/Card";

const Register = ({data, onChange, onSubmit, errors, classes}) => {
    document.body.className = classes.root;
    return (
        <Card className={classes.mainLayout}>
            <Typography className={classes.mainTitle}>
                Feeder
            </Typography>
            <Typography className={classes.signUpTitle} component="h1" variant="h5">
                Sign Up
            </Typography>
            <form className={classes.form} onSubmit={onSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="fname"
                            name="firstName"
                            value={data.firstName || ""}
                            variant="outlined"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            onChange={onChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            value={data.lastName || ""}
                            autoComplete="lname"
                            onChange={onChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="userName"
                            label="User Name"
                            name="userName"
                            value={data.userName || ""}
                            autoComplete="userName"
                            onChange={onChange}
                        />
                        {errors.userName && <InlineError message={errors.userName}/>}
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            error={!!errors.email}
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            value={data.email || ""}
                            autoComplete="email"
                            onChange={onChange}
                        />
                        {errors.email && <InlineError message={errors.email}/>}
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            error={!!errors.password}
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            value={data.password || ""}
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={onChange}
                        />
                        {errors.password && <InlineError message={errors.password}/>}
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            error={!!errors.repeatPassword}
                            variant="outlined"
                            required
                            fullWidth
                            name="repeatPassword"
                            value={data.repeatPassword || ""}
                            label="Repeat password"
                            type="password"
                            id="repeatPassword"
                            onChange={onChange}
                        />
                        {errors.repeatPassword && (
                            <InlineError message={errors.repeatPassword}/>
                        )}
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submitButton}
                >
                    Sign Up
                </Button>
                <Link to="/auth/login">
                    Already have an account? Click here to login
                </Link>
            </form>
        </Card>
    );
};

Register.propTypes = {
    classes: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    data: PropTypes.shape({
        email: PropTypes.string,
        password: PropTypes.string,
        repeatPassword: PropTypes.string,
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        userName: PropTypes.string
    })
};

export default withStyles(styles)(Register);
