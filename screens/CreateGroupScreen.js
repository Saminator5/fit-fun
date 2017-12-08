import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  Picker,

} from 'react-native';

import { ExpoConfigView } from '@expo/samples';
import { Container, Header, Content, Button, Icon, Text, Item, Input, Form, Label, Thumbnail, Switch } from 'native-base';

export default class CreateGroup extends React.Component {
  constructor() {
    super();
    this.state = {
      switchValue: false,
    }
  }

  static navigationOptions = {
    title: 'Create Group',
  };

  switchValue(){
    this.setState({switchValue: !this.state.switchValue})
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
    * content, we just wanted to give you a quick view of your config */
    const resizeMode = 'cover';

    return (
      <Container style={{display: 'flex', flex: 1, flexDirection: 'row', backgroundColor: '#A3CDD3', paddingTop: 20}}>
        <Content style={{flex: 1}}>

          <View style={{backgroundColor: '#8FAABA'}}>
            <Item>
              <Input placeholder="Enter your group's name"
                placeholderTextColor = {'#394648'}
                style={{fontSize: 18}}
              />
            </Item>
          </View>

          <View style={{marginTop: 60, height: 70, backgroundColor: '#8FAABA'}}>
            <Input
              editable = {true}
              placeholder = {'Description...'}
              placeholderTextColor = {'#394648'}
              numberOfLines = {4}
              multiline = {true}
              style={{borderColor: '#D8DBE2', borderWidth: 2, fontSize: 18}}
              maxLength = {120}/>
            </View>

            <View style={{flexDirection: 'row', marginTop: 60, backgroundColor: '#8FAABA', paddingTop: 10}}>
              <Text style={{color: '#394648', fontSize: 18}}>Public: </Text>

              <Switch
                onValueChange = {this.switchValue.bind(this)}
                value = {this.state.switchValue}
              />
            </View>

            <Text style={styles.title}>State:</Text>
            <Picker
              style={styles.twoPickers} itemStyle={styles.twoPickerItems}
              selectedValue={this.state.secondLanguage}
              onValueChange={(itemValue) => this.setState({secondLanguage: itemValue})}
              >
                <Picker.Item label="Texas" value="java" />
                <Picker.Item label="California" value="js" />
                <Picker.Item label="New York" value="python" />
                <Picker.Item label="Iowa" value="haxe" />
              </Picker>

              <Form>
                <View style={{paddingTop: 15, marginTop: 60}}>
                  <Button block style={{backgroundColor: '#545D5E'}}>
                    <Text>Create Group</Text>
                  </Button>
                </View>
              </Form>
            </Content>
          </Container>
        )
      }
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
      },
      picker: {
        backgroundColor: '#FFF0E0',
        borderColor: 'black',
        borderWidth: 1,
      },
      pickerItem: {
        color: 'red'
      },
      onePickerItem: {
        height: 44,
        color: 'red'
      },
      twoPickers: {
        height: 88,
        backgroundColor: '#8FAABA',
        borderColor: 'black',
        borderWidth: 1,
      },
      twoPickerItems: {
        height: 88,
        color: 'red'
      },
    });
