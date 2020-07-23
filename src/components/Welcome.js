import React from 'react';
import PropTypes from 'prop-types';

const Welcome = ({startQuiz}) => {
  return (
    <div className="welcome-container">
      <h2>h2</h2>
      <div className="results-total"></div>
      <a onClick={startQuiz}>Start Quiz</a>
    </div>
  );
}

Welcome.propTypes = {
  startQuiz: PropTypes.func.isRequired,
};

export default Welcome;
