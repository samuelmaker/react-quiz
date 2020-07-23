import React from "react";
import PropTypes from "prop-types";

const Welcome = ({ startQuiz }) => {
  return (
    <div className="welcome-container">
      <div className="results-total"></div>
      <a onClick={startQuiz}>
        <img
          src="https://everpress.imgix.net/img/logo/original/5b9d46a117c02-5b9d46a117dfd9.86429877.png"
          width="300px"
        />
      </a>
    </div>
  );
};

Welcome.propTypes = {
  startQuiz: PropTypes.func.isRequired,
};

export default Welcome;
