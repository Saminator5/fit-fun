import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import BrowseScreen from '../screens/BrowseScreen';
import CreateGroupScreen from '../screens/CreateGroupScreen';
import HistoryScreen from '../screens/HistoryScreen';
import ActivityScreen from '../screens/ActivityScreen';
import ProfileScreen from '../screens/ProfileScreen';
import GroupScreen from '../screens/GroupScreen';
import InfoScreen from '../screens/InfoScreen';
import CreateScreen from '../screens/CreateScreen';
import MyGroupsScreen from '../screens/MyGroupsScreen';

export default MainTabNavigator = TabNavigator(
  {
    Create: {
      screen: CreateScreen
    },
    Browse: {
      screen:  BrowseScreen
    },

    Profile: {
      screen: ProfileScreen
    },

    Groups: {
      screen: MyGroupsScreen
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Browse':
            iconName = Platform.OS === 'ios' ? `ios-search${focused ? '' : '-outline'}` : 'md-search';
            break;
          case 'Groups':
            iconName = Platform.OS === 'ios' ? `ios-people${focused ? '' : '-outline'}` : 'md-people';
            break;
          case 'Create':
            iconName = Platform.OS === 'ios' ? `ios-add${focused ? '' : '-outline'}` : 'md-add';
            break;
          case 'Profile':
            iconName = Platform.OS === 'ios' ? `ios-person${focused ? '' : '-outline'}` : 'md-person';
            break;
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    initialRouteName: 'Profile'
  }
);

 class Navigator extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    console.log('navigator props: ', this.props)
    return (
      <MainTabNavigator
        screenProps={this.props.navigation.state.params.user.user}
        initialRouteName='Profile'
      />)
  }
}
