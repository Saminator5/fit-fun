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


export default class ActivityScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      type: 'cardio',
      rigor: 'casual',
      hours: 0,
      minutes: 0,
    }
  }

  addActivity = async () => {
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

  static navigationOptions = {
    title: 'Activity',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
    * content, we just wanted to give you a quick view of your config */
    return (
      <Container style={{display: 'flex', flexDirection: 'row', backgroundColor: '#A3CDD3', paddingTop: 20}} >
        <Content style={{display: 'flex'}} contentContainerStyle={{flex: 1, justifyContent: 'space-between', flexDirection: 'column'}}>
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
                      onPress={this.addActivity.bind(this)}>
                      <Text>
                        Add activity
                      </Text>
                    </Button>
                  </View>
                </Content>
              </Container>
            )
          }
        }
