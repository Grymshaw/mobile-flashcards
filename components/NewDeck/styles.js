/* eslint "semi": 0 */

import { Platform, StyleSheet } from 'react-native'

const styles = {
  mainContainer: {
    marginLeft: 15,
    marginRight: 15,
    justifyContent: 'center',
    // alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: 36,
    textAlign: 'center',
  },
  input: {
    borderBottomWidth: Platform.OS === 'ios' ? 2 : 0,
    borderColor: 'gray',
    height: 40,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 10,
    paddingTop: 10,
  },
  button: {
    marginTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: 'teal',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
}

export default StyleSheet.create(styles)
