import React , { Component } from 'react';
import {View, Button,Text, StyleSheet , YellowBox,Image, TextInput, TouchableOpacity} from  'react-native';
import {Detail } from '../screenNames';

export default class MainScreen extends Component{
    constructor (props){
        super(props);
        this.state = {
            firstNumber: '',
            secondNumber: '',
            result: '',
            dau: '',
        }
    }
    Rcallback = result => {
        this.setState({result})
    }
    render(){
        const { navigation } = this.props;
        
       
        return(
            <View style = {[styles.container]}>
               
               <View style = {{flex:1/8, flexDirection: 'row'}}>
                    <View style = {[styles.view_Text]}>
                        <TextInput placeholder = 'nhập a' 
                        underlineColorAndroid = {'transparent'}
                        style = {{width: 100, height: 40,borderWidth:1, borderColor: '#ddd',}}
                        onChangeText = {
                            (text) => {
                                this.setState(previousState => {
                                            return {
                                                firstNumber: text
                                            };
                                        }
                                );
                            }
                        }
                        ></TextInput>
                        
                    </View>
                    <View style = {[styles.view_Text]}>
                        <TextInput placeholder = 'nhập b' 
                        underlineColorAndroid = {'transparent'}
                        style = {{width: 100, height: 40,borderWidth:1, borderColor: '#ddd',}}
                        onChangeText = {
                            (text) => {
                                this.setState(previousState => {
                                            return {
                                                secondNumber: text
                                            };
                                        }
                                );
                            }
                        }
                        ></TextInput>
                    </View>
                    <View style = {{flex: 1/4, justifyContent: 'center', alignItems: 'center',}}>
                        <Text>= {this.state.result}</Text>
                    </View>
               </View>
               <View style = {{flex: 1/8, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity
                    style = {{flex:1/6,borderWidth: 1, borderColor: '#ddd',backgroundColor: 'skyblue', padding: 10, width: 50, height: 50, justifyContent: 'center', alignItems: 'center'}}
                        onPress = {() =>{
                            let kq;
                            const dataSentToDetail = {
                                a : this.state.firstNumber,
                                b : this.state.secondNumber,
                                dau: '+',
                                callback: this.Rcallback
                            }
                            
                        navigation.navigate(Detail,dataSentToDetail,{
                        });
                        }} 
                    >
                    <Text>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style = {{flex:1/6,borderWidth: 1, borderColor: '#ddd',backgroundColor: 'skyblue', padding: 10, width: 50, height: 50, justifyContent: 'center', alignItems: 'center'}}
                        onPress = {() =>{
                            let kq;
                            const dataSentToDetail = {
                                a : this.state.firstNumber,
                                b : this.state.secondNumber,
                                dau: '-',
                                callback: this.Rcallback
                            }
                            
                        navigation.navigate(Detail,dataSentToDetail,{
                        });
                        }} 
                    >
                    <Text>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style = {{flex:1/6,borderWidth: 1, borderColor: '#ddd',backgroundColor: 'skyblue', padding: 10, width: 50, height: 50, justifyContent: 'center', alignItems: 'center'}}
                        onPress = {() =>{
                            let kq;
                            const dataSentToDetail = {
                                a : this.state.firstNumber,
                                b : this.state.secondNumber,
                                dau: '*',
                                callback: this.Rcallback
                            }
                            
                        navigation.navigate(Detail,dataSentToDetail,{
                        });
                        }} 
                    >
                    <Text>*</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style = {{flex:1/6,borderWidth: 1, borderColor: '#ddd',backgroundColor: 'skyblue', padding: 10, width: 50, height: 50, justifyContent: 'center', alignItems: 'center'}}
                        onPress = {() =>{
                            let kq;
                            const dataSentToDetail = {
                                a : this.state.firstNumber,
                                b : this.state.secondNumber,
                                dau: '/',
                                callback: this.Rcallback
                            }
                            
                        navigation.navigate(Detail,dataSentToDetail,{
                        });
                        }} 
                    >
                    <Text>/</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'yellow'
    },
    button_view: {
        flex: 1,
        padding: 18,
        margin: 20,
        width: 200,
        height: 45,
        borderRadius: 10,
        backgroundColor: 'yellow',
        alignItems: 'center'
    },
    view_Text: {
        flex: 1/4,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15
    },
});