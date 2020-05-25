import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Login from "../components/signIn";
import {getErrors} from "../selectors";
import {tokenForSignUp} from "../../../constants/authRouterConstants";
import {signInRequest} from "../actions";

class SignInContainer extends React.Component {
  state = {
    data: {
      username: "",
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

    const payload = {
      currentUserCredentials: this.state.data,
      token: tokenForSignUp
    };
    this.props.signIn(payload);
    this.setState({loading: true});
  };

  render() {
    const {data} = this.state;
    const {serverResponseErrors} = this.props;
    const {validationErrors} = this.state;
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
    signIn: payload => dispatch(signInRequest(payload))
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
