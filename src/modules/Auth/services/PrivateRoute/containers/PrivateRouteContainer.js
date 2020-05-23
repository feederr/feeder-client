import * as selectors from "../../../selectors";
import { connect } from "react-redux";
import PrivateRoute from "../components/PrivateRoute";

const mapStateToProps = state => {
  return {
    isLoggedIn: selectors.getLoggedIn(state),
    currentRole: selectors.getOwnRole(state)
  };
};

export default connect(
  mapStateToProps,
  null
)(PrivateRoute);
