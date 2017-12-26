import { Platform, StyleSheet } from 'react-native'

const styles = {
  mainContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'stretch',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
  },
  input: {
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: Platform.OS === 'ios' ? 2 : 0,
    borderColor: 'gray',
    height: 40,
    paddingLeft: 15,
    paddingRight: 15,
  }
}

export default StyleSheet.create(styles)
