import React, { Component } from 'react'
import {
  AsyncStorage,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity } from 'react-native'

import styles from './styles'
import { getDeck, saveDeckTitle } from '../../utils/deckApi'

export default class NewDeck extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'New Deck',
  })

  constructor(props) {
    super(props)
    this.state = {
      title: '',
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(text) {
    this.setState({
      title: text,
    })
  }

  handleSubmit() {
    const { navigation } = this.props
    const { title } = this.state

    this.setState({
      title: '',
    })

    if (title.length > 0) {
      saveDeckTitle(title)
        .then(() => (
          getDeck(title)
        ))
        .then((deck) => (
          navigation.navigate('DeckDetails', { deck })
        ))
    }
  }

  render() {
    const { title } = this.state

    return (
      <KeyboardAvoidingView style={styles.mainContainer}>
        <Text style={styles.text}>
          Name your deck:
        </Text>
        <TextInput
          onChangeText={this.handleInput}
          value={title}
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.handleSubmit}
        >
          <Text style={styles.buttonText}>Add Deck</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}
