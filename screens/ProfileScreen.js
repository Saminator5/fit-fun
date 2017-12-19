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
    this.state = {}
  }

  static navigationOptions = {
    title: 'Profile',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
    * content, we just wanted to give you a quick view of your config */
    return (

      <Container style={{display: 'flex', flexDirection: 'row', backgroundColor: '#A3CDD3',flex: 1}}>
        <View style={{flex: 1}}>
          <View style={{alignItems: 'center', flex: 1}}>
            <Image style={{width: 120, height: 120, borderRadius: 60}} source={{ uri: 'https://cdn1.bigcommerce.com/server5600/ovem0imu/products/906/images/22492/frontier-fort-with-swing-set-28-2005-02__80409.1498267018.1280.1280.jpg?c=2' }} />
          </View>
          <View style={{flex: 1}}>
            <List style={{flex: 1, marginBottom: 1, display: 'flex'}}>
              <ListItem
                style={{flex: 1, backgroundColor: '#A3CDD3', borderColor: 'black'}}>
                <View>
                  <Text>
                    My Info
                  </Text>
                </View>
                <View>
                  <Icon ios='ios-person' android="md-person" style={{maxWidth: 22, fontSize: 22}} />
                </View>
              </ListItem>
              <ListItem
                style={{flex: 1, backgroundColor: '#A3CDD3', borderColor: '#101112'}}>
                  <Icon ios='ios-contacts' android="md-contacts" style={{maxWidth: 22, fontSize: 22}} />
                  <Text style={{marginLeft: 5}}>
                    My Friends
                  </Text>
              </ListItem>

              <ListItem
                style={{flex: 1, backgroundColor: '#A3CDD3', borderColor: '#101112'}}>
                <Icon ios='ios-book' android="md-book" style={{maxWidth: 22, fontSize: 22}} />
                <Text style={{marginLeft: 5}}>
                  My History
                </Text>
              </ListItem>
              <ListItem
                style={{flex: 1, backgroundColor: '#A3CDD3', borderColor: '#101112'}}>
                <Icon ios='ios-people' android="md-people" style={{maxWidth: 22, fontSize: 22}}/>
                <Text style={{marginLeft: 5}}>
                  My Groups
                </Text>
              </ListItem>

              <ListItem
                style={{flex: 1, backgroundColor: '#A3CDD3', borderColor: '#101112'}}
                >
                  <Icon ios='ios-trophy' android="md-trophy" style={{maxWidth: 22, fontSize: 22}}/>
                  <Text style={{marginLeft: 5}}>
                    My Achievements
                  </Text>
                </ListItem>
              </List>
            </View>
            <View style={{flex: 1}}>
              <Button full danger>
                <Text>Logout</Text>
              </Button>
            </View>
          </View>
        </Container>
      )
    }
  }
