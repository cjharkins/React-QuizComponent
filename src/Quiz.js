import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion.js'

let quizData = require('./quiz_data.json')

class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quiz_position: 1
    }
  }

  render() {
    const { instruction_text, answer_options } =
      quizData.quiz_questions &&
      quizData.quiz_questions[this.state.quiz_position - 1]

    return (
      <QuizQuestion quiz_question={{instruction_text, answer_options}}/>
    )
  }
}

export default Quiz
