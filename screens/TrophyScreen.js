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
} from 'react-native';

import styles from '../styles.js'
import { ExpoConfigView } from '@expo/samples';
import { Container, Header, Content, Button, Icon, Text, Item, Input, Form, Label, Thumbnail, Segment, Card, CardItem, Left, Body, Right } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';


export default class GroupScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      trophies: []
    }
  }

  componentWillMount = async () => {
    try {
        let trophies = await fetch(`http://fit-fun.herokuapp.com/user/trophies`, {
          method: 'GET',
        })

        trophies = await trophies.json();
        trophies = trophies.trophies;

        console.log('trophies: ', trophies)
        this.setState({trophies})
      }  catch (error) {
      // Error retrieving data
      console.log("Could not load trophies!", error)
    }
  }

  static navigationOptions = {
    title: 'Trophies',
  };

  render() {
    return (
      <Container style={{display: 'flex', flexDirection: 'row', backgroundColor: '#A3CDD3', paddingTop: 20}} >
        <Content style={{display: 'flex'}}>
          {this.state.trophies.length
            ? <Text>You won a trophy!</Text>
            : <Text>You have no trophies. Win a tournament and come back!</Text>}
        </Content>
      </Container>
    )
  }
}
