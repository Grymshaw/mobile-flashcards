import React from 'react';
import { StyleSheet, View } from 'react-native';

// import NewDeck from './components/NewDeck'
import StatusBar from './components/StatusBar'
import Navigation from './components/Navigation'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends React.Component {
  onNavigationStateChange(prevState, newState) {
    this.setState({ ...this.state, routeIndex: newState.routes[0].index })
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar />
        <Navigation
          onNavigationStateChange={this.onNavigationStateChange.bind(this)}
          screenProps={this.state}
        />
      </View>
    );
  }
}
