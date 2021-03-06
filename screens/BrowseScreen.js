import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  RefreshControl,
} from 'react-native';

import { ExpoConfigView } from '@expo/samples';
import { Container, Header, Content, Button, Icon, Text, Item, Input, Form, Label, Thumbnail, Segment, Card, CardItem, Left, Body, Right } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';


export default class BrowseScreen extends React.Component {
  static navigationOptions = {
    title: 'Browse',
  };

  constructor() {
    super();
    this.state = {
      groups: [],
      admin: 'Loading...',
      publicValue: true,
      search: '',
      refreshing: false,
    }
  }

  static navigationOptions = {
    header: null
  };

  joinGroup = async (id) => {
    try {
      const response = await fetch(`http://fit-fun.herokuapp.com/new/membership/${id + 1}`, {
        method: 'POST',
        body: JSON.stringify({}),
      });
      const res = await response.json();
      console.log('res: ', res)
    }  catch (e) {
      console.log('error: ', e)
    }

    this.getData();
  }

  getData = async () => {
    console.log('props: ', this.props)
    console.log('will mount...')
    // public groups
    try {
      this.setState({refreshing: true})

      const response = await fetch('http://fit-fun.herokuapp.com/search/public', {
        method: 'GET'
      });

      const res = await response.json();
      console.log('PUBLIC: ', res.groups)
      res.groups.forEach(group => {
        let admin = '';
        for(let i = 0; i < group.users.length; i++){
          if(group.users[i].membership.role === 'admin'){
            admin = group.users[i].username
          }
        }
        group.admin = admin;
      });

      this.setState({
        groups: res.groups,
        refreshing: false
      })
    } catch(e){
      console.log('error: ', e)
    }
  }

  componentWillMount = async () => {
    try {
      await this.getData();
    } catch(e){
      console.log('error: ', e)
    }
  }


