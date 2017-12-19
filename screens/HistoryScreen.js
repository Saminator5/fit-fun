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


export default class HistoryScreen extends React.Component {
  static navigationOptions = {
    title: 'History',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
    * content, we just wanted to give you a quick view of your config */
    return (
      <Container style={{display: 'flex', flexDirection: 'row', backgroundColor: '#A3CDD3', paddingTop: 20}}>

        <Content style={{flex: 1}}>
          <View style={{alignSelf: 'flex-end', marginRight: 5, flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold', fontSize: 25, textAlign: 'right'}}>
              Points:
            </Text>
            <View style={{marginLeft: 7, borderColor: '#101112', borderWidth: 2, width: 200}}>
              <Text style={{fontWeight: 'bold', fontSize: 25, textAlign: 'right'}}>
                1356334
              </Text>
            </View>
          </View>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://i.imgur.com/RjXZTgw.jpg'}} />
                <Body>
                  <View style={{flexDirection: 'row'}}>
                  <Text style={{fontWeight: 'bold'}}>Swimming</Text>
                  <Text> (30 min)</Text>
                </View>
                  <Text note>12-06-17</Text>
                </Body>
              </Left>
              <View style={{display: 'flex', width: 50, alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row'}}>
                  <Text style={{fontWeight: 'bold', fontSize: 20}}>35</Text>
                  <Text style={{fontWeight: 'bold', fontSize: 10}}> pts</Text>
              </View>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://i.imgur.com/RjXZTgw.jpg'}} />
                <Body>
                  <View style={{flexDirection: 'row'}}>
                  <Text style={{fontWeight: 'bold'}}>Swimming</Text>
                  <Text> (30 min)</Text>
                </View>
                  <Text note>12-06-17</Text>
                </Body>
              </Left>
              <View style={{display: 'flex', width: 50, alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row'}}>
                  <Text style={{fontWeight: 'bold', fontSize: 20}}>35</Text>
                  <Text style={{fontWeight: 'bold', fontSize: 10}}> pts</Text>
              </View>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://i.imgur.com/RjXZTgw.jpg'}} />
                <Body>
                  <View style={{flexDirection: 'row'}}>
                  <Text style={{fontWeight: 'bold'}}>Swimming</Text>
                  <Text> (30 min)</Text>
                </View>
                  <Text note>12-06-17</Text>
                </Body>
              </Left>
              <View style={{display: 'flex', width: 50, alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row'}}>
                  <Text style={{fontWeight: 'bold', fontSize: 20}}>35</Text>
                  <Text style={{fontWeight: 'bold', fontSize: 10}}> pts</Text>
              </View>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://i.imgur.com/RjXZTgw.jpg'}} />
                <Body>
                  <View style={{flexDirection: 'row'}}>
                  <Text style={{fontWeight: 'bold'}}>Swimming</Text>
                  <Text> (30 min)</Text>
                </View>
                  <Text note>12-06-17</Text>
                </Body>
              </Left>
              <View style={{display: 'flex', width: 50, alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row'}}>
                  <Text style={{fontWeight: 'bold', fontSize: 20}}>35</Text>
                  <Text style={{fontWeight: 'bold', fontSize: 10}}> pts</Text>
              </View>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://i.imgur.com/RjXZTgw.jpg'}} />
                <Body>
                  <View style={{flexDirection: 'row'}}>
                  <Text style={{fontWeight: 'bold'}}>Swimming</Text>
                  <Text> (30 min)</Text>
                </View>
                  <Text note>12-06-17</Text>
                </Body>
              </Left>
              <View style={{display: 'flex', width: 50, alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row'}}>
                  <Text style={{fontWeight: 'bold', fontSize: 20}}>35</Text>
                  <Text style={{fontWeight: 'bold', fontSize: 10}}> pts</Text>
              </View>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://i.imgur.com/RjXZTgw.jpg'}} />
                <Body>
                  <View style={{flexDirection: 'row'}}>
                  <Text style={{fontWeight: 'bold'}}>Swimming</Text>
                  <Text> (30 min)</Text>
                </View>
                  <Text note>12-06-17</Text>
                </Body>
              </Left>
              <View style={{display: 'flex', width: 50, alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row'}}>
                  <Text style={{fontWeight: 'bold', fontSize: 20}}>35</Text>
                  <Text style={{fontWeight: 'bold', fontSize: 10}}> pts</Text>
              </View>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://i.imgur.com/RjXZTgw.jpg'}} />
                <Body>
                  <View style={{flexDirection: 'row'}}>
                  <Text style={{fontWeight: 'bold'}}>Swimming</Text>
                  <Text> (30 min)</Text>
                </View>
                  <Text note>12-06-17</Text>
                </Body>
              </Left>
              <View style={{display: 'flex', width: 50, alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row'}}>
                  <Text style={{fontWeight: 'bold', fontSize: 20}}>35</Text>
                  <Text style={{fontWeight: 'bold', fontSize: 10}}> pts</Text>
              </View>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://i.imgur.com/RjXZTgw.jpg'}} />
                <Body>
                  <View style={{flexDirection: 'row'}}>
                  <Text style={{fontWeight: 'bold'}}>Swimming</Text>
                  <Text> (30 min)</Text>
                </View>
                  <Text note>12-06-17</Text>
                </Body>
              </Left>
              <View style={{display: 'flex', width: 50, alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row'}}>
                  <Text style={{fontWeight: 'bold', fontSize: 20}}>35</Text>
                  <Text style={{fontWeight: 'bold', fontSize: 10}}> pts</Text>
              </View>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://i.imgur.com/RjXZTgw.jpg'}} />
                <Body>
                  <View style={{flexDirection: 'row'}}>
                  <Text style={{fontWeight: 'bold'}}>Swimming</Text>
                  <Text> (30 min)</Text>
                </View>
                  <Text note>12-06-17</Text>
                </Body>
              </Left>
              <View style={{display: 'flex', width: 50, alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row'}}>
                  <Text style={{fontWeight: 'bold', fontSize: 20}}>35</Text>
                  <Text style={{fontWeight: 'bold', fontSize: 10}}> pts</Text>
              </View>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://i.imgur.com/RjXZTgw.jpg'}} />
                <Body>
                  <View style={{flexDirection: 'row'}}>
                  <Text style={{fontWeight: 'bold'}}>Swimming</Text>
                  <Text> (30 min)</Text>
                </View>
                  <Text note>12-06-17</Text>
                </Body>
              </Left>
              <View style={{display: 'flex', width: 50, alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row'}}>
                  <Text style={{fontWeight: 'bold', fontSize: 20}}>35</Text>
                  <Text style={{fontWeight: 'bold', fontSize: 10}}> pts</Text>
              </View>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://i.imgur.com/RjXZTgw.jpg'}} />
                <Body>
                  <View style={{flexDirection: 'row'}}>
                  <Text style={{fontWeight: 'bold'}}>Swimming</Text>
                  <Text> (30 min)</Text>
                </View>
                  <Text note>12-06-17</Text>
                </Body>
              </Left>
              <View style={{display: 'flex', width: 50, alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row'}}>
                  <Text style={{fontWeight: 'bold', fontSize: 20}}>35</Text>
                  <Text style={{fontWeight: 'bold', fontSize: 10}}> pts</Text>
              </View>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}
