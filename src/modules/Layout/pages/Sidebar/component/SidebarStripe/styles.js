const styles = () => ({
  container: {
    width: "100wh",
    height: "100vh",
    padding: "0"
  },
  /* stripe content */
  stripeContent: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    background: "blue",
    width: "100%",
    height: "100%"
  },
  homeButton: {
    width: "1em",
    height: "1em",
    alignSelf: "flex-start",
    background: "yellow"
  },
  splitOfButtons: {
    alignSelf: "flex-center"
  },
  subscriptionButton: {
    background: "yellow"
  },
  searchButton: {
    background: "yellow"
  },
  accountLogoButton: {
    alignSelf: "flex-end",
    background: "yellow"
  },
  /* stripe content */
  /*-------------------*/
  /* main content */
  mainContent: {
    display: "inline-block",
    background: "black",
    width: "100%",
    height: "100%"
  },
  containerFlex: {
    display: "flex",
    flexDirection: "row",
    width: "100vw",
    height: "100vh"
  },
  containerSide: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    flexGrow: "1",
    background: "blue"
  },
  containerContent: {
    flexGrow: "30",
    background: "yellow"
  }
});

export default styles;
