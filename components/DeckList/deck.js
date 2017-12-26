import React, { Component } from 'react'
import { TouchableOpacity,
         Text,
         View,
       } from 'react-native'

import styles from './styles'

const Deck = ({ deck, navigation }) => {
  const viewDetails = () => {
    navigation.navigate(
      'DeckDetails',
      { deck },
    )
  }

  return (
    <View
      onPress={viewDetails}
      key={deck.title}
      style={styles.listItem}
    >
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={viewDetails}
      >
        <Text style={styles.deckTitle}>
          {deck.title}
        </Text>
        <Text style={styles.deckQuestions}>
          {deck.questions.length} Question{deck.questions.length > 1 ? 's' : ''}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Deck
