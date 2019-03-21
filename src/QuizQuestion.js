import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'

class QuizQuestion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      incorrectAnswer: false
    }
  }

  handleClick(button_text) {
    if (button_text === this.props.quiz_question.answer) {
      this.setState({
        incorrectAnswer: false
      })
      this.props.showNextQuestionHandler()
    } else {
      this.setState({
        incorrectAnswer: true
      })
    }
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
        {this.state.incorrectAnswer? <p className="error">Sorry, that's not right</p>:null}
      </main>
    )
  }
}

export default QuizQuestion
