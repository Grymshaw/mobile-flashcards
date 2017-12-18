import { StyleSheet } from 'react-native'

const styles = {
  mainContainer: {
    flex: 1,
    display: 'flex',
    marginLeft: 15,
    marginRight: 15,
  },
  header: {
  },
  listItem: {
    borderWidth: 2,
    borderColor: 'gray',
    marginLeft: 1,
    marginRight: 1,
    height: 150,
  },
  deckTitle: {
    fontSize: 40,
    fontWeight: '300',
  },
  noDecks: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export default StyleSheet.create(styles)
