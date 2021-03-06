import React from 'react';
import Emoji from 'react-native-emoji';

// Have them enter date picker

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  Picker,
  Dimensions,

} from 'react-native';
import styles from '../styles.js'

import { ExpoConfigView } from '@expo/samples';
import { Container, Header, Content, Button, Icon, Text, Item, Input, Form, Label, Thumbnail, Switch, Segment } from 'native-base';

export default class CreateGroup extends React.Component {
  constructor() {
    super();
    this.state = {
      switchValue: false,
      publicValue: true,
      state: ''
    }
  }

  static navigationOptions = {
    title: 'Create Group',
  };

  switchValue(){
    this.setState({switchValue: !this.state.switchValue})
  }

  publicValue(){
    console.log('toggling: ', this.state.publicValue)
    this.setState({publicValue: !this.state.publicValue})
  }

  createGroup = async () => {
    const date = new Date(2017, 11, 18); // when tourney will start
    console.log('trying to create', date)

  try {
    const response = await fetch('http://fit-fun.herokuapp.com/new/group', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        public: this.state.publicValue,
        name: 'first',
        description: 'hello',
        groupImg: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Velma_Dinkley.png/150px-Velma_Dinkley.png',
        startDate: date
      }),
    });

    const res = response.json();
    console.log('res: ', res)
  } catch(e){
    console.log('error: ', e)
  }

  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
    * content, we just wanted to give you a quick view of your config */

    const resizeMode = 'cover';

    return (
      <Container style={{display: 'flex', flex: 1, flexDirection: 'row', backgroundColor: '#A3CDD3', paddingTop: 5}}>
        <Content style={{flex: 1}}>
          <Form>
            <View>
              <Item stackedLabel>
                <Label style={styles.labels}>Group Name</Label>
                <Input style={styles.phFontSize}/>
              </Item>
            </View>

            <View style={styles.element}>
              <Item stackedLabel>
                <Label style={styles.labels}>Description</Label>
                <Input
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
                      editable = {true}
                        numberOfLines = {4}
                        style={styles.phFontSize}
                        maxLength = {35}/>
                  </Item>
                    </View>
                    <View style={styles.pGroup}>
                      <Label style={styles.labels}>Public Group?</Label>
                      <Button style={{marginTop: 15,height: 55, backgroundColor: '#A3CDD3', justifyContent: 'center'}} onPress={() => this.publicValue()}>
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
                        selectedValue={this.state.language}
                        onValueChange={(itemValue) => this.setState({state: itemValue})}
                        >
                          <Picker.Item label="Alabama" value="Alabama" />
                          <Picker.Item label="Alaska" value="Alaska" />
                          <Picker.Item label="Arizona" value="Arizona" />
                          <Picker.Item label="Arkansas" value="Arkansas" />
                          <Picker.Item label="California" value="California" />
                          <Picker.Item label="Colorado" value="Colorado" />
                          <Picker.Item label="Connecticut" value="Connecticut" />
                          <Picker.Item label="Delaware" value="Delaware" />
                          <Picker.Item label="Florida" value="Florida" />
                          <Picker.Item label="Georgia" value="Georgia" />
                          <Picker.Item label="Hawaii" value="Hawaii" />
                          <Picker.Item label="Idaho" value="Idaho" />
                          <Picker.Item label="Illinois" value="Illinois" />
                          <Picker.Item label="Iowa" value="Iowa" />
                          <Picker.Item label="Indiana" value="Indiana" />
                          <Picker.Item label="Indiana" value="Indiana" />
                          <Picker.Item label="Kansas" value="Kansas" />
                          <Picker.Item label="Kentucky" value="Kentucky" />
                          <Picker.Item label="Louisiana" value="Louisiana" />
                          <Picker.Item label="Maine" value="Maine" />
                          <Picker.Item label="Maryland" value="Maryland" />
                          <Picker.Item label="Massachusetts" value="Massachusetts" />
                          <Picker.Item label="Michigan" value="Michigan" />
                          <Picker.Item label="Minnesota" value="Minnesota" />
                          <Picker.Item label="Mississippi" value="Mississippi" />
                          <Picker.Item label="Missouri" value="Missouri" />
                          <Picker.Item label="Montana" value="Montana" />
                          <Picker.Item label="Nebraska" value="Nebraska" />
                          <Picker.Item label="Nevada" value="Nevada" />
                          <Picker.Item label="New Hampshire" value="New-Hampshire" />
                          <Picker.Item label="New Jersey" value="New-Jersey" />
                          <Picker.Item label="New Mexico" value="New-Mexico" />
                          <Picker.Item label="New York" value="New-York" />
                          <Picker.Item label="North Carolina" value="North-Carolina" />
                          <Picker.Item label="North Dakota" value="North-Dakota" />
                          <Picker.Item label="Ohio" value="Ohio" />
                          <Picker.Item label="Oklahoma" value="Oklahoma" />
                          <Picker.Item label="Oregon" value="Oregon" />
                          <Picker.Item label="Pennsylvania" value="Pennsylvania" />
                          <Picker.Item label="South Carolina" value="South-Carolina" />
                          <Picker.Item label="South Dakota" value="South-Dakota" />
                          <Picker.Item label="Tennessee" value="Tennessee" />
                          <Picker.Item label="Texas" value="Texas" />
                          <Picker.Item label="Utah" value="Utah" />
                          <Picker.Item label="Vermont" value="Vermont" />
                          <Picker.Item label="Virginia" value="Virginia" />
                          <Picker.Item label="Washington" value="Washington" />
                          <Picker.Item label="West Virginia" value="West-Virginia" />
                          <Picker.Item label="Wisconsin" value="Wisconsin" />
                          <Picker.Item label="Wyoming" value="Wyoming" />
                        </Picker>
                    </View>

                    <View style={{paddingTop: 105}}>
                      <Button block
                        onPress={this.createGroup.bind(this)}
                        style={{backgroundColor: '#545D5E'}}>

                        <Text>Create Tourney</Text>
                      </Button>
                    </View>
                  </Form>
                  </Content>
                </Container>
              )
            }
          }
