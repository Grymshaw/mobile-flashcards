import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default class DeckDetails extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.deck.title}`,
  })

  goTo(route) {
    const { navigation } = this.props
    const { deck } = navigation.state.params

    navigation.navigate(route, { deck })
  }

  render() {
    const { navigation } = this.props
    const { deck } = navigation.state.params
    return (
      <View>
        <Text>{deck.questions.length} questions</Text>
        <Button
          title={'Add question'}
          onPress={() => this.goTo('NewQuestion')}
        />
        <Button
          title={'Start quiz'}
          onPress={() => this.goTo('QuizView')}
        />
      </View>
    )
  }
}
