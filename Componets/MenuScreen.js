import React , { Component } from 'react';
import {View, Button,Text, StyleSheet } from  'react-native';

export default class MenuScreen extends Component{
    render(){
        return(
            <View style = {[styles.container]}>
                <Text style = {{color: 'white'}}>Menu Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'crimson'
    },
});