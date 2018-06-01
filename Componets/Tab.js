import React, { Component } from 'react';
import { Platform, Image, Text } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import HomeTab from './InstagramTabName/HomeTab';
import SearchTab from './InstagramTabName/SearchTab';
import AddMediaTab from './InstagramTabName/AddMediaTab';
import UserTab from './InstagramTabName/UserTab';
import HeartTab from './InstagramTabName/HeartTab';

export default TabNavigator(
  {
    HomeTab: {
      screen: HomeTab
    },
    SearchTab: {
      screen: SearchTab
    },
    AddMediaTab: {
      screen: AddMediaTab
    },
    HeartTab: {
      screen: HeartTab
    },
    UserTab: {
      screen: UserTab
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'HomeTab':
            iconName = require('../icon/home-outline.png');
            break;
          case 'SearchTab':
            iconName = require('../icon/search-outline.png');
            break;
          case 'AddMediaTab':
            iconName = require('../icon/add-outline.png');
            break;
          case 'HeartTab':
            iconName = require('../icon/heart-outline.png');
            break;
          case 'UserTab':
            iconName = require('../icon/user-outline.png');
            break;
        }
        return <Image source={iconName} style={{ width: 23, height: 23, tintColor: focused ? 'black' : '#DADADA' }} />;
      },
      tabBarLabel: ({ focused }) => {
        const { routeName } = navigation.state;
        let labelName;
        switch (routeName) {
          case 'HomeTab':
            labelName = 'Home';
            break;
          case 'SearchTab':
            labelName = 'Search';
            break;
          case 'AddMediaTab':
            labelName = 'Add';
            break;
          case 'HeartTab':
            labelName = 'Like';
            break;
          case 'UserTab':
            labelName = 'Profile';
            break;
        }
        if (focused) {
          return <Text style={{ alignSelf: 'center', color: '#0795DB' }}>{labelName}</Text>;
        }

        return <Text style={{ alignSelf: 'center', color: '#DADADA' }}>{labelName}</Text>;
      }
    }),
    initialRouteName: 'HomeTab',
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: true,
    tabBarOptions: {
      style: {
        ...Platform.select({
          android: {
            backgroundColor: 'white'
          }
        })
      }
    }
  }
);
