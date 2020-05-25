import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import styles from "./styles";
import {Button} from "@material-ui/core";

const SidebarStripe = ({classes}) => {
  return (
    // <div className={classes.container}>
    //   <div className={classes.stripeContent}>
    //     <Button className={classes.homeButton}/>
    //     <div className={classes.splitOfButtons}>
    //       <Button className={classes.subscriptionButton}/>
    //       <Button className={classes.searchButton}/>
    //     </div>
    //     <Button className={classes.accountLogoButton}/>
    //   </div>
    //   <div className={classes.mainContent} />
    // </div>
    <div className={classes.containerFlex}>
      <div className={classes.containerSide}>
        <Button className={classes.homeButton}/>
        <div className={classes.splitOfButtons}>
          <Button className={classes.subscriptionButton}/>
          <Button className={classes.searchButton}/>
        </div>
        <Button className={classes.accountLogoButton}/>
      </div>
      <div className={classes.containerContent}>

      </div>
    </div>
  );
}

SidebarStripe.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SidebarStripe);
