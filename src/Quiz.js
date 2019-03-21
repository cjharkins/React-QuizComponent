import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion.js'
import QuizEnd from './QuizEnd.js'

class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quiz_position: 1
    }
  }

  showNextQuestion(){
    this.setState({
      quiz_position: this.state.quiz_position + 1
    })
  }
  handleResetClick(){
    this.setState({
      quiz_position: 1
    })
  }

  render() {
    const quizData = this.props.data
    const isQuizEnd = (this.state.quiz_position - 1) === (quizData && quizData.length || 0)
    return (
      <div>
        { isQuizEnd ?
        <QuizEnd
          resetClickHandler={this.handleResetClick.bind(this)}
        />:
        (<QuizQuestion
          showNextQuestionHandler={this.showNextQuestion.bind(this)}
          quiz_question={quizData && quizData[this.state.quiz_position - 1]}
        />)
        }
      </div>
    )
  }
}

export default Quiz
