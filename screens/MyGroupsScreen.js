import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';

import { ExpoConfigView } from '@expo/samples';
import { Container, Header, Content, Button, Icon, Text, Item, Input, Form, Label, Thumbnail, Segment, Card, CardItem, Left, Body, Right } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';



export default class BrowseScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      groups: []
    }
  }
  static navigationOptions = {
    header: null
  };

  componentWillMount = async () => {
    try {
      const response = await fetch('http://fit-fun.herokuapp.com/search/public', {
        method: 'GET'
      });

      const res = await response.json();
      console.log('PUBLIC: ', res.groups)
      this.setState({
        groups: res.groups
      })
    } catch(e){
      console.log('error: ', e)
    }
  }

  goToGroup = (id) => {
    console.log('going...')
    const { navigate } = this.props.navigation;
    navigate('GroupScreen', {id: id})
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
    * content, we just wanted to give you a quick view of your config */
    const resizeMode = 'cover';
    const _this = this;
    console.log(this.state.groups)
    return (
      <Container style={{display: 'flex', flexDirection: 'row', backgroundColor: '#A3CDD3', paddingTop: 20}}>
        <Content style={{flex: 1}}>
          {this.state.groups ? this.state.groups.map((group) =>  {
            return <Card style={{height: 170, marginLeft: 20, marginRight: 20}}>
              <CardItem>
                <Left>
                  <Thumbnail source={group.groupImg ? {uri: group.groupImg} : {uri: 'https://vignette.wikia.nocookie.net/scoobydoo/images/9/9d/Velma_Dinkley.png/revision/latest?cb=20160213120532'}} />
                  <Body style={{display: 'flex', flexDirection:'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={{fontWeight: 'bold'}}>{group.name}</Text>
                    <TouchableOpacity onPress={() => _this.goToGroup(group.id)}>
                      <Icon name='arrow-forward' />
                    </TouchableOpacity>
                  </Body>
                </Left>
              </CardItem>

              <View style={{display: 'flex', flexDirection: 'row', backgroundColor: 'green', flex: 1}}>
                <CardItem cardBody style={{
                  borderColor: 'grey',
                  borderWidth: 0.5,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  flex: 1}}>
                  <Grid style={{height: 70}}>
                    <Row size={33}>
                      <Col>
                        <Image source={{uri: 'https://image.spreadshirtmedia.com/image-server/v1/products/1003716746/views/1,width=800,height=800,appearanceId=1,backgroundColor=fff,version=1485256808/i-eat-ass-t-shirt-men-s-t-shirt.jpg'}} style={{resizeMode: 'contain',height: 25,flex: 1}}/>
                      </Col>
                      <Col>
                        <Image source={{uri: 'https://image.spreadshirtmedia.com/image-server/v1/products/1003716746/views/1,width=800,height=800,appearanceId=1,backgroundColor=fff,version=1485256808/i-eat-ass-t-shirt-men-s-t-shirt.jpg'}} style={{resizeMode: 'contain',height: 25,flex: 1}}/>
                      </Col>
                      <Col>
                        <Image source={{uri: 'https://image.spreadshirtmedia.com/image-server/v1/products/1003716746/views/1,width=800,height=800,appearanceId=1,backgroundColor=fff,version=1485256808/i-eat-ass-t-shirt-men-s-t-shirt.jpg'}} style={{resizeMode: 'contain',height: 25,flex: 1}}/>
                      </Col>
                    </Row>

                    <Row size={33}>
                      <Col>
                        <Image source={{uri: 'https://image.spreadshirtmedia.com/image-server/v1/products/1003716746/views/1,width=800,height=800,appearanceId=1,backgroundColor=fff,version=1485256808/i-eat-ass-t-shirt-men-s-t-shirt.jpg'}} style={{resizeMode: 'contain',height: 25,flex: 1}}/>
                      </Col>
                      <Col>
                        <Image source={{uri: 'https://image.spreadshirtmedia.com/image-server/v1/products/1003716746/views/1,width=800,height=800,appearanceId=1,backgroundColor=fff,version=1485256808/i-eat-ass-t-shirt-men-s-t-shirt.jpg'}} style={{resizeMode: 'contain',height: 25,flex: 1}}/>
                      </Col>
                      <Col>
                        <Image source={{uri: 'https://image.spreadshirtmedia.com/image-server/v1/products/1003716746/views/1,width=800,height=800,appearanceId=1,backgroundColor=fff,version=1485256808/i-eat-ass-t-shirt-men-s-t-shirt.jpg'}} style={{resizeMode: 'contain',height: 25,flex: 1}}/>
                      </Col>
                    </Row>

                    <Row size={33}>
                      <Col>
                        <Image source={{uri: 'https://image.spreadshirtmedia.com/image-server/v1/products/1003716746/views/1,width=800,height=800,appearanceId=1,backgroundColor=fff,version=1485256808/i-eat-ass-t-shirt-men-s-t-shirt.jpg'}} style={{resizeMode: 'contain',height: 25,flex: 1}}/>
                      </Col>
                      <Col>
                        <Image source={{uri: 'https://image.spreadshirtmedia.com/image-server/v1/products/1003716746/views/1,width=800,height=800,appearanceId=1,backgroundColor=fff,version=1485256808/i-eat-ass-t-shirt-men-s-t-shirt.jpg'}} style={{resizeMode: 'contain',height: 25,flex: 1}}/>
                      </Col>
                      <Col>
                        <Image source={{uri: 'https://image.spreadshirtmedia.com/image-server/v1/products/1003716746/views/1,width=800,height=800,appearanceId=1,backgroundColor=fff,version=1485256808/i-eat-ass-t-shirt-men-s-t-shirt.jpg'}} style={{resizeMode: 'contain',height: 25,flex: 1}}/>
                      </Col>
                    </Row>
                  </Grid>
                </CardItem>

                <CardItem cardBody style={{flex: 2, flexDirection: 'column', borderColor: 'grey', borderWidth: 0.5}}>
                  <Body style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                    <Text style={{textAlign: 'center'}}>{`${group.members ? group.members : 32} members`}</Text>
                    <Text style={{textAlign: 'center', color: 'green'}}>{`Ongoing`}</Text>
                  </Body>
                </CardItem>
              </View>
            </Card>
          }) : <Text>No groups</Text>}
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
