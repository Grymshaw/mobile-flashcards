import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'

import Deck from './deck'

import { getDecks } from '../../utils/deckApi'
import styles from './styles'

export default class DeckList extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'My Decks',
  })

  constructor(props) {
    super(props)
    this.state = {
      decks: [],
      loading: true,
    }
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

  renderDecks() {
    const { decks } = this.state
    const { navigation } = this.props

    return decks.length > 0
      ? <ScrollView style={styles.mainContainer}>
          {decks.map(deck => (
            <Deck
              key={deck.title}
              deck={deck}
              navigation={navigation}
            />
          ))}
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
