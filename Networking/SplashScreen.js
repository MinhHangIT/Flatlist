import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MainScreen from './MainScreen';
import { getJsonFromWeb } from './GetApi';

export default class SplashScreen extends Component {
  static navigationOptions = {
    header: null
  };

  componentWillMount() {
    getJsonFromWeb()
      .then(result => {
        this.props.navigation.navigate('MainSceen', { dataSend: { result: result, status: true } });
      })
      .catch(err => {
        console.log(`Error: ${err}`);
        this.props.navigation.navigate('MainSceen', { dataSend: { result: {}, status: false } });
      });
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'skyblue', alignItems: 'center', justifyContent: 'center' }}>
        <View>
          <Text style={{ fontSize: 40, color: 'white', fontWeight: 'bold' }}>Welcome to Flatlist</Text>
        </View>
      </View>
    );
  }
}
