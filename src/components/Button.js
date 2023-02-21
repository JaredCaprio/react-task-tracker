import React from "react";
import propTypes from "prop-types";
export default function Button({ color, text, cb }) {
  return (
    <button onClick={cb} className="btn" style={{ backgroundColor: color }}>
      {text}
    </button>
  );
}

Button.defaultProps = {
  color: "steelblue",
  text: "Add",
};

Button.propTypes = {
  text: propTypes.string,
  color: propTypes.string,
  cb: propTypes.func.isRequired,
};
