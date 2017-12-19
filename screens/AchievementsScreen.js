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

    }
  }

  static navigationOptions = {
    title: 'Achievements',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
    * content, we just wanted to give you a quick view of your config */
//     "date": DATE, //date of end of tournament
// "points": INTEGER,
// "tourney": {
// "id": INTEGER, //id of tournament
// "startDate": DATE,
// "endDate": DATE,
// "group": {
// “id”: INTEGER, //id of group
// "name": STRING
// }
// }
    return (
      <Container style={{display: 'flex', flexDirection: 'row', backgroundColor: '#A3CDD3', paddingTop: 20}} >
        <Content style={{display: 'flex'}} contentContainerStyle={{flex: 1, justifyContent: 'space-between', flexDirection: 'column'}}>

        </Content>
      </Container>
    )
  }
}
