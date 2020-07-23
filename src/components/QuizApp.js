import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import Quiz from './Quiz';
import Modal from './Modal';
import Results from './Results';
import Welcome from './Welcome';
import shuffleQuestions from '../helpers/shuffleQuestions';
import QUESTION_DATA from '../data/quiz-data';

class QuizApp extends Component {
  state = {
    ...this.getInitialState(this.props.totalQuestions)
  };

  static propTypes = {
    totalQuestions: PropTypes.number.isRequired
  };

  // modal can be reintroduced by adding logic to set modal.state to show
  getInitialState(totalQuestions) {
    totalQuestions = Math.min(totalQuestions, QUESTION_DATA.length);
    const QUESTIONS = shuffleQuestions(QUESTION_DATA).slice(0, totalQuestions);

    return {
      welcomePage: true,
      questions: QUESTIONS,
      totalQuestions: totalQuestions,
      userAnswers: QUESTIONS.map(() => {
        return {
          tries: 0
        }
      }),
      step: 1,
      score: 0,
      modal: {
        state: 'hide',
        praise: '',
        points: ''
      }
    };
  }

  handleAnswerClick = (index) => (e) => {
    const { questions, step, userAnswers } = this.state;
    const isCorrect = questions[0].correct === index;
    const currentStep = step - 1;
    const tries = userAnswers[currentStep].tries;

    if (isCorrect && e.target.nodeName === 'BUTTON') {
      // Prevent other answers from being clicked after correct answer is clicked
      e.target.parentNode.style.pointerEvents = 'none';
      e.target.classList.add('right');
      setTimeout(this.nextStep, 100);
    }
    else if (e.target.nodeName === 'BUTTON') {
      e.target.style.pointerEvents = 'none';
      e.target.classList.add('wrong');
      userAnswers[currentStep] = {
        tries: tries + 1
      };
      this.setState({
        userAnswers: userAnswers
      });
      setTimeout(this.nextStep, 100)

    }
  };

  handleEnterPress = (index) => (e) => {
    if (e.keyCode === 13) {
      this.handleAnswerClick(index)(e);
    }
  };

  nextStep = () => {
    const { questions, userAnswers, step, score } = this.state;
    const restOfQuestions = questions.slice(1);
    const currentStep = step - 1;
    const tries = userAnswers[currentStep].tries;

    this.setState({
      step: step + 1,
      score: this.updateScore(tries, score),
      questions: restOfQuestions,
      modal: {
        state: 'hide'
      }
    });
  };

  updateScore(tries, score) {
    switch (tries) {
      case 0: return score + 1;
      default: return score;
    }
  }

  initiateQuiz = () => {
    this.setState({
      welcomePage: false
    });
  };

  restartQuiz = () => {
    this.setState({
      ...this.getInitialState(this.props.totalQuestions)
    });
  };

  render() {
    const { step, questions, userAnswers, totalQuestions, score, modal, welcomePage } = this.state;

    if (welcomePage) {
      return (
        <Welcome
          startQuiz={this.initiateQuiz}
        />
      ); 
    }
    if (step >= totalQuestions + 1) {
      return (
        <Results
          score={score}
          restartQuiz={this.restartQuiz}
          userAnswers={userAnswers}
          winner={totalQuestions === score}
        />
      );
    } else return (
      <Fragment>
        <Quiz
          step={step}
          questions={questions}
          totalQuestions={totalQuestions}
          score={score}
          handleAnswerClick={this.handleAnswerClick}
          handleEnterPress={this.handleEnterPress}
        />
        { modal.state === 'show' && <Modal modal={modal} /> }
      </Fragment>
    );
  }
}

export default QuizApp;
