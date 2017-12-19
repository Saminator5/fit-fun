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
  static navigationOptions = {
    title: 'Browse',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
    * content, we just wanted to give you a quick view of your config */
    const resizeMode = 'cover';
    return (
      <Container style={{display: 'flex', flexDirection: 'row', backgroundColor: '#A3CDD3', paddingTop: 20}}>
        <Content style={{flex: 1}}>
          <Segment>
            <Button style={{borderColor: '#D8DBE2', backgroundColor: '#8FAABA'}} first><Text style={{color: '#394648'}}>Friends</Text></Button>
            <Button style={{borderColor: '#D8DBE2', backgroundColor: '#8FAABA'}}><Text style={{color: '#394648'}}>Public</Text></Button>
            <Button style={{borderColor: '#D8DBE2', backgroundColor: '#8FAABA'}} last><Text style={{color: '#394648'}}>Nearby</Text></Button>
          </Segment>

          <Item>
            <Icon active name='home' style={{fontSize:25, color:'#394648', padding: 10}} />
            <Input style={{color: '#2F3A3B'}}  placeholderTextColor='#394648' placeholder='Search groups...'/>
          </Item>

          <Card style={{height: 170, marginLeft: 20, marginRight: 20}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://img.huffingtonpost.com/asset/56f30663150000ad000b3082.jpeg?cache=c15cnysyem&ops=scalefit_960_noupscale'}} />
                <Body>
                  <Text style={{fontWeight: 'bold'}}>Nike Running</Text>
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

          <Card style={{height: 170, marginLeft: 20, marginRight: 20}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://img.huffingtonpost.com/asset/56f30663150000ad000b3082.jpeg?cache=c15cnysyem&ops=scalefit_960_noupscale'}} />
                <Body>
                  <Text style={{fontWeight: 'bold'}}>Nike Running</Text>
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

          <Card style={{height: 170, marginLeft: 20, marginRight: 20}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://img.huffingtonpost.com/asset/56f30663150000ad000b3082.jpeg?cache=c15cnysyem&ops=scalefit_960_noupscale'}} />
                <Body>
                  <Text style={{fontWeight: 'bold'}}>Nike Running</Text>
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

          <Card style={{height: 170, marginLeft: 20, marginRight: 20}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://img.huffingtonpost.com/asset/56f30663150000ad000b3082.jpeg?cache=c15cnysyem&ops=scalefit_960_noupscale'}} />
                <Body>
                  <Text style={{fontWeight: 'bold'}}>Nike Running</Text>
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

          <Card style={{height: 170, marginLeft: 20, marginRight: 20}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://img.huffingtonpost.com/asset/56f30663150000ad000b3082.jpeg?cache=c15cnysyem&ops=scalefit_960_noupscale'}} />
                <Body>
                  <Text style={{fontWeight: 'bold'}}>Nike Running</Text>
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

          <Card style={{height: 170, marginLeft: 20, marginRight: 20}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://img.huffingtonpost.com/asset/56f30663150000ad000b3082.jpeg?cache=c15cnysyem&ops=scalefit_960_noupscale'}} />
                <Body>
                  <Text style={{fontWeight: 'bold'}}>Nike Running</Text>
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
