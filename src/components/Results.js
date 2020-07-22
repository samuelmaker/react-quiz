import React from 'react';
import PropTypes from 'prop-types';

const Results = ({ userAnswers, score, restartQuiz, winner}) => {
  return (
    <div className="results-container">
      <h2>{winner ? 'Winner' : 'Loser'}</h2>
      <div className="results-total">Your Total Score is <strong>{score}</strong>.</div>
      <a onClick={restartQuiz}>Restart Quiz</a>
    </div>
  );
}

Results.propTypes = {
  userAnswers: PropTypes.array.isRequired,
  score: PropTypes.number.isRequired,
  restartQuiz: PropTypes.func.isRequired,
  winner: PropTypes.bool.isRequired
};

export default Results;
