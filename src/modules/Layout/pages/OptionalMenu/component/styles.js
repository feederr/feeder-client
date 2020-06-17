const styles = () => ({
  mainLayout: {
    width: "12em",
    height: "100%",
    background: "#151519",
    border: "1px #494444 solid",
    borderStyle: "hidden solid"
  },
  navButton: {
    margin: "0 0.5em 0 0",
    width: "0.6em"
  },
  bookmarkIcon: {
    width: "0.75em",
    margin: "0 0.5em 0 -0.1em"
  },
  menuItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: "#898484",
    "&:hover": {
      background: "#211d1d",
      color: "white"
    }
  },
  menuItemSelected: {
    color: "#2bb14c"
  },
  menuItemTitle: {
    font: "bold 0.8em sans-serif"
  },
  outlineMenuElement: {
    width: "0.2em",
    marginRight: "1em",
    marginLeft: "-0.1em",
    height: "2em"
  },
  selectOutline: {
    background: "#2bb14c"
  },
  feedsTitle: {
    marginLeft: "1em",
    font: "0.8em sans-serif",
    color: "#898484"
  },
  arrowIcon: {
    width: "0.75em",
    margin: "0 0.5em 0 -0.1em",
    transition: "transform 0.3s ease"
  },
  moveArrow: {
    transform: "rotate(90deg)"
  },
  openedSpecificChannels: {
    display: "block",
    height: "10em",
    overflow: "auto",
    width: "100%",
    color: "#898484",
    marginLeft: "3em"
  },
  closedSpecificChannels: {
    display: "none"
  },
  specificChannel: {
    font: "0.9em sans-serif",
    paddingLeft: "0.7em"
  },
  modalLayout: {
    width: "30em",
    height: "6em"
  }
});

export default styles;
