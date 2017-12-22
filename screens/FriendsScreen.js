import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Picker,
  TextInput,
  Dimensions,
  AsyncStorage
} from 'react-native';

import styles from '../styles.js'
import { ExpoConfigView } from '@expo/samples';
import { List, ListItem, Container, Header, Content, Button, Icon, Text, Item, Input, Form, Label, Thumbnail, Segment, Card, CardItem, Left, Body, Right } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class FriendsScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  goToFriend(id){
    this.props.navigation.navigate('UserScreen', {id} )
   }

  componentWillMount = async () => {
    // when you need to access the token again
    try {
      const value = await AsyncStorage.getItem('@FitFun:key');
      if (value !== null) {
        console.log("Currently logged in user's token is: " + value);
        let friends = await fetch(`http://fit-fun.herokuapp.com/my/friends?token=${value}`, {
          method: 'GET',
        })

        friends = await friends.json();
        friends = friends.friends;

        console.log('friends: ', friends)
        this.setState({friends})
        // do something with the token
      }
    } catch (error) {
      // Error retrieving data
      console.log("Token could not be retrieved!", error)
    }
  }

  static navigationOptions = {
    title: 'Friends'
  };

  render() {
    return (
      <Container style={{display: 'flex', flexDirection: 'row', backgroundColor: '#A3CDD3',flex: 1}}>
        <View style={{flex: 1}}>
          {this.state.friends.length ?
            this.state.friends.map((friend, id) => {
              const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
              const date = new Date(friend.createdAt);
              const month = months[date.getMonth()];
              const year = date.getFullYear();
              const day = date.getDate();

              return <Card onPress={(id) => goToFriend(id)} key={id}>
                <CardItem>
                  <Left>
                    <Thumbnail source={{uri: friend.img }} />
                    <Body style={{flexDirection: 'column'}}>
                      <View>
                      <Text style={{fontWeight: 'bold'}}>{friend.username}</Text>
                    </View>
                    <View>
                      <Text style={{fontWeight: 'bold', fontSize: 14}}>Joined {month} {day}, {year}</Text>
                    </View>
                    </Body>
                  </Left>
                </CardItem>
              </Card>
            })

             : <Text>You have no friends :(</Text>
           }
        </View>
      </Container>
    )
  }
}
