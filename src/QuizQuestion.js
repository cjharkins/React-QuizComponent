import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'

class QuizQuestion extends Component {
  constructor(props) {
    super(props)
  }

  handleClick(button_text) {
    button_text === this.props.quiz_question.answer ?
      this.props.showNextQuestionHandler():null
  }

  render() {
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map((i,n)=>
              (<QuizQuestionButton
                clickHandler={this.handleClick.bind(this)}
                key={n}
                button_text={i}
              />)
            )}
          </ul>
        </section>
      </main>
    )
  }
}

export default QuizQuestion
