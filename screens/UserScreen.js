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
import { Container, Header, Content, Button, Icon, Text, Item, Input, Form, Label, Thumbnail, Segment, Card, CardItem, Left, Body, Right } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class UserScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      joined: 'joined',
      name: '',
      img: 'https://s7d2.scene7.com/is/image/PetSmart/PB1201_STORY_CARO-Authority-HealthyOutside-DOG-20160818?$PB1201$',
    }
  }

  componentWillMount = async () => {
    console.log('user props: ', this.props);
    try {
      const response = await fetch(`http://fit-fun.herokuapp.com/user/${this.props.navigation.state.params.id}`, {
        method: 'GET'
      });

      console.log('response: ', response)

      const res = await response.json();
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      console.log('user found: ', res.user.groups)
      const date = new Date(res.user.createdAt);
      const month = months[date.getMonth()];

      console.log('date: ', date);
      this.setState({
        user: res.user,
        groupsLength: res.user.groups.length,
        date: date.getDate(),
        month: month,
        year: date.getFullYear(),
      })
    } catch(e){
      console.log('error: ', e)
    }
  }

  componentDidMount(){
    console.log('user: ', this.state.user.groups)
  }

  static navigationOptions = {
    title: 'User'
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
    * content, we just wanted to give you a quick view of your config */
    return (
      <Container style={{display: 'flex', flexDirection: 'row', backgroundColor: '#A3CDD3', backgroundColor: 'blue'}}>
        <ScrollView><View style={{flex: 1}}>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flex: 2}}>
            <View style={{alignSelf: 'center'}}>
              <Image style={{width: 120, height: 120, borderRadius: 60}} source={{uri: this.state.user.img}} />
            </View>
          </View>
          <View style={{flexDirection: 'column', marginTop: 10, backgroundColor: 'red', justifyContent: 'space-around', flex: 8}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 2}}>
                <Text> {this.state.user.username} </Text>
              </View>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontSize: 14, fontWeight: 'bold'}}>Name</Text>
              </View>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 2}}>
                <Text> {this.state.user.username} </Text>
              </View>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontSize: 14, fontWeight: 'bold'}}>Email</Text>
              </View>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 2}}>
                <Text> {this.state.month} {this.state.date} {this.state.year}</Text>
              </View>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontSize: 14, fontWeight: 'bold'}}>Joined</Text>
              </View>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 2}}>
                <Text> {this.state.user.hasOwnProperty('groups') ? this.state.user.groups.length : '...'} </Text>
              </View>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontSize: 14, fontWeight: 'bold'}}>Groups</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      </Container>
    )
  }
}
