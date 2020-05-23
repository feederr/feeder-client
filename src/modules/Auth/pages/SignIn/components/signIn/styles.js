const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    margin: "0",
    background: "linear-gradient(0deg, #4e57ce 30%, #bb51c0 95%)"
  },
  mainLayout: {
    display: "block",
    width: "27em",
    height: "33em",
    borderRadius: "0.8em",
    variant: "outline"
  },
  mainTitle: {
    fontSize: "1.5em",
    display: "block",
    padding: "0.2em"
  },
  signInTitle: {
    display: "block",
    textAlign: "center",
    marginTop: "1em"
  },
  errorFromServer: {
    display: "block",
    marginBottom: "3em",
    background: "black"
  },
  form: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
    width: "80%",
    margin: "4em auto 0 auto"
  },
  inputsArea: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "2.5em"
  },
  submitButton: {
    margin: "0 auto 3em auto"
  }
});

export default styles;
