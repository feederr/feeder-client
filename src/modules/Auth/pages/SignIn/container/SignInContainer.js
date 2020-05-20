import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actionCreators from "../actions";
import Login from "../components/signIn";
import { bindActionCreators } from "redux";
import { getErrors } from "../selectors";
import { validateEmail } from "../../../helpers/validation";

class SignInContainer extends React.Component {
  state = {
    data: {
      email: "",
      password: ""
    },
    validationErrors: {}
  };

  onChange = e => {
    e.persist();
    this.setState(prevState => ({
      ...prevState,
      data: {
        ...prevState.data,
        [e.target.name]: e.target.value
      }
    }));
  };

  onSubmit = e => {
    e.preventDefault();

    const {
      actions: { signInRequest }
    } = this.props;

    const credentials = this.state.data;
    const validationErrors = validateEmail({}, credentials.email);
    this.setState({ validationErrors });
    if (Object.keys(validationErrors).length === 0) {
      signInRequest(credentials);
      this.setState({ loading: true });
    }
  };

  render() {
    const { data } = this.state;
    const { serverResponseErrors } = this.props;
    const { validationErrors } = this.state;
    const props = {
      onChange: this.onChange,
      onSubmit: this.onSubmit,
      serverResponseErrors,
      validationErrors,
      data
    };
    return <Login {...props} />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
};

const mapStateToProps = state => {
  return {
    serverResponseErrors: getErrors(state)
  };
};

SignInContainer.propTypes = {
  actions: PropTypes.object,
  serverResponseErrors: PropTypes.array
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInContainer);
