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
      name: '',
      img: 'https://s7d2.scene7.com/is/image/PetSmart/PB1201_STORY_CARO-Authority-HealthyOutside-DOG-20160818?$PB1201$',
    }
  }

  componentWillMount(){
    console.log('this.props: ', this.props)
    this.setState({
      name: this.props.navigation.state.params.user.username,
    })
  }


  static navigationOptions = {
    header: null
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
    * content, we just wanted to give you a quick view of your config */
    return (
      <Container style={{display: 'flex', flexDirection: 'row', backgroundColor: '#A3CDD3', paddingTop: 20}}>
        <Content style={{display: 'flex'}} contentContainerStyle={{flex: 1}}>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>

                <View style={{alignSelf: 'center'}}>
                  <Image style={{width: 120, height: 120, borderRadius: 60}} source={{ uri: this.state.img  }} />
                </View>
              </View>
            <View style={{flexDirection: 'column', marginTop: 10}}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 2}}>
                  <Text>
                    {this.state.name}
                    />
                  </Text>
                </View>
                <View style={{flex: 1, marginLeft: 5}}>
                  <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                    Name
                  </Text>
                </View>
              </View>
              {/* <View style={{flexDirection: 'row'}}>
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
              </View> */}

              {/* <View style={{flexDirection: 'row'}}>
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
              </View> */}
            </View>
          </Content>
        </Container>
      )
    }
  }
