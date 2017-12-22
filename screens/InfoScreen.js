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


export default class InfoScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {}
    }
  }
  //
  // forceTournament = async () => {
  //   try {
  //       let response = await fetch(`http://fit-fun.herokuapp.com/end/tourney/2`, {
  //         method: 'GET',
  //       })
  //
  //       response = await response.json();
  //       console.log('response: ', response)
  //     }  catch (error) {
  //     // Error retrieving data
  //     console.log("Could not load trophies!", error)
  //   }
  // }

  componentWillMount(){
    const user = this.props.navigation.state.params.user
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const date = new Date(user.createdAt);
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const day = date.getDate();
    this.setState({
      user,
      month,
      day,
      year,
    })
  }

  static navigationOptions = {
    title: 'Info'
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
    * content, we just wanted to give you a quick view of your config */
    return (
      <Container style={{display: 'flex', flexDirection: 'row', backgroundColor: '#A3CDD3'}}>
        <View style={{flex: 1}}>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flex: 2}}>
            <View style={{alignSelf: 'center'}}>
              <Image style={{width: 120, height: 120, borderRadius: 60}} source={{uri: this.state.user.img}} />
            </View>
          </View>
          <View style={{flexDirection: 'column', marginTop: 10,flex: 8}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 2}}>
                <Text> {this.state.user.username} </Text>
              </View>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontSize: 14, fontWeight: 'bold'}}>Name</Text>
              </View>
            </View>


            <View style={{flexDirection: 'row', marginTop: 10}}>
              <View style={{flex: 2}}>
                <Text> {this.state.month} {this.state.day}, {this.state.year} </Text>
              </View>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontSize: 14, fontWeight: 'bold'}}>Joined</Text>
              </View>
            </View>
          </View>
          <Button
            block
            // onPress={() => this.forceTournament()}
            >
              <Text>Delete my account</Text>
            </Button>
        </View>

      </Container>
    )
  }
}
