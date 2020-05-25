const styles = () => ({
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100vw",
    height: "100vh"
  },
  navigationSideBar: {
    display: "flex",
    width: "3em",
    justifyContent: "space-between",
    flexDirection: "column",
    flexShrink: "0",
    height: "100%",
    flexGrow: "0",
    background: "#15234c"
  },
  splitOfButtons: {
    display: "flex",
    height: "4em",
    justifyContent: "space-between",
    flexDirection: "column"
  },
  navButton: {
    width: "1em",
    height: "1em",
    padding: "0",
    margin: "0",
    alignSelf: "center",
    color: "white",
    "&:hover": {
      backgroundColor: "#6e6969",
      opacity: "0.99"
    }
  },
  logoButton: {
    alignSelf: "center",
    paddingTop: "1em"
  },
  accountButton: {
    alignSelf: "center",
    paddingBottom: "1em"
  },
  containerContent: {
    flexGrow: "1",
    background: "#080129",
    padding: "0.5em"
  },
  content: {
    height: "100%",
    width: "100%",
    border: "0.03em solid white",
    borderRadius: "0.5em"
  }
});

export default styles;
