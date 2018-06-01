import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

export default class CardComponent extends Component {
  render() {
    const images = {
      '1': require('../icon/lanhuong.jpg'),
      '2': require('../icon/lanhuong.jpg'),
      '3': require('../icon/lanhuong.jpg'),
      '4': require('../icon/lanhuong.jpg')
    };
    return (
      <View style={[styles.container]}>
        {/* dai dien */}
        <View style={{ flex: 1 / 8, flexDirection: 'row', marginLeft: 10, marginBottom: 10 }}>
          <View>
            <Image
              source={require('../icon/lanhuong.jpg')}
              style={{ width: 50, height: 50, borderRadius: 100, borderWidth: 1, borderColor: 'white' }}
            />
          </View>
          <View style={{ marginLeft: 10, justifyContent: 'center' }}>
            <View>
              <Text style={{ fontSize: 13, fontWeight: '100', color: 'black' }}>Lan Huong</Text>
            </View>
            <View>
              <Text style={{ fontSize: 13, fontWeight: '100', color: 'black' }}>Jun 29,2018</Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 4 / 10, flexDirection: 'column', alignItems: 'center' }}>
          <Image source={images[this.props.imageSource]} style={{ width: 350, height: 200 }} />
        </View>
        <View style={{ flex: 1 / 10, flexDirection: 'row', alignItems: 'center', padding: 10 }}>
          <View>
            <Image source={require('../icon/heart-outline.png')} style={{ width: 20, height: 20, marginRight: 10 }} />
          </View>
          <View>
            <Image source={require('../icon/chat.png')} style={{ width: 20, height: 20, marginRight: 10 }} />
          </View>
          <View>
            <Image source={require('../icon/sent-outline.png')} style={{ width: 20, height: 20 }} />
          </View>
        </View>
        <View style={{ flex: 1 / 12, justifyContent: 'center', padding: 10 }}>
          <Text style={{ fontSize: 13, fontWeight: '100', color: 'black' }}>{this.props.likes} likes</Text>
        </View>
        <View style={{ flex: 2 / 10, alignItems: 'center', marginLeft: 10, paddingBottom: 10 }}>
          <Text style={{ fontSize: 13, color: 'black' }}>
            jdfh jkdsfhldfkj sldjsdfhalksj shdfdskhj skjghsdkjsdkl gsdfkj sdklhgsfuidgh lskadhf uisdghsfdfhja hfalkjsdfa
            iufga klfha skdfh ksdjfkldsag hsldjgkdfshgljsdkdffhksjdgsadhfkjsdgjd jkfsakjhfjasd ghfjdagh kfj fbsdjfhsdfak
            fhdasj fdgja fbhajkdfga kjssdgauf
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    flexDirection: 'column',
    borderBottomWidth: 0.8,
    borderBottomColor: 'lightgray'
  }
});
