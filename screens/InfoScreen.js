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


export default class ActivityScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Usul Changberg Lefcourt',
      email: 'usulchangberglefcourt@family.co',
      number: '9827372899',
      edit: false
    }
  }

  static navigationOptions = {
    title: 'Info',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
    * content, we just wanted to give you a quick view of your config */
    return (
      <Container style={{display: 'flex', flexDirection: 'row', backgroundColor: '#A3CDD3', paddingTop: 20}}>
        <Content style={{display: 'flex'}} contentContainerStyle={{flex: 1}}>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>

                <View style={{alignSelf: 'center'}}>
                  <Image style={{width: 120, height: 120, borderRadius: 60}} source={{ uri: 'https://cdn1.bigcommerce.com/server5600/ovem0imu/products/906/images/22492/frontier-fort-with-swing-set-28-2005-02__80409.1498267018.1280.1280.jpg?c=2' }} />
                </View>
              </View>
            <View style={{flexDirection: 'column', marginTop: 10}}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 2}}>
                  <Item>
                    <Input value={this.state.name}
                    />
                  </Item>
                </View>
                <View style={{flex: 1, marginLeft: 5}}>
                  <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                    Name
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 2}}>
                  <Item>
                    <Input value={this.state.email}
                    />
                  </Item>
                </View>
                <View style={{flex: 1,  marginLeft: 5}}>
                  <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                    Email
                  </Text>
                </View>
              </View>

              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 2}}>
                  <Item>
                    <Input value={this.state.number}
                    />
                  </Item>
                </View>
                <View style={{flex: 1, marginLeft: 5}}>
                  <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                    Phone #
                  </Text>
                </View>
              </View>
            </View>
          </Content>
        </Container>
      )
    }
  }
