import { StyleSheet } from 'react-native'

const styles = {
  mainContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  score: {
    position: 'absolute',
    left: 10,
    top: -10,
  },
  scoreText: {
    fontWeight: '500',
    fontSize: 16,
  },
  mainTextView: {
    marginTop: 10,
  },
  mainText: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  buttons: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  changeView: {
    marginTop: 20,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  quizOver: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  quizOverText: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 10,
  },
  quizOverScore: {
    fontSize: 20,
    fontWeight: "400",
  },
  quizOverNumber: {
    fontSize: 24,
    fontWeight: "400",
    marginBottom: 20,
  },
}

export default StyleSheet.create(styles)
