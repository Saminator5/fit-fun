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

export default class ProfileScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      user: {}
    }
  }

  static navigationOptions = {
    header: null
  };

    takeMeTo = (str) => {
      this.props.navigation.navigate(str)
    }

    logout = async () => {
      try {
        const response = await fetch('http://fit-fun.herokuapp.com/auth/logout', {
          method: 'GET',
        });

        const res = await response.json();
        console.log('logout response: ', res)

        if(res.success){
          console.log('taking you to login..');
          this.props.navigation.navigate('Login')
        }
      }  catch (e) {
        console.log('error: ', e)
      }
    }

    componentWillMount(){
      console.log('this.props: ', this.props)
    }

    render() {
      return (

        <Container style={{display: 'flex', flexDirection: 'row', backgroundColor: '#A3CDD3',flex: 1}}>
          <View style={{flex: 1,  marginTop: 45}}>
            <View style={{alignItems: 'center', flex: 2, justifyContent: 'space-between'}}>
              {this.props.navigation.state.params.user.user.username ? <Text style={{fontWeight: 'bold'}, styles.fontColor}>  {this.props.navigation.state.params.user.user.username}  </Text> : <Text>Loading...</Text>}

              {this.props.navigation.state.params.user.user.img ?
                <Image style={{width: 120, height: 120, borderRadius: 60}} source={{ uri: this.props.navigation.state.params.user.user.img }}/>
                :
                <Image style={{width: 120, height: 120, borderRadius: 60}} source={{ uri: 'https://cdn1.bigcommerce.com/server5600/ovem0imu/products/906/images/22492/frontier-fort-with-swing-set-28-2005-02__80409.1498267018.1280.1280.jpg?c=2'}} />
              }
            </View>
            <List style={{flex: 3, marginBottom: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
              <ListItem
                onPress={() => {this.props.navigation.navigate('InfoScreen', {user: this.props.navigation.state.params.user.user})}}
                style={{flex: 1, backgroundColor: '#A3CDD3', borderColor: 'black'}}>
                <Text style={styles.fontColor}>
                  My Info
                </Text>

                <View style={{flex: 1,alignItems: 'flex-end'}}>
                  <Icon ios='ios-person' android="md-person" style={styles.icons} />
                </View>
              </ListItem>
              <ListItem
                style={{flex: 1, backgroundColor: '#A3CDD3', borderColor: '#101112'}}>
                <Text style={styles.fontColor}>
                  My Friends
                </Text>
                <View style={{flex: 1,alignItems: 'flex-end'}}>
                  <Icon ios='ios-contacts' android="md-contacts" style={styles.icons} />
                </View>
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
                onPress={() => {this.takeMeTo('History')}}
                style={{flex: 1, backgroundColor: '#A3CDD3', borderColor: '#101112'}}>
                <Text style={styles.fontColor}>
                  My History
                </Text>
                <View style={{flex: 1,alignItems: 'flex-end'}}>
                  <Icon ios='ios-book' android="md-book" style={styles.icons} />
                </View>
              </ListItem>
              <ListItem
                onPress={() => {this.takeMeTo('Groups')}}
                style={{flex: 1, backgroundColor: '#A3CDD3', borderColor: '#101112'}}>
                <Text style={styles.fontColor}>
                  My Groups
                </Text>
                <View style={{flex: 1,alignItems: 'flex-end'}}>
                  <Icon ios='ios-people' android="md-people" style={styles.icons}/>
                </View>
              </ListItem>

              <ListItem
                style={{flex: 1, backgroundColor: '#A3CDD3', borderColor: '#101112'}}
                >
                  <Text style={styles.fontColor}>
                    My Achievements
                  </Text>
                  <View style={{flex: 1,alignItems: 'flex-end'}}>
                    <Icon ios='ios-trophy' android="md-trophy" style={styles.icons}/>
                  </View>
                </ListItem>
              </List>
              <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <Button full danger style={{marginTop: 2}}
                  onPress={() => this.logout()}>
                  <Text>Logout</Text>
                </Button>
              </View>
            </View>
          </Container>
        )
      }
    }
