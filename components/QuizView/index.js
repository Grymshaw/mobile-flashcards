import React, { Component } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'

import styles from './styles'

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
    const { numberCorrect, questionIndex } = this.state

    return (
      <View style={styles.score}>
        <Text style={styles.scoreText}>
          {questionIndex + 1} / {totalQuestions} ({totalQuestions - questionIndex} remaining)
        </Text>
      </View>
    )
  }

  renderQuestion (question) {
    const { currentView } = this.state
    return (
      <View style={styles.mainTextView}>
        { currentView === "question"
          ? <Text style={styles.mainText}>
              Question: {question.question}
            </Text>
          : <Text style={styles.mainText}>
              Answer: {question.answer}
            </Text> }
      </View>
    )
  }

  renderButtons () {
    const { currentView } = this.state

    return (
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.changeView}
          onPress={this.handleChangeView}
        >
          <Text style={{ color: 'blue', fontSize: 18 }}>
            View { currentView === 'question' ? 'Answer' : 'Question' }
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={this.handleCorrect}
        >
          <Text style={{ color: 'darkgreen', fontSize: 18 }}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={this.handleIncorrect}
        >
          <Text style={{ color: 'red', fontSize: 18 }}>Incorrect</Text>
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
      <View style={styles.quizOver}>
        <Text style={styles.quizOverText}>
          Quiz Completed!
        </Text>
        <Text style={styles.quizOverScore}>
          You scored:
        </Text>
        <Text style={styles.quizOverNumber}>
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
      return (
        <View style={styles.mainContainer}>
          {this.renderQuizOver()}
        </View>
      )
    }

    return (
      <View style={styles.mainContainer}>
        { this.renderScore(totalNumQuestions) }
        { this.renderQuestion(currentQuestion) }
        { this.renderButtons() }
      </View>
    )
  }
}
