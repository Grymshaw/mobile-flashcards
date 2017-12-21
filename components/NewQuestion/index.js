import React, { Component } from 'react'
import { Button, Text, TextInput, View } from 'react-native'

import { addCardToDeck } from '../../utils/deckApi'

export default class NewQuestion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question: '',
      answer: '',
    }
    this.handleAnswerInput = this.handleAnswerInput.bind(this)
    this.handleQuestionInput = this.handleQuestionInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleAnswerInput(answer) {
    this.setState({ answer })
  }

  handleQuestionInput(question) {
    this.setState({ question })
  }

  handleSubmit() {
    const { deck } = this.props.navigation.state.params
    const { answer, question } = this.state

    addCardToDeck(
      deck.title,
      { question, answer },
    )

    this.setState({
      answer: '',
      question: '',
    })
  }

  render() {
    const { answer, question } = this.state

    return (
      <View>
        <Text>New Question</Text>
        <TextInput
          value={question}
          placeholder="Your question here"
          onChangeText={this.handleQuestionInput}
        />
        <TextInput
          value={answer}
          placeholder="Your answer here"
          onChangeText={this.handleAnswerInput}
        />
        <Button
          title={'Add Question'}
          onPress={this.handleSubmit}
        />
      </View>
    )
  }
}