  render() {
    const _this = this;
    const resizeMode = 'cover';
    console.log('length: ', this.state.groups.length)
    return (
      <Container style={{display: 'flex', flexDirection: 'row', backgroundColor: '#A3CDD3', paddingTop: 20}}>
        <Content style={{flex: 1}}
          refreshControl={
         <RefreshControl
           refreshing={this.state.refreshing}
           onRefresh={this.getData.bind(this)}
         />
       }>
          <Segment>
            <Button onClick={() => this.setState({publicValue: true})} style={{borderColor: '#D8DBE2', backgroundColor: '#8FAABA'}}><Text style={{color: '#394648'}}>Public</Text></Button>
            <Button onClick={() => this.setState({publicValue: false})} style={{borderColor: '#D8DBE2', backgroundColor: '#8FAABA'}} first><Text style={{color: '#394648'}}>Friends</Text></Button>
          </Segment>

          <Item>
            <Icon active name='home' style={{fontSize:25, color:'#394648', padding: 10}} />
            <Input  onChangeText={(search) => this.setState({search})} style={{color: '#2F3A3B'}}  placeholderTextColor='#394648' placeholder='Search groups...'/>
          </Item>

          {
            this.state.groups.length ? this.state.groups.map((group, id) => {
              let joined = false;
              group.users.map(user => {
                if (user.id === _this.props.navigation.state.params.user.user.id){
                  joined = true;
                }
              })
              return (
              <Card key={id} style={{height: 170, marginLeft: 20, marginRight: 20}}>
                <CardItem>
                  <Left style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Thumbnail source={{uri: 'https://img.huffingtonpost.com/asset/56f30663150000ad000b3082.jpeg?cache=c15cnysyem&ops=scalefit_960_noupscale'}} />
                    <View style={{flexDirection: 'column'}}>
                      <Text style={{fontWeight: 'bold'}}>{group.name}</Text>
                      <Text style={{fontSize: 14}} note>{group.description}</Text>
                    </View>
                    <View>
                      <TouchableOpacity
                        onPress={() => {
                          _this.joinGroup(id + 1);
                        }}>
                        {joined ? <Icon name="checkmark" /> : <Icon name='add-circle' />}
                      </TouchableOpacity>
                    </View>
                  </Left>
                </CardItem>

                <View style={{display: 'flex', flexDirection: 'row', backgroundColor: 'green', flex: 1}}>
                  <CardItem cardBody style={{
                    borderColor: 'grey',
                    borderWidth: 0.2,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    flex: 1}}>

                    <Grid style={{height: 70}}>
                      <Row size={33}>
                        <Col>
                          {/* group.users[0] ? {uri: group.users[0].img} :  */}
                          <Image source={{uri: 'https://image.spreadshirtmedia.com/image-server/v1/products/1003716746/views/1,width=800,height=800,appearanceId=1,backgroundColor=fff,version=1485256808/i-eat-ass-t-shirt-men-s-t-shirt.jpg'}} style={{resizeMode: 'contain',height: 25,flex: 1}}/>
                        </Col>
                        <Col>
                          {/* group.users[1] ? {uri: group.users[1].img} : */}
                          <Image source={{uri: 'https://image.spreadshirtmedia.com/image-server/v1/products/1003716746/views/1,width=800,height=800,appearanceId=1,backgroundColor=fff,version=1485256808/i-eat-ass-t-shirt-men-s-t-shirt.jpg'}} style={{resizeMode: 'contain',height: 25,flex: 1}}/>
                        </Col>
                        <Col>
                          {/* group.users[2] ? {uri: group.users[2].img} : */}
                          <Image source={{uri: 'https://image.spreadshirtmedia.com/image-server/v1/products/1003716746/views/1,width=800,height=800,appearanceId=1,backgroundColor=fff,version=1485256808/i-eat-ass-t-shirt-men-s-t-shirt.jpg'}} style={{resizeMode: 'contain',height: 25,flex: 1}}/>
                        </Col>
                      </Row>

                      <Row size={33}>
                        <Col>
                          {/* group.users[3] ? {uri: group.users[3].img} : */}
                          <Image source={{uri: 'https://image.spreadshirtmedia.com/image-server/v1/products/1003716746/views/1,width=800,height=800,appearanceId=1,backgroundColor=fff,version=1485256808/i-eat-ass-t-shirt-men-s-t-shirt.jpg'}} style={{resizeMode: 'contain',height: 25,flex: 1}}/>
                        </Col>
                        <Col>
                          {/* group.users[4] ? {uri: group.users[4].img} : */}
                          <Image source={{uri: 'https://image.spreadshirtmedia.com/image-server/v1/products/1003716746/views/1,width=800,height=800,appearanceId=1,backgroundColor=fff,version=1485256808/i-eat-ass-t-shirt-men-s-t-shirt.jpg'}} style={{resizeMode: 'contain',height: 25,flex: 1}}/>
                        </Col>
                        <Col>
                          {/* group.users[5] ? {uri: group.users[5].img} : */}
                          <Image source={{uri: 'https://image.spreadshirtmedia.com/image-server/v1/products/1003716746/views/1,width=800,height=800,appearanceId=1,backgroundColor=fff,version=1485256808/i-eat-ass-t-shirt-men-s-t-shirt.jpg'}} style={{resizeMode: 'contain',height: 25,flex: 1}}/>
                        </Col>
                      </Row>

                      <Row size={33}>
                        <Col>
                          {/* group.users[6] ? {uri: group.users[6].img} : */}
                          <Image source={{uri: 'https://image.spreadshirtmedia.com/image-server/v1/products/1003716746/views/1,width=800,height=800,appearanceId=1,backgroundColor=fff,version=1485256808/i-eat-ass-t-shirt-men-s-t-shirt.jpg'}} style={{resizeMode: 'contain',height: 25,flex: 1}}/>
                        </Col>
                        <Col>
                          {/* group.users[7] ? {uri: group.users[7].img} : */}
                          <Image source={{uri: 'https://image.spreadshirtmedia.com/image-server/v1/products/1003716746/views/1,width=800,height=800,appearanceId=1,backgroundColor=fff,version=1485256808/i-eat-ass-t-shirt-men-s-t-shirt.jpg'}} style={{resizeMode: 'contain',height: 25,flex: 1}}/>
                        </Col>
                        <Col>
                          {/* group.users[8] ? {uri: group.users[8].img} : */}
                          <Image source={{uri: 'https://image.spreadshirtmedia.com/image-server/v1/products/1003716746/views/1,width=800,height=800,appearanceId=1,backgroundColor=fff,version=1485256808/i-eat-ass-t-shirt-men-s-t-shirt.jpg'}} style={{resizeMode: 'contain',height: 25,flex: 1}}/>
                        </Col>
                      </Row>
                    </Grid>
                  </CardItem>

                  <CardItem cardBody style={{flex: 2, flexDirection: 'column', borderColor: 'grey', borderWidth: 0.5}}>
                    <Body style={{ padding: 4 }}>
                      <Text style={{ fontWeight: "bold"}}>{group.users.length} members</Text>
                      <Text>Created by {group.admin}</Text>
                    </Body>
                  </CardItem>
                </View>
              </Card>

            )}) : <Text>Loading...</Text>
          }
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },

  border: {
    borderRadius: 4,
    borderWidth: 2,
    width: 300,
    height: 70,
    borderColor: 'black',
    backgroundColor: '#fafafa',
  },

  input: {
    height: 50,
    width: 125,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  }
})
