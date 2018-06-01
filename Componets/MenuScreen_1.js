import React , { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';

export default class MenuScreen_1 extends Component {
    render(){
        return(
            <View style = {[styles.container]}>
                <Text>Menu screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
  });
  