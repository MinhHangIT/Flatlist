import React , { Component } from 'react';
import {View, Button,Text, StyleSheet } from  'react-native';

export default class DetailScreen extends Component{
    constructor(props){
        super(props)
        this.state = {
            countDown = ''
        }
    }
componentDidMount(){
    const { params } = this.props.navigation.state;

    // setTimeout(() => {
    //     let dauBT = params.dau
    //     switch(dauBT) {
    //         case '+':
    //             kq = parseFloat(params.a) + parseFloat(params.b);
    //             break;
    //         case '-':
    //             kq = parseFloat(params.a) - parseFloat(params.b);
    //             break;
    //         case '*':
    //             kq = parseFloat(params.a) * parseFloat(params.b);
    //             break;
    //         case '/':
    //             kq = parseFloat(params.a) / parseFloat(params.b);
    //             break;
    //     }
    //     params.callback(kq);
    //     this.props.navigation.goBack();
    // }, 2000);
}
    render(){
       
       
        return(
            <View style = {[styles.container]}>
                <Text style = {{color: 'white',fontWeight: 'bold', fontSize: 18}}>Waitting for ${nextTime}...</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'skyblue'
    },
});