import React from 'react';
import PropTypes from 'prop-types';
import tally from '../helpers/tally';

const Results = ({ userAnswers, score, restartQuiz, winner}) => {
  const triesTotal = tally(userAnswers);
  // const oneTry = triesTotal[1] && <div><strong>{triesTotal[1]}</strong> on the first try.</div>;
  // const twoTries = triesTotal[2] && <div><strong>{triesTotal[2]}</strong> on the second try.</div>;
  // const threeTries = triesTotal[3] && <div><strong>{triesTotal[3]}</strong> on the third try.</div>;
  // const fourTries = triesTotal[4] && <div><strong>{triesTotal[4]}</strong> on the fourth try.</div>;
  
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
