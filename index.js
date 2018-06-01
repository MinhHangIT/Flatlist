import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
// import MainScreen from './Componets/MainScreen';
// import DetailScreen from './Componets/DetailScreen';
// import {Main, Detail} from './screenNames';

// import MainScreen_1 from './Componets/MainScreen_1';
// import Navigation_video_1 from './Navigation_video_1';

// const App = StackNavigator ({
//     Main: {
//         screen: MainScreen,
//         navigationOptions: {
//             headerTitle: 'nhap du lieu',
//         }
//     },
//     Detail: {
//         screen: DetailScreen,
//         navigationOptions: {
//             headerTitle: 'ket qua',
//         }
//     }
// });

import MainScreen from './Networking/MainScreen';
import SplashScreen from './Networking/SplashScreen';

const App = StackNavigator({
  SplashScreen: {
    screen: SplashScreen
  },
  MainScreen: {
    screen: MainScreen
  }
});

AppRegistry.registerComponent('Navigation_1', () => App);
