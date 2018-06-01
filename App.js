

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import MainScreen from './Componets/MainScreen';

export default class App extends Component {
  render() {
    return (
      <AppStackNagator />
    );
  }
}

const AppStackNagator = StackNavigator({
  Main: {
    screen: MainScreen,
  }

})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
