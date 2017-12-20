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
} from 'react-native';

import styles from '../styles.js'
import { ExpoConfigView } from '@expo/samples';
import { List, ListItem, Container, Header, Content, Button, Icon, Text, Item, Input, Form, Label, Thumbnail, Segment, Card, CardItem, Left, Body, Right } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
const {width, height} = Dimensions.get('window')


export default class ActivityScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {}
    }
  }

  componentWillMount = async () => {
    try {
      const response = await fetch('http://fit-fun.herokuapp.com/edit/user', {
        method: 'POST',
        body: JSON.stringify({}),
      });

      const res = await response.json();
      console.log('res: ', res)
      this.setState({
        user: res.user
      })
    }  catch (e) {
      console.log('error: ', e)
    }
  }

  static navigationOptions = {
    // title: 'Profile',
    header: null
  };

  takeMeTo = (str) => {
    // case for stuff to pass in
    console.log('taking you to, ', str)
    const { navigate } = this.props.navigation;
    navigate(str)
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
    * content, we just wanted to give you a quick view of your config */
    return (

      <Container style={{display: 'flex', flexDirection: 'row', backgroundColor: '#A3CDD3',flex: 1}}>
        <View style={{flex: 1,  marginTop: 45}}>
          <View style={{alignItems: 'center', flex: 2, justifyContent: 'space-between'}}>
              {this.state.user.username ? <Text style={{fontWeight: 'bold'}, styles.fontColor}>  {this.state.user.username}  </Text> : <Text>Loading...</Text>}

            {this.state.user.img ?
              <Image style={{width: 120, height: 120, borderRadius: 60}} source={{ uri: this.state.user.img }}/>
                                 :
              <Image style={{width: 120, height: 120, borderRadius: 60}} source={{ uri: 'https://cdn1.bigcommerce.com/server5600/ovem0imu/products/906/images/22492/frontier-fort-with-swing-set-28-2005-02__80409.1498267018.1280.1280.jpg?c=2'}} />
            }
          </View>
          <List style={{flex: 3, marginBottom: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <ListItem
              onPress={() => {this.takeMeTo('InfoScreen')}}
              style={{flex: 1, backgroundColor: '#A3CDD3', borderColor: 'black'}}>
              <Text style={styles.fontColor}>
                My Info
              </Text>

              <View style={{flex: 1,alignItems: 'flex-end'}}>
                <Icon ios='ios-person' android="md-person" style={styles.icons} />
              </View>
            </ListItem>
            <ListItem
              style={{flex: 1, backgroundColor: '#A3CDD3', borderColor: '#101112'}}>
              <Text style={styles.fontColor}>
                My Friends
              </Text>
              <View style={{flex: 1,alignItems: 'flex-end'}}>
                <Icon ios='ios-contacts' android="md-contacts" style={styles.icons} />
              </View>
            </ListItem>

            <ListItem
              style={{flex: 1, backgroundColor: '#A3CDD3', borderColor: '#101112'}}>
              <Text style={styles.fontColor}>
                My History
              </Text>
              <View style={{flex: 1,alignItems: 'flex-end'}}>
                <Icon ios='ios-book' android="md-book" style={styles.icons} />
              </View>
            </ListItem>
            <ListItem
              style={{flex: 1, backgroundColor: '#A3CDD3', borderColor: '#101112'}}>
              <Text style={styles.fontColor}>
                My Groups
              </Text>
              <View style={{flex: 1,alignItems: 'flex-end'}}>
                <Icon ios='ios-people' android="md-people" style={styles.icons}/>
              </View>
            </ListItem>

            <ListItem
              style={{flex: 1, backgroundColor: '#A3CDD3', borderColor: '#101112'}}
              >
                <Text style={styles.fontColor}>
                  My Achievements
                </Text>
                <View style={{flex: 1,alignItems: 'flex-end'}}>
                  <Icon ios='ios-trophy' android="md-trophy" style={styles.icons}/>
                </View>
              </ListItem>
            </List>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <Button full danger style={{marginTop: 2}}>
                <Text>Logout</Text>
              </Button>
            </View>
          </View>
        </Container>
      )
    }
  }
