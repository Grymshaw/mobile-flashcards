import { StackNavigator, TabNavigator } from 'react-navigation'

import DeckList from '../DeckList'
import NewDeck from '../NewDeck'
import DeckDetails from '../DeckDetails'
import QuizView from '../QuizView'
import NewQuestion from '../NewQuestion'

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Your Decks',
    },
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'Add A Deck',
    },
  },
}, {
  navigationOptions: {
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#182026',
    },
  },
  tabBarPosition: 'bottom',
  tabBarOptions: {
    style: {
      height: 56,
      backgroundColor: 'rgb(240, 240, 240)',
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 6,
      shadowOpacity: 1,
      backgroundColor: 'teal',
    },
    labelStyle: {
      fontSize: 16,
      display: 'flex',
      alignItems: 'center',
    },
    inactiveTintColor: 'white',
    activeTintColor: 'lightgrey',
    activeBackgroundColor: '#10474E',
  },
})

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  DeckDetails: {
    screen: DeckDetails,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#182026',
      },
    }
  },
  QuizView: {
    screen: QuizView,
  },
  NewQuestion: {
    screen: NewQuestion,
  },
}, {
  navigationOptions: {
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#182026',
    },
  },
})

export default MainNavigator
