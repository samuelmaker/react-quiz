import React from 'react';
import PropTypes from 'prop-types';

const Answer = ({ first, answer, handleAnswerClick, handleEnterPress }) => {
  return (
    <li
      tabIndex="0"
      onClick={handleAnswerClick}
      onKeyDown={handleEnterPress}
      style={{ display: "inline-block" }}
    >
      <button id={first && 'firstAnswer'} className="question-answer">{answer}</button>
    </li>
  );
};

Answer.propTypes = {
  first: PropTypes.bool.isRequired,
  answer: PropTypes.element.isRequired,
  handleAnswerClick: PropTypes.func.isRequired,
  handleEnterPress: PropTypes.func.isRequired
};

export default Answer;
