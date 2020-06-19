const styles = () => ({
  mainLayout: {
    display: "flex",
    flexDirection: "row",
    width: "35em",
    border: "0.1em solid #a3a09c",
    borderRadius: "0.5em",
    marginTop: "2em",
    padding: "0.7em",
    margin: "auto",
    alignItems: "center"
  },
  channelImage: {
    width: "7em",
    height: "5em",
    marginRight: "1em"
  },
  titleButtonLine: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%"
  },
  mainTitle: {
    font: "1.5em bold"
  },
  followButton: {
    color: "green",
    alignSelf: "flex-start",
    width: "5em",
    height: "2em"
  },
  popupLayout: {
    padding: "1em",
    width: "14em"
  },
  popupCompilation: {
    width: "100%",
    height: "2em",
    paddingLeft: "0.5em",
    "&:hover": {
      backgroundColor: "#0e0d0d",
      opacity: "0.99"
    }
  },
  descriptionForChannel: {
    paddingTop: "1em",
    color: "#787474"
  }
});

export default styles;
