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
    zIndex: "2",
    justifyContent: "space-between",
    flexDirection: "column",
    flexShrink: "0",
    height: "100%",
    flexGrow: "0",
    background: "#000000"
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
    color: "#a3a09c",
    "&:hover": {
      backgroundColor: "#6e6969",
      opacity: "0.99"
    }
  },
  logoButton: {
    alignSelf: "center",
    padding: "1em 0 1em 0"
  },
  accountButton: {
    alignSelf: "center",
    paddingBottom: "1em"
  },
  containerContent: {
    flexGrow: "1",
    background: "#121212",
    padding: "0.5em"
  },
  rollingOutMenu: {
    width: "15em",
    zIndex: "1",
    margin: "0 0 0 -15em",
    transition: "margin 0.3s ease-in-out"
  },
  moveMenu: {
    margin: "0"
  },
  content: {
    height: "100%",
    width: "100%"
  }
});

export default styles;
