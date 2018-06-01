import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardComponent from '../CardComponent';

export default class HomeTab extends Component {
  static navigationOptions = {
    // header: null
    headerMode: 'none'
  };

  render() {
    return (
      <View style={[styles.container]}>
        <View
          style={{
            flex: 1 / 6,
            flexDirection: 'row',
            justifyContent: 'center',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginLeft: 10,
            marginRight: 10
          }}
        >
          <View>
            <Image
              source={require('../../icon/camera-outline.png')}
              style={{ width: 25, height: 25, paddingLeft: 20 }}
            />
          </View>
          <View>
            <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Instagram</Text>
          </View>
          <View>
            <Image
              source={require('../../icon/sent-outline.png')}
              style={{ width: 25, height: 25, paddingRight: 20 }}
            />
          </View>
        </View>
        <View style={{ flex: 1 / 5 }}>
          <View style={{ flex: 1 / 3, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View>
              <Text style={{ fontSize: 12, fontWeight: '100', color: 'black', paddingLeft: 5 }}>Stories</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Image source={require('../../icon/play.png')} style={{ width: 15, height: 15, paddingRight: 5 }} />
              <Text style={{ fontSize: 12, fontWeight: '100', color: 'black', paddingRight: 5 }}>Watch All</Text>
            </View>
          </View>
          <View style={{ flex: 2 / 3, justifyContent: 'center' }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                alignItems: 'center',
                paddingStart: 5,
                paddingEnd: 5
              }}
            >
              <View>
                <Image
                  source={require('../../icon/lanhuong.jpg')}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 100,
                    borderWidth: 2,
                    borderColor: '#36c',
                    marginRight: 10
                  }}
                />
              </View>
              <View>
                <Image
                  source={require('../../icon/lanhuong.jpg')}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 100,
                    borderWidth: 2,
                    borderColor: '#36c',
                    marginRight: 10
                  }}
                />
              </View>
              <View>
                <Image
                  source={require('../../icon/lanhuong.jpg')}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 100,
                    borderWidth: 2,
                    borderColor: '#36c',
                    marginRight: 10
                  }}
                />
              </View>
              <View>
                <Image
                  source={require('../../icon/lanhuong.jpg')}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 100,
                    borderWidth: 2,
                    borderColor: '#36c',
                    marginRight: 10
                  }}
                />
              </View>
              <View>
                <Image
                  source={require('../../icon/lanhuong.jpg')}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 100,
                    borderWidth: 2,
                    borderColor: '#36c',
                    marginRight: 10
                  }}
                />
              </View>
              <View>
                <Image
                  source={require('../../icon/lanhuong.jpg')}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 100,
                    borderWidth: 2,
                    borderColor: '#36c',
                    marginRight: 10
                  }}
                />
              </View>
              <View>
                <Image
                  source={require('../../icon/lanhuong.jpg')}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 100,
                    borderWidth: 2,
                    borderColor: '#36c',
                    marginRight: 10
                  }}
                />
              </View>
              <View>
                <Image
                  source={require('../../icon/lanhuong.jpg')}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 100,
                    borderWidth: 2,
                    borderColor: '#36c',
                    marginRight: 10
                  }}
                />
              </View>
              <View>
                <Image
                  source={require('../../icon/lanhuong.jpg')}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 100,
                    borderWidth: 1,
                    borderColor: 'white',
                    borderWidth: 2,
                    borderColor: '#36c'
                  }}
                />
              </View>
            </ScrollView>
          </View>
        </View>

        <ScrollView>
          <CardComponent imageSource="1" likes="101" />
          <CardComponent imageSource="2" likes="102" />
          <CardComponent imageSource="3" likes="103" />
          <CardComponent imageSource="4" likes="104" />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});
