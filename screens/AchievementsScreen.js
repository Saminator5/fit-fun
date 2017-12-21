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

  back(){
    this.props.navigation.goBack()
  }

  static navigationOptions = {
    title: 'Achievements',
  };

  render() {
    return (
      <Container style={{display: 'flex', flexDirection: 'row', backgroundColor: '#A3CDD3', paddingTop: 20}} >
        <Button style={{fontSize: 10}} onPress={() => this.back()}><Text>Back</Text></Button>
        <Content style={{display: 'flex'}}>

        </Content>
      </Container>
    )
  }
}
