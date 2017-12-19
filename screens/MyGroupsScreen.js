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
    title: 'Groups',
  };

  componentWillMount = async () => {
    try {
      const response = await fetch('http://fit-fun.herokuapp.com/search/active', {
        method: 'GET'
      });

      const res = await response.json();
      console.log('res.groups', res.groups)
      this.setState({
        groups: res.groups
      })
      console.log('res: ', res)
    } catch(e){
      console.log('error: ', e)
    }
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
    * content, we just wanted to give you a quick view of your config */
    const resizeMode = 'cover';
    console.log(this.state.groups)
    return (
      <Container style={{display: 'flex', flexDirection: 'row', backgroundColor: '#A3CDD3', paddingTop: 20}}>
        <Content style={{flex: 1}}>
          {this.state.groups ? this.state.groups.map((group) =>  {
            return <Card style={{height: 170, marginLeft: 20, marginRight: 20}}>
              <CardItem>
                <Left>
                  <Thumbnail source={{uri: this.groupImg}} />
                  <Body>
                    <Text style={{fontWeight: 'bold'}}>{this.name}</Text>
                    <Text style={{fontSize: 10}} note>San Francisco</Text>
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

                <CardItem cardBody style={{flex: 2, flexDirection: 'column', borderColor: 'grey', borderWidth: 2}}>
                  <Body>
                    <Text style={{textAlign: 'left'}}>{`\u2022 Running Mon and Wed`}</Text>
                    <Text style={{textAlign: 'left'}}>{`\u2022 Weight lifting Tues and Thurs`}</Text>
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
