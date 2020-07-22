import React from 'react';
import PropTypes from 'prop-types';

const Answer = ({ answer, handleAnswerClick, handleEnterPress }) => {
  return (
    <li
      tabIndex="0"
      onClick={handleAnswerClick}
      onKeyDown={handleEnterPress}
      style={{ display: "inline-block" }}
    >
      <button className="question-answer">{answer}</button>
    </li>
  );
};

Answer.propTypes = {
  answer: PropTypes.element.isRequired,
  handleAnswerClick: PropTypes.func.isRequired,
  handleEnterPress: PropTypes.func.isRequired
};

export default Answer;
