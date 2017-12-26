import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

import styles from './styles'
import { getDeck } from '../../utils/deckApi'
import { clearLocalNotification, setLocalNotification } from '../../utils/helpers'

export default class DeckDetails extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.deck.title}`,
  })

  constructor (props) {
    super(props)
    this.state = {
      deck: {},
      loading: true,
      showWarning: false, // show error if trying to start quiz with no questions
    }
    this.handleQuizStart = this.handleQuizStart.bind(this)
  }

  componentDidMount () {
    this.fetchDeck()
  }

  componentWillReceiveProps (props) {
    this.fetchDeck()
  }

  fetchDeck () {
    const { deck } = this.props.navigation.state.params
    getDeck(deck.title)
      .then((deck) => {
        this.setState({
          deck,
          loading: false,
        })
      })
  }

  goTo(route) {
    const { navigation } = this.props
    const { deck } = navigation.state.params

    navigation.navigate(route, { deck })
  }

  handleQuizStart () {
    const { deck } = this.state
    const { navigation } = this.props

    if (deck.questions && deck.questions.length > 0) {
      navigation.navigate('QuizView', { deck })
      // clear current reminder notification and set again for tomorrow
      clearLocalNotification()
        .then(setLocalNotification)
    } else {
      this.setState({
        showWarning: true,
      })
      // remove error message after 5 seconds
      setTimeout(() => {
        this.setState({
          showWarning: false,
        })
      }, 5000)
    }
  }

  render() {
    const { deck, loading, showWarning } = this.state

    return loading
      ? <Text>Loading...</Text>
      : <View style={styles.mainContainer}>
          <Text style={styles.questions}>
            {deck.questions.length} Question{deck.questions.length !== 1 ? 's' : ''}
          </Text>
            <Button
              title={'Add question'}
              style={styles.addQuestion}
              onPress={() => this.goTo('NewQuestion')}
            />
            <Button
              title={'Start quiz'}
              style={styles.startQuiz}
              onPress={this.handleQuizStart}
            />
            {showWarning
                ? <Text style={styles.warning}>
                    Add some questions before starting the quiz!
                  </Text>
                : null}
        </View>
  }
}
