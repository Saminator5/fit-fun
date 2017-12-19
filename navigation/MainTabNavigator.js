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

export default TabNavigator(
  {
    Login: {
      screen: LoginScreen
    },

    Create: {
      screen: CreateScreen
    },

    Profile: {
      screen: ProfileScreen
    },

    Groups: {
      screen: MyGroupsScreen
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = Platform.OS === 'ios' ? `ios-home${focused ? '' : '-outline'}` : 'md-home';
            break;
          case 'Browse':
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
  }
);
