import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

import { getDeck } from '../../utils/deckApi'

export default class DeckDetails extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.deck.title}`,
  })

  constructor (props) {
    super(props)
    this.state = {
      deck: {},
      loading: true,
    }
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

  render() {
    const { deck, loading } = this.state

    return loading
      ? <Text>Loading...</Text>
      : <View>
        <Text>
          {deck.questions.length} question{deck.questions.length > 1 ? 's' : ''}
        </Text>
          <Button
            title={'Add question'}
            onPress={() => this.goTo('NewQuestion')}
          />
          <Button
            title={'Start quiz'}
            onPress={() => this.goTo('QuizView')}
          />
        </View>
  }
}
