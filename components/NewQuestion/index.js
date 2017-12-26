import React, { Component } from 'react'
import { Button, Text, TextInput, View } from 'react-native'

import styles from './styles'
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

    if (answer.length > 0 && question.length > 0) {
      addCardToDeck(deck.title, { question, answer })
        .then(() => {
          this.setState({
            answer: '',
            question: '',
          })
        })
    }
  }

  render() {
    const { answer, question } = this.state
    const { deck } = this.props.navigation.state.params

    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>
          New Question for {deck.title}
        </Text>
        <TextInput
          style={styles.input}
          value={question}
          placeholder="Your question here"
          onChangeText={this.handleQuestionInput}
        />
        <TextInput
          style={styles.input}
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
