/* eslint "semi": 0 */
/* eslint "no-console": 0 */
import { AsyncStorage } from 'react-native'

const deckStorageKey = '@kgDecks'

export const getDecks = () => (
  AsyncStorage.getItem(deckStorageKey)
    .then(console.log)
    .catch(console.error)
)

export const getDeck = id => (
  AsyncStorage.getItem(deckStorageKey)
    .then(decks => decks[id])
    .catch(console.error)
)

export const saveDeckTitle = title => (
  AsyncStorage.getItem(deckStorageKey)
    .then((decks) => {
      console.log('decks', JSON.parse(decks))
      // TODO: Confirm whether or not to replace a deck if it already exists
      return decks
        ? Object.assign({}, JSON.parse(decks), { [title]: { title, questions: [] } })
        : { [title]: { title, questions: [] } }
    })
    .then((newDecks) => {
      console.log('newDecks', newDecks)
      return AsyncStorage.setItem(deckStorageKey, JSON.stringify(newDecks))
        .catch(err => console.error('setItem error', err))
    })
    .catch(err => console.error('getItem error', err))
)

export const addCardToDeck = (deckTitle, card) => (
  AsyncStorage.getItem(deckStorageKey)
    .then((decks) => {
      const deck = decks[deckTitle]
      deck.questions.push(card)
      const newDecks = Object.assign({}, decks, { title: deck })
      AsyncStorage.setItem(deckStorageKey, JSON.stringify(newDecks))
    })
)