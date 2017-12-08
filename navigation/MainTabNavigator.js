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

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Browse: {
      screen: BrowseScreen,
    },

    Login: {
      screen: LoginScreen,
    },

    SignUp: {
      screen: SignupScreen,
    },

    CreateGroup: {
      screen: CreateGroupScreen,
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName =
              Platform.OS === 'ios'
                ? `ios-information-circle${focused ? '' : '-outline'}`
                : 'md-information-circle';
            break;
          case 'Browse':
            iconName = Platform.OS === 'ios' ? `ios-glasses${focused ? '' : '-outline'}` : 'md-login';
            break;
          case 'CreateGroup':
            iconName = Platform.OS === 'ios' ? `ios-contacts${focused ? '' : '-outline'}` : 'md-contacts';
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
