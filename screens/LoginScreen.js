import React from 'react';
import { Image, View, Alert, AsyncStorage } from 'react-native';

import { Container, Content, Button, Text, Item, Input, Form, Label} from 'native-base'; // 2.3.5

import { Facebook } from "expo";
import MainTabNavigator from '../navigation/MainTabNavigator';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  go = () => {
    const { navigate } = this.props.navigation;
    navigate('MainTabNavigator');
  }

  _handleButtonPress = () => {
    Alert.alert(
      'Button pressed!',
      'You did it!',
    );
  };

  _handleFacebookLogin = async () => {
    try {
      const { type, token, expires } = await Facebook.logInWithReadPermissionsAsync(
        '136503423723798', // Replace with your own app id in standalone app
        { permissions: ['public_profile', 'email', 'user_friends'] }
      );

      // put this line before the switch in _handleFacebookLogin inside of LoginScreen.js
      try {
        await AsyncStorage.setItem('@FitFun:key', token); // stores user token in phone
      } catch (error) {
        console.log("Token could not be saved!", error) //do something
      }

      try {
        const value = await AsyncStorage.getItem('@FitFun:key');
        if (value !== null) {
          console.log("Currently logged in user's token is: " + value);
        }
      } catch (error) {
        // Error retrieving data
        console.log("Token could not be retrieved!", error)
      }

      switch (type) {
        case 'success': {
          // Get the user's name using Facebook's Graph API
          const response = await fetch('http://fit-fun.herokuapp.com/auth/signInUp', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              token: token,
            }),
          });

          const res = await response.json();
          console.log('res: ', res)
          const { navigate } = this.props.navigation;
          navigate('MainTabNavigator', {user: res})
          break;
        }
        case 'cancel': {
          Alert.alert(
            'Cancelled!',
            'Login was cancelled!',
          );
          break;
        }
        default: {
          Alert.alert(
            'Oops!',
            'Login failed sam!',
          );
        }
      }
    } catch (e) {
      console.log('error: ', e)
    }
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
    * content, we just wanted to give you a quick view of your config */

    const resizeMode = 'cover';

    return (
      <Container style={{display: 'flex', flex: 1, alignItems: 'center', flexDirection: 'row'}}>
        <View
          style={{
            flex: 1,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
          >
            <Image
              style={{
                flex: 1,
                resizeMode,
                justifyContent: 'center',
              }}
              source={{uri: 'https://media.aws.iaaf.org/media/LargeL/5269cee8-be8a-4c3c-8ec1-9e784aecf6b2.jpg?v=1443549257'}}
            />
          </View>
          <Content style={{flex: 1}}>

            <View
              style={{
                flex: 1,
                width: '100%',
                height: '100%',
              }}
              >

                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                  }}
                  >
                    <View style={{paddingTop: 10}}>
                      <Button
                        block
                        onPress={this._handleFacebookLogin.bind(this)}
                        >
                          <Text>Login with Facebook</Text>
                        </Button>
                      </View>
                    </View>
                  </View>
                </Content>
              </Container>
            )
          }
        }
