import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import CardComponent from '../CardComponent';

const images = [
  require('../../icon/1.jpg'),
  require('../../icon/2.jpg'),
  require('../../icon/3.jpg'),
  require('../../icon/4.jpg'),
  require('../../icon/5.jpg'),
  require('../../icon/6.jpg'),
  require('../../icon/7.jpg'),
  require('../../icon/8.jpg'),
  require('../../icon/3.jpg'),
  require('../../icon/4.jpg'),
  require('../../icon/1.jpg'),
  require('../../icon/7.jpg')
];
let { width, height } = Dimensions.get('window');
export default class UserTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }
  segmentClicked = index => {
    this.setState({ activeIndex: index });
  };

  renderSectionOne = () => {
    0.3;
    return images.map((image, index) => {
      return (
        <View
          key={index}
          style={[
            { width: width / 3 },
            { height: width / 3 },
            { marginBottom: 2 },
            index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }
          ]}
        >
          <Image source={image} style={{ flex: 1, width: undefined, height: undefined }} />
        </View>
      );
    });
  };
  renderSection = () => {
    if (this.activeIndex == 0) {
      return <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>{this.renderSectionOne()}</View>;
    }
    if (this.state.activeIndex == 1) {
      return (
        <View>
          <CardComponent imageSource="1" likes="100" />
          <CardComponent imageSource="2" likes="1000" />
          <CardComponent imageSource="3" likes="10000" />
          <CardComponent imageSource="4" likes="10000" />
        </View>
      );
    }
  };
  render() {
    return (
      <ScrollView style={{ backgroundColor: 'white' }}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#f2f0eb' }}>
          <View style={{ padding: 10 }}>
            <Image source={require('../../icon/user-outline.png')} style={{ width: 25, height: 25, paddingLeft: 20 }} />
          </View>
          <View style={{ padding: 10 }}>
            <Text>Minh Hang</Text>
          </View>
          <View style={{ padding: 10 }}>
            <Image source={require('../../icon/countdown.png')} style={{ width: 25, height: 25, paddingLeft: 20 }} />
          </View>
        </View>
        <View style={{ marginTop: 5 }}>
          <View style={{ flexDirection: 'row', paddingTop: 10, paddingLeft: 5 }}>
            <View>
              <Image
                source={require('../../icon/lanhuong.jpg')}
                style={{ width: 60, height: 60, borderWidth: 1, borderColor: 'white', borderRadius: 100 }}
              />
            </View>
            <View style={{ flex: 4, marginRight: 10 }}>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', paddingLeft: 10, paddingRight: 10 }}>
                  <Text style={{ fontSize: 14, color: 'black' }}>20</Text>
                  <Text style={{ fontSize: 12 }}>posts</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', paddingLeft: 10, paddingRight: 10 }}>
                  <Text style={{ fontSize: 14, color: 'black' }}>206</Text>
                  <Text style={{ fontSize: 12 }}>followers</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', paddingLeft: 10, paddingRight: 10 }}>
                  <Text style={{ fontSize: 14, color: 'black' }}>167</Text>
                  <Text style={{ fontSize: 12 }}>following</Text>
                </View>
              </View>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <View
                  style={{
                    flex: 4,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: 5,
                    borderWidth: 1,
                    borderColor: '#ddd',
                    borderRadius: 5
                  }}
                >
                  <Text style={{ color: 'black', margin: 2 }}>Edit Profile</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: '#ddd',
                    borderRadius: 5
                  }}
                >
                  <Image source={require('../../icon/settings.png')} style={{ margin: 2, width: 20, height: 20 }} />
                </View>
              </View>
            </View>
          </View>
          <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd' }}>
            <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold' }}>Minh Hang</Text>
            <Text style={{ fontSize: 15, color: 'black' }}>Lack | Computer Jock | Commerical Pilot</Text>
            <Text style={{ fontSize: 15, color: 'black' }}>https://www.unsureprogramer.com</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            justifyContent: 'space-around',
            alignItems: 'center',
            margin: 10
          }}
        >
          <TouchableOpacity onPress={() => this.segmentClicked(0)} active={this.state.activeIndex == 0}>
            <Image
              source={
                this.state.activeIndex == 0
                  ? require('../../icon/menu-apps.png')
                  : require('../../icon/menu-apps-grey.png')
              }
              style={{ width: 20, height: 20 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.segmentClicked(1)} active={this.state.activeIndex == 1}>
            <Image
              source={
                this.state.activeIndex == 1 ? require('../../icon/list.png') : require('../../icon/list-grey.png')
              }
              style={{ width: 20, height: 20 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.segmentClicked(2)} active={this.state.activeIndex == 2}>
            <Image
              source={
                this.state.activeIndex == 2 ? require('../../icon/people.png') : require('../../icon/people-grey.png')
              }
              style={{ width: 20, height: 20 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.segmentClicked(3)} active={this.state.activeIndex == 3}>
            <Image
              source={
                this.state.activeIndex == 3
                  ? require('../../icon/bookmark.png')
                  : require('../../icon/bookmark-grey.png')
              }
              style={{ width: 20, height: 20 }}
            />
          </TouchableOpacity>
          {this.renderSection()}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
