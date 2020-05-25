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
    background: "#444440"
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
    color: "white"
  },
  logoButton: {
    paddingTop: "0.5em"
  },
  accountButton: {
    paddingBottom: "1.5em"
  },
  containerContent: {
    flexGrow: "1",
    background: "#2f2f2a"
  }
});

export default styles;
