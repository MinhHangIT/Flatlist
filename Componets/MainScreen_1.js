import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
// import { TabNavigator, TabBarBottom } from 'react-navigation';
import TabNavigator from './Tab';

export default class MainScreen_1 extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return <TabNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
