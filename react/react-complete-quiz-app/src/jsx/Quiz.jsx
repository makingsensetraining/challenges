import React, { PropTypes } from 'react';
import Questions from './Questions.jsx';
import AnswerList from './AnswerList.jsx';
import Score from './Score.jsx';
import Progress from './Progress.jsx';
import '../App.css';

class Quiz extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.getInitialState();
        //TODO there is a bug in the constructor
    }


    getInitialState() {
        return {
            questionData: [
                {question: "This is the capital of which country? Canberra", answers: ["Turkey","Australia","Cuba","Algeria"], correct: 1},
                {question: "This is the capital of which country? Bangkok", answers: ["Argentina","Thailand","India","United Kingdom"], correct: 1}],
            progress: 0,
            score: 0
        };
    }

    checkAnswer(index) {
        //TODO complete
        /*
         Check if the answer is correct
         If is correct, update the state with the new score and the new value
         If is incorrect, refresh the progress
        */
    }

    resetQuiz() {
        /*
        * Reset the state
        * */
    }

    render() {
        var currentQuestion = this.state.questionData[this.state.progress];
        if(this.state.questionData.length > this.state.progress) {
            return (
                <div className="quiz container">
                    <Questions questionText={currentQuestion.question} />
                    <AnswerList answers={currentQuestion.answers} answerCallback={this.checkAnswer} />
                    <Score score={this.state.score} />
                    <Progress progress={this.state.progress} total={this.state.questionData.length}/>
                </div>
            );
        } else {
            return (
                <div className="quiz container">
                    <p className="quiz question">Quiz Finished!</p>
                    <Score score={this.state.score} />
                    <button type="button" className="quiz reset-btn" onClick={this.resetQuiz}>Reset Quiz</button>
                </div>
            );
        }
    }
}

export default Quiz;