import React from "react";
import {AppBar} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Header = () => (
    <AppBar position="static">
        <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
            </IconButton>
            <Typography variant="h6">
                Feeds
            </Typography>
            <Button color="inherit">Login</Button>
        </Toolbar>
    </AppBar>
);


export default Header;