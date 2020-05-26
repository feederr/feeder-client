import React from "react";
import { validate } from "../../../helpers/validation";
import Register from "../components/signUp";
import { getClientTokenRequest } from "../../../actions/tokenActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { tokenForSignUp } from "../../../constants/authRouterConstants";

class SignUpContainer extends React.Component {
  state = {
    data: {
      email: "",
      password: "",
      repeatPassword: "",
      firstName: "",
      lastName: "",
      username: ""
    },
    loading: false,
    errors: {}
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
    const credentials = this.state.data;
    const errors = validate(credentials);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.props.getClientToken({
        currentUserCredentials: this.state.data,
        token: tokenForSignUp
      });
      this.setState({ loading: true });
    }
  };

  render() {
    const { data, errors } = this.state;
    const props = {
      onChange: this.onChange,
      onSubmit: this.onSubmit,
      errors,
      data
    };

    return <Register {...props} />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getClientToken: payload => dispatch(getClientTokenRequest(payload))
  };
};

SignUpContainer.propTypes = {
  signUpActions: PropTypes.object
};

export default connect(null, mapDispatchToProps)(SignUpContainer);
