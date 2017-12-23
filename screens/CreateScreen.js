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
import {NavigationActions} from 'react-navigation';

import DatePicker from 'react-native-datepicker'
import MainTabNavigator from '../navigation/MainTabNavigator';

import styles from '../styles.js'
import { ExpoConfigView } from '@expo/samples';
import { Container, Header, Content, Button, Icon, Text, Item, Input, Form, Label, Thumbnail, Segment, Card, CardItem, Left, Body, Right } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';


export default class CreateScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'cardio',
      rigor: 'casual',
      hours: 0,
      minutes: 0,
      createActivity: true,
      createGroup: false,
      switchValue: false,
      publicValue: true,
      groupName: '',
      description: '',
      date: '2017-12-22',
      url: '',
    }
  }

  addActivity = async () => {
    console.log('this.state: ', this.state)
    try {
      const response = await fetch('http://fit-fun.herokuapp.com/new/activity', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.state.name,
          duration: this.state.minutes + (60 * this.state.hours),
          rigor: this.state.rigor
        }),
      });

      const res = await response.json();
      console.log('res: ', res)
      this.setState({  name: 'cardio',
      rigor: 'casual',
      hours: 0,
      minutes: 0,
      createActivity: true,
      createGroup: false})

      const navigationObj = NavigationActions.navigate({
        routeName: 'Profile',
        action: NavigationActions.navigate({ routeName: 'HistoryScreen'})
      });

      this.props.navigation.dispatch(navigationObj);

    }  catch (e) {
      console.log('error: ', e)
    }

  }

  createGroup = async () => {
    const date = new Date(this.state.date); // when tourney will start
    console.log('trying to create', date)
    console.log('state: ', this.state)

    try {
      await fetch('http://fit-fun.herokuapp.com/new/group', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          public: this.state.publicValue,
          name: this.state.groupName,
          description: this.state.description,
          groupImg: this.state.url,
          startDate: date
        }),
      });

      this.setState({groupName: '', description: '', publicValue: true, date: '2017-12-22', createActivity: true, createGroup: false})
      this.props.navigation.navigate('Groups');


    } catch(e){
      console.log('error: ', e)
    }

  }

  static navigationOptions = {
    header: null
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
    * content, we just wanted to give you a quick view of your config */
    return (
      <Container style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', backgroundColor: '#D2E7E9', paddingTop: 20}} >
        {/* <Content style={{display: 'flex'}}> */}
          <Segment style={{backgroundColor: 'transparent'}}>
            <Button
              onPress={() => this.setState({
                createGroup: true,
                createActivity: false
              })}
              style={this.state.createGroup ? {borderColor: '#D8DBE2', backgroundColor: '#4F9BA6'} : {borderColor: '#D8DBE2', backgroundColor: '#D2E7E9'}}
              first>
              <Text style={{color: '#394648'}}>Create Group</Text>
            </Button>
            <Button
              onPress={() => this.setState({
                createActivity: true,
                createGroup: false
              })}
              style={this.state.createActivity ? {borderColor: '#D8DBE2', backgroundColor: '#4F9BA6'} : {borderColor: '#D8DBE2', backgroundColor: '#D2E7E9'}} >
              <Text style={{color: '#394648'}}>Create Activity</Text>
            </Button>
          </Segment>

          {this.state.createGroup &&
            <Form style={{ flex: 6, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
              <Item>
                <Label>Group name:</Label>
                <Input style={styles.phFontSize} value={this.state.groupName} onChangeText={(name) => this.setState({groupName: name})}/>
              </Item>
              <Item>
                <Label>Description:</Label>
                <Input
                  value={this.state.description} onChangeText={(description) => this.setState({description})}
                  editable = {true}
                  numberOfLines = {4}
                  multiline={true}
                  maxLength={120}
                  style={styles.phFontSize}/>
                </Item>
                <Item>
                  <Label>Image url (optional):</Label>
                  <Input
                    value={this.state.url}
                    onChangeText={(url) => this.setState({url})}
                    style={styles.phFontSize}
                    maxLength = {35}/>
                </Item>
                  <Item>
                    <Label>Public Group:</Label>
                    <Button style={{marginTop: 15,height: 55, backgroundColor: 'transparent', justifyContent: 'center'}} onPress={() => this.setState({publicValue: !this.state.publicValue})}>
                      {
                        this.state.publicValue ? <Icon style={{fontSize: 50}} name='eye' /> :
                        <Icon style={{fontSize: 50, color: 'red', marginLeft: 20}} name='eye-off' />
                      }
                    </Button>
                  </Item>
                  <Item style={{display: 'flex', flexWrap: 'wrap'}}>
                    <Label>Start of Tournament:</Label>
                    <DatePicker
                      style={{width: 200}}
                      date={this.state.date}
                      mode="date"
                      placeholder="select date"
                      format="YYYY-MM-DD"
                      confirmBtnText="Confirm"
                      cancelBtnText="Cancel"
                      customStyles={{
                        dateIcon: {
                          position: 'absolute',
                          left: 0,
                          top: 4,
                          marginLeft: 0
                        },
                        dateInput: {
                          marginLeft: 36
                        }
                      }}
                      onDateChange={(date) => {this.setState({date})}}
                    />
                  </Item>
                  <View style={{marginTop: 10}}>
                    <Button block
                      onPress={this.createGroup}
                      style={{backgroundColor: '#EE524F'}}>

                      <Text>Create Group</Text>
                    </Button>
                  </View>
                  </Form>
                }

                {this.state.createActivity &&
                    <View style={{flex: 7, justifyContent: 'space-between'}}>
                      <View style={{flex: 1}}>
                        <Text style={styles.title}>Name:</Text>
                        <Picker
                          style={styles.picker}
                          itemStyle={styles.pickerItem}
                          selectedValue={this.state.name}
                          onValueChange={(itemValue) => this.setState({name: itemValue})}
                          >
                            <Picker.Item label="Cardio" value="cardio" />
                            <Picker.Item label="Strength Training" value="strength-training" />
                            <Picker.Item label="Sport" value="Sport" />
                          </Picker>
                        </View>
                        <View style={{flex: 1}}>
                          <Text style={styles.title}>Intensity:</Text>
                          <Picker
                            style={styles.picker}
                            itemStyle={styles.pickerItem}
                            selectedValue={this.state.intensity}
                            onValueChange={(itemValue) => this.setState({intensity: itemValue})}
                            >
                              <Picker.Item label="Casual" value="casual" />
                              <Picker.Item label="Moderate" value="moderate" />
                              <Picker.Item label="High intensity" value="intensive" />
                            </Picker>
                          </View>

                          <View style={{flexDirection: 'row', flex: 1, justifyContent: 'space-around'}}>
                            <View style={{flex: 1}}>
                              <Text style={styles.title}>Hours:</Text>
                              <Picker
                                style={styles.picker}
                                itemStyle={styles.pickerItem}
                                selectedValue={this.state.hours}
                                onValueChange={(itemValue) => this.setState({hours: itemValue})}
                                >
                                  <Picker.Item label="0" value={0} />
                                  <Picker.Item label="1" value={1} />
                                  <Picker.Item label="2" value={2} />
                                  <Picker.Item label="3" value={3} />
                                  <Picker.Item label="4" value={4} />
                                  <Picker.Item label="5" value={5} />

                                </Picker>
                              </View>
                              <View  style={{flex: 1}}>
                                <Text style={styles.title}>Minutes:</Text>
                                <Picker
                                  style={styles.picker}
                                  itemStyle={styles.pickerItem}
                                  selectedValue={this.state.minutes}
                                  onValueChange={(itemValue) => this.setState({minutes: itemValue})}
                                  >
                                    <Picker.Item label="0" value={0} />
                                    <Picker.Item label="15" value={15} />
                                    <Picker.Item label="30" value={30} />
                                    <Picker.Item label="45" value={45} />
                                  </Picker>
                                </View>
                              </View>
                              <View style={{flex: 0.5, marginTop: 10}}>
                                <Button block style={{backgroundColor: '#EE524F'}}
                                  onPress={this.addActivity}>
                                  <Text>
                                    Add activity
                                  </Text>
                                </Button>
                              </View>
                            </View>
                        }


                      {/* </Content> */}

                    </Container>
                  )
                }
              }
