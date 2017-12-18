import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'

import { getDecks } from '../../utils/deckApi'
import styles from './styles'

export default class DeckList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      decks: [],
      loading: true,
    }
    this.renderDeck = this.renderDeck.bind(this)
    this.renderDecks = this.renderDecks.bind(this)
    this.renderlist = this.renderList.bind(this)
  }

  componentDidMount() {
    this.updateDecks()
  }

  updateDecks() {
    getDecks()
      .then((decks) => {
        const arr = decks
          ? Object.keys(decks).map(id => decks[id])
          : []
        this.setState({
          decks: arr,
          loading: false,
        })
      })
  }

  componentWillReceiveProps(props) {
    if (this.props.screenProps &&
      this.props.screenProps.routeIndex !== props.screenProps.routeIndex) {
        this.updateDecks()
    }
  }

  renderDeck(deck) {
    return (
      <View
        key={deck.title}
        style={styles.listItem}
      >
        <Text style={styles.deckTitle}>
          {deck.title}
        </Text>
        <Text style={styles.deckQuestions}>
          {deck.questions.length} Flashcards
        </Text>
      </View>
    )
  }

  renderDecks() {
    const { decks } = this.state
    return decks.length > 0
      ? <ScrollView style={styles.mainContainer}>
          {decks.map(this.renderDeck)}
        </ScrollView>
      : <View style={styles.noDecks}>
          <Text>No decks created yet</Text>
        </View>
  }

  renderLoading() {
    return (
      <View style={styles.loading}>
        <Text>Loading...</Text>
      </View>
    )
  }

  renderList() {
    const { loading } = this.state
    const renderDecks = this.renderDecks.bind(this)
    const renderLoading = this.renderLoading.bind(this)
    return loading
      ? renderLoading()
      : renderDecks()
  }

  render() {
    return this.renderList()
  }
}
