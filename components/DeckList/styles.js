import { StyleSheet } from 'react-native'

const styles = {
  mainContainer: {
    flex: 1,
    display: 'flex',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
  },
  header: {
  },
  listItem: {
    borderWidth: 2,
    borderColor: 'gray',
    marginLeft: 1,
    marginRight: 1,
    height: 150,
    marginTop: 10,
  },
  listItemInner: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  deckTitle: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: '300',
  },
  deckQuestions: {
    textAlign: 'center',
  },
  noDecks: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export default StyleSheet.create(styles)
