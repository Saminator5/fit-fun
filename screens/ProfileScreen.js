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
const {width, height} = Dimensions.get('window')


export default class ActivityScreen extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  static navigationOptions = {
    title: 'Profile',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
    * content, we just wanted to give you a quick view of your config */
    return (

        <Container style={{display: 'flex', flexDirection: 'row', backgroundColor: '#A3CDD3',flex: 1}}>
          <View style={{flex: 1}}>
            <View style={{alignItems: 'center'}}>
              <Image style={{width: 120, height: 120, borderRadius: 60}} source={{ uri: 'https://cdn1.bigcommerce.com/server5600/ovem0imu/products/906/images/22492/frontier-fort-with-swing-set-28-2005-02__80409.1498267018.1280.1280.jpg?c=2' }} />
            </View>
            <View style={{flex: 7}}>
              <List style={{marginBottom: 5}}>
                <ListItem
                  style={{backgroundColor: '#A3CDD3', borderColor: '#A3CDD3'}}>
                  <View style={{marginRight: 7}}>
                    <Icon ios='ios-person' android="md-person" />
                  </View>
                  <Text>
                    My Info
                  </Text>
                </ListItem>
                <ListItem
                  style={{backgroundColor: '#A3CDD3', borderColor: '#101112'}}>
                  <View style={{marginRight: 7}}>
                    <Icon ios='ios-contacts' android="md-contacts" />
                  </View>
                  <Text>
                    My Friends
                  </Text>
                </ListItem>

                <ScrollView
                  style={{borderWidth: 2, borderColor: 'black', marginLeft: 12}}
                  horizontal={true}
                  scrollEnabled={true}>

                  <View style={{paddingRight: 10}}>
                    <Thumbnail style={{width: 65, height: 65}} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/LeBron_James_%2831944491583%29.jpg'}} />
                      <Text ellipsizeMode='tail'
                        numberOfLines={1}
                        style={{width: 65, fontSize: 12, fontWeight: 'bold'}}>Lebron James is a great basketball player</Text>
                  </View>
                  <View style={{paddingRight: 10}}>
                    <Thumbnail style={{width: 65, height: 65}} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/LeBron_James_%2831944491583%29.jpg'}} />
                      <Text ellipsizeMode='tail'
                        numberOfLines={1}
                        style={{width: 65, fontSize: 12, fontWeight: 'bold'}}>Lebron James is a great basketball player</Text>
                  </View>
                  <View style={{paddingRight: 10}}>
                    <Thumbnail style={{width: 65, height: 65}} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/LeBron_James_%2831944491583%29.jpg'}} />
                      <Text ellipsizeMode='tail'
                        numberOfLines={1}
                        style={{width: 65, fontSize: 12, fontWeight: 'bold'}}>Lebron James is a great basketball player</Text>
                  </View>
                  <View style={{paddingRight: 10}}>
                    <Thumbnail style={{width: 65, height: 65}} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/LeBron_James_%2831944491583%29.jpg'}} />
                      <Text ellipsizeMode='tail'
                        numberOfLines={1}
                        style={{width: 65, fontSize: 12, fontWeight: 'bold'}}>Lebron James is a great basketball player</Text>
                  </View>
                  <View style={{paddingRight: 10}}>
                    <Thumbnail style={{width: 65, height: 65}} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/LeBron_James_%2831944491583%29.jpg'}} />
                      <Text ellipsizeMode='tail'
                        numberOfLines={1}
                        style={{width: 65, fontSize: 12, fontWeight: 'bold'}}>Lebron James is a great basketball player</Text>
                  </View>
                  <View style={{paddingRight: 10}}>
                    <Thumbnail style={{width: 65, height: 65}} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/LeBron_James_%2831944491583%29.jpg'}} />
                      <Text ellipsizeMode='tail'
                        numberOfLines={1}
                        style={{width: 65, fontSize: 12, fontWeight: 'bold'}}>Lebron James is a great basketball player</Text>
                  </View>
                  <View style={{paddingRight: 10}}>
                    <Thumbnail style={{width: 65, height: 65}} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/LeBron_James_%2831944491583%29.jpg'}} />
                      <Text ellipsizeMode='tail'
                        numberOfLines={1}
                        style={{width: 65, fontSize: 12, fontWeight: 'bold'}}>Lebron James is a great basketball player</Text>
                  </View>
                  <View style={{paddingRight: 10}}>
                    <Thumbnail style={{width: 65, height: 65}} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/LeBron_James_%2831944491583%29.jpg'}} />
                      <Text ellipsizeMode='tail'
                        numberOfLines={1}
                        style={{width: 65, fontSize: 12, fontWeight: 'bold'}}>Lebron James is a great basketball player</Text>
                  </View>
                  <View style={{paddingRight: 10}}>
                    <Thumbnail style={{width: 65, height: 65}} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/LeBron_James_%2831944491583%29.jpg'}} />
                      <Text ellipsizeMode='tail'
                        numberOfLines={1}
                        style={{width: 65, fontSize: 12, fontWeight: 'bold'}}>Lebron James is a great basketball player</Text>
                  </View>
                  <View style={{paddingRight: 10}}>
                    <Thumbnail style={{width: 65, height: 65}} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/LeBron_James_%2831944491583%29.jpg'}} />
                      <Text ellipsizeMode='tail'
                        numberOfLines={1}
                        style={{width: 65, fontSize: 12, fontWeight: 'bold'}}>Lebron James is a great basketball player</Text>
                  </View>
                  <View style={{paddingRight: 10}}>
                    <Thumbnail style={{width: 65, height: 65}} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/LeBron_James_%2831944491583%29.jpg'}} />
                      <Text ellipsizeMode='tail'
                        numberOfLines={1}
                        style={{width: 65, fontSize: 12, fontWeight: 'bold'}}>Lebron James is a great basketball player</Text>
                  </View>
                  <View style={{paddingRight: 10}}>
                    <Thumbnail style={{width: 65, height: 65}} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/LeBron_James_%2831944491583%29.jpg'}} />
                      <Text ellipsizeMode='tail'
                        numberOfLines={1}
                        style={{width: 65, fontSize: 12, fontWeight: 'bold'}}>Lebron James is a great basketball player</Text>
                  </View>
                  <View style={{paddingRight: 10}}>
                    <Thumbnail style={{width: 65, height: 65}} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/LeBron_James_%2831944491583%29.jpg'}} />
                      <Text ellipsizeMode='tail'
                        numberOfLines={1}
                        style={{width: 65, fontSize: 12, fontWeight: 'bold'}}>Lebron James is a great basketball player</Text>
                  </View>
                  <View style={{paddingRight: 10}}>
                    <Thumbnail style={{width: 65, height: 65}} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/LeBron_James_%2831944491583%29.jpg'}} />
                      <Text ellipsizeMode='tail'
                        numberOfLines={1}
                        style={{width: 65, fontSize: 12, fontWeight: 'bold'}}>Lebron James is a great basketball player</Text>
                  </View>
                </ScrollView>

                <ListItem
                  style={{backgroundColor: '#A3CDD3', borderColor: '#101112'}}>
                    <View style={{marginRight: 10}}>
                      <Icon ios='ios-book' android="md-book" />
                    </View>
                    <View style={{marginRight: 10}}>
                      <Text>
                        My History
                      </Text>
                    </View>
                  </ListItem>
                <ListItem
                  style={{backgroundColor: '#A3CDD3', borderColor: '#101112'}}>
                  <View style={{marginRight: 10}}>
                    <Icon ios='ios-people' android="md-people" />
                  </View>
                  <Text>
                    My Groups
                  </Text>
                </ListItem>

                <ListItem
                  style={{backgroundColor: '#A3CDD3', borderColor: '#101112'}}>
                  <View style={{marginRight: 10}}>
                    <Icon ios='ios-trophy' android="md-trophy" />
                  </View>
                  <Text>
                    My Achievements
                  </Text>
                </ListItem>
              </List>
            </View>

            <Button full danger style={{marginTop: 10}}>
              <Text>Logout</Text>
            </Button>
          </View>
        </Container>
      )
    }
  }
