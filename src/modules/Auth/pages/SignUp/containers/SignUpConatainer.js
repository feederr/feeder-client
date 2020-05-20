import React from "react";
import {validate} from "../../../helpers/validation";
import Register from "../components/signUp";
import {bindActionCreators} from "redux";
import * as signUpActionCreators from "../actions";
import {getClientTokenRequest} from "../../../actions/tokenActions"
import {connect} from "react-redux";
import PropTypes from "prop-types";

class SignUpContainer extends React.Component {
    state = {
        data: {
            email: "",
            password: "",
            repeatPassword: "",
            firstName: "",
            lastName: "",
            userName: ""
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
        const {
            signUpActions: {signUpRequest},
            tokenActions: {getClientTokenRequest}
        } = this.props;

        e.preventDefault();
        const credentials = this.state.data;
        const errors = validate(credentials);
        this.setState({errors});
        if (Object.keys(errors).length === 0) {
            getClientTokenRequest();
            signUpRequest(credentials);
            this.setState({loading: true});
        }
    };

    render() {
        const {data, errors} = this.state;
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
        signUpActions: bindActionCreators(signUpActionCreators, dispatch),
        tokenActions: bindActionCreators(getClientTokenRequest, dispatch)
    };
};

SignUpContainer.propTypes = {
    signUpActions: PropTypes.object
};

export default connect(
    null,
    mapDispatchToProps
)(SignUpContainer);
