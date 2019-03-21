import React, { Component } from 'react'
import './App.css'
import Quiz from './Quiz.js'
import _ from 'lodash'

class App extends Component {
  state = {
    data: null
  }

  async componentDidMount() {
    const response = await fetch(`https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple`);

    const json = await response.json();



    const formattedData = json.results.map(i => {
      const obj = {
        instruction_text: i.question,
        answer_options: _.shuffle([...i.incorrect_answers, i.correct_answer]),
        answer: i.correct_answer
      }
      return obj
    })
    this.setState({ data: formattedData });
  }

  render() {
    return (
        <Quiz data={this.state.data} />
    )
  }
}

export default App
