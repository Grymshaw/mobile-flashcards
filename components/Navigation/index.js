import { StackNavigator, TabNavigator } from 'react-navigation'

import DeckList from '../DeckList'
import NewDeck from '../NewDeck'
// import DeckDetails from 'components/DeckDetails'
// import QuizView from 'components/QuizView'
// import NewQuestion from 'components/NewQuestion'

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
    header: null,
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
    },
  },
})

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  // DeckDetails: {
  //   screen: DeckDetails,
  // },
  // QuizView: {
  //   screen: QuizView,
  // },
  // NewQuestion: {
  //   screen: NewQuestion,
  // },
})

export default MainNavigator
