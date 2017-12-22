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

const resizeMode = 'cover';

export default class ProfileScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      user: {},
      friends: []
    }
  }

  static navigationOptions = {
    header: null
  };

    logout = async () => {
      try {
        const response = await fetch('http://fit-fun.herokuapp.com/auth/logout', {
          method: 'GET',
        });

        const res = await response.json();
        console.log('logout response: ', res)

        if(res.success){
          console.log('taking you to login..');
          this.props.navigation.navigate('Login')
        }
      }  catch (e) {
        console.log('error: ', e)
      }
    }

    componentWillMount = async () => {
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
          friends = friends.slice(0,9);
          this.setState({friends})
          // do something with the token
        }
      } catch (error) {
        // Error retrieving data
        console.log("Token could not be retrieved!", error)
      }
    }

    render() {
      const _this = this;
      return (

        <Container style={{display: 'flex', flexDirection: 'row', backgroundColor: '#A3CDD3',flex: 1}}>
          <View style={{flex: 1,  marginTop: 45}}>
            <View style={{alignItems: 'center', flex: 2, justifyContent: 'space-between'}}>
              {this.props.navigation.state.params.user.user.username ? <Text style={[{fontWeight: 'bold'}, styles.fontColor]}>
                {this.props.navigation.state.params.user.user.username}  </Text> : <Text>Loading...</Text>}

              {this.props.navigation.state.params.user.user.img ?
                <Image style={{width: 120, height: 120, borderRadius: 60}} source={{ uri: this.props.navigation.state.params.user.user.img }}/>
                :
                <Image style={{width: 120, height: 120, borderRadius: 60}} source={{ uri: 'https://cdn1.bigcommerce.com/server5600/ovem0imu/products/906/images/22492/frontier-fort-with-swing-set-28-2005-02__80409.1498267018.1280.1280.jpg?c=2'}} />
              }
            </View>
            <List style={{flex: 3, marginBottom: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
              <ListItem
                onPress={() => {this.props.navigation.navigate('InfoScreen', {user: this.props.navigation.state.params.user.user})}}
                style={{flex: 1, backgroundColor: '#A3CDD3', borderColor: 'black'}}>
                <Text style={styles.fontColor}>
                  My Info
                </Text>

                <View style={{flex: 1,alignItems: 'flex-end'}}>
                  <Icon ios='ios-person' android="md-person" style={styles.icons} />
                </View>
              </ListItem>
              <ListItem
                onPress={() => {this.props.navigation.navigate('FriendsScreen', {})}}
                style={{flex: 1, backgroundColor: '#A3CDD3', borderColor: '#101112'}}>
                <Text style={styles.fontColor}>
                  My Friends
                </Text>
                <View style={{flex: 1,alignItems: 'flex-end'}}>
                  <Icon ios='ios-contacts' android="md-contacts" style={styles.icons} />
                </View>
              </ListItem>

              <ScrollView
                   style={{marginLeft: 12, maxHeight: 65}}
                   horizontal={true}
                   scrollEnabled={true}>

                   {this.state.friends.length ? this.state.friends.map((friend, id) => {
                     return  <TouchableOpacity onPress={() => {
                       _this.props.navigation.navigate('UserScreen', {id: friend.id})
                     }
                     } key={id} style={{paddingRight: 10}}>
                        <Thumbnail style={{width: 50, height: 50}} source={{ uri: friend.img}} />
                          <Text ellipsizeMode='tail'
                            numberOfLines={1}
                            style={{maxWidth: 50, fontSize: 12, fontWeight: 'bold'}}>{friend.username}</Text>
                      </TouchableOpacity>
                    }) : <Text>You have no friends ;/</Text>}
                 </ScrollView>


              <ListItem
                onPress={() => {this.props.navigation.navigate('HistoryScreen', {})}}
                style={{flex: 1, backgroundColor: '#A3CDD3', borderColor: '#101112'}}>
                <Text style={styles.fontColor}>
                  My History
                </Text>
                <View style={{flex: 1,alignItems: 'flex-end'}}>
                  <Icon ios='ios-book' android="md-book" style={styles.icons} />
                </View>
              </ListItem>

              <ListItem
                style={{flex: 1, backgroundColor: '#A3CDD3', borderColor: '#101112'}}
                onPress={() => {this.props.navigation.navigate('TrophyScreen', {})}}
                >
                  <Text style={styles.fontColor}>
                    My Trophies
                  </Text>
                  <View style={{flex: 1,alignItems: 'flex-end'}}>
                    <Icon ios='ios-trophy' android="md-trophy" style={styles.icons}/>
                  </View>
                </ListItem>
              </List>
              <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <Button full style={{marginTop: 2, backgroundColor: '#EE524F'}}
                  onPress={() => this.logout()}>
                  <Text>Logout</Text>
                </Button>
              </View>
            </View>
          </Container>
        )
      }
    }
