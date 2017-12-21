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

import DatePicker from 'react-native-datepicker'


import styles from '../styles.js'
import { ExpoConfigView } from '@expo/samples';
import { Container, Header, Content, Button, Icon, Text, Item, Input, Form, Label, Thumbnail, Segment, Card, CardItem, Left, Body, Right } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';


export default class CreateScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      type: 'cardio',
      rigor: 'casual',
      hours: 0,
      minutes: 0,
      createActivity: true,
      createGroup: false,
      switchValue: false,
      publicValue: true,
      state: 'Arizona',
      groupName: '',
      description: '',
      mStatement: '',
      date: '2016-05-15',
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
          type: this.state.type,
          duration: this.state.minutes + (60 * this.state.hours),
          rigor: this.state.rigor
        }),
      });

      const res = await response.json();
      console.log('res: ', res)
    }  catch (e) {
      console.log('error: ', e)
    }

  }

  createGroup = async () => {
    const date = new Date(this.state.date); // when tourney will start
    console.log('trying to create', date)
    console.log('state: ', this.state)

    try {
      const response = await fetch('http://fit-fun.herokuapp.com/new/group', {
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
      const res = await response.json();
      console.log('res: ', res)
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
      <Container style={{display: 'flex', flexDirection: 'row', backgroundColor: '#A3CDD3', paddingTop: 20}} >
        <Content style={{display: 'flex'}}>
          <Segment style={{backgroundColor: 'transparent'}}>
            <Button
              onPress={() => this.setState({
                createGroup: true,
                createActivity: false
              })}
              style={this.state.createGroup ? {borderColor: '#D8DBE2', backgroundColor: 'red'} : {borderColor: '#D8DBE2', backgroundColor: 'grey'}}
              first>
              <Text style={{color: '#394648'}}>Create Group</Text>
            </Button>
            <Button
              onPress={() => this.setState({
                createActivity: true,
                createGroup: false
              })}
              style={this.state.createActivity ? {borderColor: '#D8DBE2', backgroundColor: 'red'} : {borderColor: '#D8DBE2', backgroundColor: 'grey'}} >
              <Text style={{color: '#394648'}}>Create Activity</Text>
            </Button>
          </Segment>

          {this.state.createGroup &&
            <Form>
              <View>
                <Item stackedLabel>
                  <Label style={styles.labels}>Group Name</Label>
                  <Input style={styles.phFontSize} value={this.state.groupName} onChangeText={(name) => this.setState({groupName: name})}/>
                </Item>
              </View>

              <View style={styles.element}>
                <Item stackedLabel>
                  <Label style={styles.labels}>Description</Label>
                  <Input
                    value={this.state.description} onChangeText={(description) => this.setState({description})}
                    editable = {true}
                    numberOfLines = {4}
                    placeholder = {`

                      `}
                      placeholderTextColor = '#828989'
                      multiline = {true}
                      style={styles.phFontSize}
                      maxLength = {120}/>
                    </Item>
                  </View>
                  <View style={styles.element}>
                    <Item stackedLabel>
                      <Label style={styles.labels}>Mission Statement (optional)</Label>
                      <Input
                        value={this.state.mStatement}
                        onChangeText={(mStatement) => this.setState({mStatement})}
                        editable = {true}
                        numberOfLines = {4}
                        style={styles.phFontSize}
                        maxLength = {35}/>
                      </Item>
                    </View>

                    <View style={styles.element}>
                      <Item stackedLabel>
                        <Label style={styles.labels}>Image url (optional)</Label>
                        <Input
                          value={this.state.url}
                          onChangeText={(url) => this.setState({url})}
                          style={styles.phFontSize}
                          maxLength = {35}/>
                        </Item>
                      </View>

                    <View style={styles.pGroup}>
                      <Label style={styles.labels}>Public Group?</Label>
                      <Button style={{marginTop: 15,height: 55, backgroundColor: '#A3CDD3', justifyContent: 'center'}} onPress={() => this.setState({publicValue: !this.state.publicValue})}>
                        {
                          this.state.publicValue ? <Icon style={{fontSize: 50}} name='eye' /> :
                          <Icon style={{fontSize: 50, color: 'red', marginLeft: 20}} name='eye-off' />
                        }
                      </Button>
                    </View>
                    <View>
                      <Text style={styles.title}>State:</Text>
                      <Picker
                        style={styles.picker} itemStyle={styles.pickerItem}
                        selectedValue={this.state.state}
                        onValueChange={(itemValue) => {
                          console.log('itemValue: ', itemValue)
                          this.setState({state: itemValue})
                        }}
                        >
                          <Picker.Item label="Alabama" value={"Alabama"} />
                          <Picker.Item label="Alaska" value="Alaska" />
                          <Picker.Item label="Arizona" value={"Arizona"} />
                          <Picker.Item label="Arkansas" value={"Arkansas"} />
                          <Picker.Item label="California" value={"California"} />
                          <Picker.Item label="Colorado" value={"Colorado"} />
                          <Picker.Item label="Connecticut" value={"Connecticut"} />
                          <Picker.Item label="Delaware" value={"Delaware"} />
                          <Picker.Item label="Florida" value={"Florida" }/>
                          <Picker.Item label="Georgia" value={"Georgia"} />
                          <Picker.Item label="Hawaii" value={"Hawaii"} />
                          <Picker.Item label="Idaho" value={"Idaho"} />
                          <Picker.Item label="Illinois" value={"Illinois"} />
                          <Picker.Item label="Iowa" value={"Iowa"} />
                          <Picker.Item label="Indiana" value={"Indiana"} />
                          <Picker.Item label="Indiana" value={"Indiana"} />
                          <Picker.Item label="Kansas" value={"Kansas"} />
                          <Picker.Item label="Kentucky" value={"Kentucky"} />
                          <Picker.Item label="Louisiana" value={"Louisiana"} />
                          <Picker.Item label="Maine" value={"Maine"} />
                          <Picker.Item label="Maryland" value={"Maryland"} />
                          <Picker.Item label="Massachusetts" value={"Massachusetts"} />
                          <Picker.Item label="Michigan" value={"Michigan"} />
                          <Picker.Item label="Minnesota" value={"Minnesota"} />
                          <Picker.Item label="Mississippi" value={"Mississippi"} />
                          <Picker.Item label="Missouri" value={"Missouri"} />
                          <Picker.Item label="Montana" value={"Montana"} />
                          <Picker.Item label="Nebraska" value={"Nebraska"} />
                          <Picker.Item label="Nevada" value={"Nevada"} />
                          <Picker.Item label="New Hampshire" value={"New-Hampshire"} />
                          <Picker.Item label="New Jersey" value={"New-Jersey"} />
                          <Picker.Item label="New Mexico" value={"New-Mexico"} />
                          <Picker.Item label="New York" value={"New-York"} />
                          <Picker.Item label="North Carolina" value={"North-Carolina"} />
                          <Picker.Item label="North Dakota" value={"North-Dakota"} />
                          <Picker.Item label="Ohio" value={"Ohio"} />
                          <Picker.Item label="Oklahoma" value={"Oklahoma"} />
                          <Picker.Item label="Oregon" value={"Oregon"} />
                          <Picker.Item label="Pennsylvania" value={"Pennsylvania"} />
                          <Picker.Item label="South Carolina" value={"South-Carolina"} />
                          <Picker.Item label="South Dakota" value={"South-Dakota"} />
                          <Picker.Item label="Tennessee" value={"Tennessee"} />
                          <Picker.Item label="Texas" value={"Texas"} />
                          <Picker.Item label="Utah" value={"Utah"} />
                          <Picker.Item label="Vermont" value={"Vermont"} />
                          <Picker.Item label="Virginia" value={"Virginia"} />
                          <Picker.Item label="Washington" value={"Washington"} />
                          <Picker.Item label="West Virginia" value={"West-Virginia"} />
                          <Picker.Item label="Wisconsin" value={"Wisconsin"} />
                          <Picker.Item label="Wyoming" value={"Wyoming"} />
                        </Picker>
                      </View>

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
                        onDateChange={(date) => {this.setState({date: date})}}
                      />

                      <View style={{marginTop: 10}}>
                        <Button block
                          onPress={this.createGroup}
                          style={{backgroundColor: '#545D5E'}}>

                          <Text>Create Group</Text>
                        </Button>
                      </View>
                    </Form>
                  }

                  {this.state.createActivity &&
                    <View>
                      <View style={{flex: 5, justifyContent: 'space-between'}}>
                        <View style={{flex: 1}}>
                          <Text style={styles.title}>Type:</Text>
                          <Picker
                            style={styles.picker}
                            itemStyle={styles.pickerItem}
                            selectedValue={this.state.type}
                            onValueChange={(itemValue) => this.setState({type: itemValue})}
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
                              <View>
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
                                <View>
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
                              </View>
                              <View style={{flex: 1, alignSelf: 'center'}}>
                                <Button style={styles.submitButton}
                                  onPress={this.addActivity}>
                                  <Text>
                                    Add activity
                                  </Text>
                                </Button>
                              </View>
                            </View>
                          }


                        </Content>
                      </Container>
                    )
                  }
                }
