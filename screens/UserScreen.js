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
      user: {}
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
      const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
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
    title: 'Profile'
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
    * content, we just wanted to give you a quick view of your config */
    return (
      <Container style={{display: 'flex', flexDirection: 'row', backgroundColor: '#A3CDD3'}}>
        <View style={{flex: 2,  flexDirection: 'column', justifyContent: 'center', alignContent: 'space-between'}}>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flex: 2, padding: 2}}>
            <Image style={{width: 120, height: 120, borderRadius: 60, marginTop: 10, borderWidth: 3}} source={{uri: this.state.user.img}} />
          </View>

          <View style={{flex: 3, flexDirection: 'column', marginTop: 10, justifyContent: 'space-between', alignContent: 'space-between'}}>
              <Item style={{display: 'flex', flexDirection: 'column'}}>
                <Text>Name</Text>
                <Text style={styles.userScreenFont}> {this.state.user.username} </Text>
              </Item>
              <Item style={{display: 'flex',  flexDirection: 'column'}}>
                <Text>Joined</Text>
                <Text style={styles.userScreenFont}> {this.state.month} / {this.state.year}</Text>
              </Item>
              <Item style={{display: 'flex',  flexDirection: 'column'}}>
                <View style={{flexDirection: 'row'}}>
                <Text>Groups (</Text>
                <Text style={styles.userScreenFont}> {this.state.user.hasOwnProperty('groups') ? this.state.user.groups.length : '...'})</Text>
              </View>
                  <ScrollView
                    style={{marginLeft: 12, backgroundColor: 'white'}}
                    horizontal={true}
                    scrollEnabled={true}>

                    {this.state.user.groups ? this.state.user.groups.map((group, id) => {
                      return  <TouchableOpacity onPress={() => {}} key={id} style={{paddingRight: 10}}>
                        <Thumbnail style={{width: 50, height: 50}} source={{ uri: group.groupImg}} />
                        <Text ellipsizeMode='tail'
                          numberOfLines={1}
                          style={{maxWidth: 50, fontSize: 12, fontWeight: 'bold'}}>{group.name}</Text>
                        </TouchableOpacity>
                      }) : <Text>You have no friends ;/</Text>}
                    </ScrollView>
                  </Item>

              </View>
              <View style={{flex: 0.5, marginTop: 7, justifyContent: 'flex-end'}}>
                <Button
                  block
                  style={{ backgroundColor: '#545D5E'}}
                  >
                    <Text style={{ color: 'black'}}>Invite</Text>
                  </Button>
                </View>
              </View>
            </Container>
          )
        }
      }
