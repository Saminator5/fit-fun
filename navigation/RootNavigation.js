import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import GroupScreen from '../screens/GroupScreen';
import InfoScreen from '../screens/InfoScreen';
import HistoryScreen from '../screens/HistoryScreen';
import FriendsScreen from '../screens/FriendsScreen';
import MyGroupsScreen from '../screens/MyGroupsScreen';
import TrophyScreen from '../screens/TrophyScreen';
import UserScreen from '../screens/UserScreen';

const RootStackNavigator = StackNavigator(
  {
    Login: {
      screen: LoginScreen
    },

    Profile: {
      screen: ProfileScreen
    },

    MainTabNavigator: {
      screen: MainTabNavigator
    },

    GroupScreen: {
      screen: GroupScreen
    },
    InfoScreen: {
      screen: InfoScreen
    },

    HistoryScreen: {
      screen: HistoryScreen
    },

    FriendsScreen: {
      screen: FriendsScreen
    },

    MyGroupsScreen: {
      screen: MyGroupsScreen
    },
    TrophyScreen: {
      screen: TrophyScreen
    },
    UserScreen: {
      screen: UserScreen
    }
  },
  {
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  }
);

export default class RootNavigator extends React.Component {
  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    return <RootStackNavigator />;
  }

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = ({ origin, data }) => {
    console.log(`Push notification ${origin} with data: ${JSON.stringify(data)}`);
  };
}
