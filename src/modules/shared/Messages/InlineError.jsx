import React from "react";
import PropTypes from "prop-types";

const InlineError = ({ message }) => (
  <span style={{ color: "#ae5856", margin: 0 }}>
    {message &&
      message.map((val, id) => {
        return (
          <p style={{ margin: 0 }} key={id}>
            {val}
          </p>
        );
      })}
  </span>
);

InlineError.propTypes = {
  message: PropTypes.arrayOf(PropTypes.string)
};

export default InlineError;
