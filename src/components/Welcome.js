import React from "react";
import PropTypes from "prop-types";

const Welcome = ({ startQuiz }) => {
  return (
    <div className="welcomeParent">
      <div id="welcome-logo">
        {" "}
        <img
          src="https://everpress.imgix.net/img/logo/original/5b9d46a117c02-5b9d46a117dfd9.86429877.png"
          width="130px"
        />
      </div>

      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </div>
  );
};

Welcome.propTypes = {
  startQuiz: PropTypes.func.isRequired,
};

export default Welcome;
