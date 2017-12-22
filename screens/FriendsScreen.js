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

export default class FriendsScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentWillMount = async () => {

  }

  static navigationOptions = {
    title: 'Friends'
  };

  render() {
    return (
      <Container style={{display: 'flex', flexDirection: 'row', backgroundColor: '#A3CDD3',flex: 1}}>
        <View style={{flex: 1,  marginTop: 45}}>
        </View>
      </Container>
    )
  }
}
