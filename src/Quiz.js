import React, { Component } from 'react'

let quizData = require('./quiz_data.json')

class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quiz_position: 1
    }
  }

  render() {
    const { instruction_text } =
      quizData.quiz_questions &&
      quizData.quiz_questions[0]

    return (
      <div>
        <div className="QuizQuestion">
          { instruction_text }
        </div>
      </div>
    )
  }
}

export default Quiz
