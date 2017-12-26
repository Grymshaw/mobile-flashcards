import React, { Component } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'

export default class QuizView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      questionIndex: 0,
      numberCorrect: 0,
      currentView: 'question', // can be "question" or "answer"
      isQuizOver: false,
    }

    this.handleCorrect = this.handleCorrect.bind(this)
    this.handleIncorrect = this.handleIncorrect.bind(this)
    this.handleChangeView = this.handleChangeView.bind(this)
    this.handleBackToDeck = this.handleBackToDeck.bind(this)
    this.handleRetry = this.handleRetry.bind(this)
  }

  renderScore (totalQuestions) {
    const { numberCorrect } = this.state

    return (
      <View>
        <Text>
          {numberCorrect} / {totalQuestions}
        </Text>
      </View>
    )
  }

  renderQuestion (question) {
    const { currentView } = this.state
    return (
      <View>
        { currentView === "question"
          ? <Text>
              Question: {question.question}
            </Text>
          : <Text>
              Answer: {question.answer}
            </Text> }
      </View>
    )
  }

  renderButtons () {
    const { currentView } = this.state

    return (
      <View>
        <TouchableOpacity onPress={this.handleCorrect}>
          <Text>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleIncorrect}>
          <Text>Incorrect</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleChangeView}>
          <Text>{ currentView === 'question' ? 'Answer' : 'Question' }</Text>
        </TouchableOpacity>
      </View>
    )
  }

  handleRetry () {
    this.setState({
      questionIndex: 0,
      numberCorrect: 0,
      currentView: 'question', // can be "question" or "answer"
      isQuizOver: false,
    })
  }

  handleBackToDeck () {
    this.props.navigation.goBack()
  }

  renderQuizOver () {
    const { deck } = this.props.navigation.state.params
    const { numberCorrect } = this.state

    return (
      <View>
        <Text>
          Quiz Completed!
        </Text>
        <Text>
          You scored:
        </Text>
        <Text>
          {numberCorrect} / {deck.questions.length} ({100 * (numberCorrect / deck.questions.length).toFixed(2)}%)
        </Text>
        <Button onPress={this.handleRetry} title="Retry" />
        <Button onPress={this.handleBackToDeck} title="Back to Deck" />
      </View>
    )
  }

  handleCorrect () {
    const { deck } = this.props.navigation.state.params
    const { questionIndex } = this.state

    if (questionIndex + 1 >= deck.questions.length) {
      this.setState(state => ({
        numberCorrect: ++state.numberCorrect,
        isQuizOver: true,
        currentView: 'question', // can be "question" or "answer"
      }))
    } else {
      this.setState(state => ({
        questionIndex: ++state.questionIndex,
        numberCorrect: ++state.numberCorrect,
        currentView: 'question', // can be "question" or "answer"
      }))
    }
  }

  handleIncorrect () {
    const { deck } = this.props.navigation.state.params
    const { questionIndex } = this.state

    if (questionIndex + 1 >= deck.questions.length) {
      this.setState({
        isQuizOver: true,
        currentView: 'question', // can be "question" or "answer"
      })
    } else {
      this.setState(state => ({
        questionIndex: ++state.questionIndex,
        currentView: 'question', // can be "question" or "answer"
      }))
    }
  }

  handleChangeView () {
    this.setState(state => ({
      currentView: state.currentView === 'question' ? 'answer' : 'question',
    }))
  }

  render () {
    const { navigation } = this.props
    const { deck } = navigation.state.params
    const { numberCorrect, questionIndex } = this.state

    const totalNumQuestions = deck.questions.length
    const currentQuestion = deck.questions[questionIndex]

    if (this.state.isQuizOver) {
      return this.renderQuizOver()
    }

    return (
      <View>
        { this.renderScore(totalNumQuestions) }
        { this.renderQuestion(currentQuestion) }
        { this.renderButtons() }
      </View>
    )
  }
}
