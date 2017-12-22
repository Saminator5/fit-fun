import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  RefreshControl
} from 'react-native';

import { ExpoConfigView } from '@expo/samples';
import { Container, Header, Content, Button, Icon, Text, Item, Input, Form, Label, Thumbnail, Segment, Card, CardItem, Left, Body, Right } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';


export default class HistoryScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor() {
    super();
    this.state = {
      history: [],
      points: 0,
      refreshing: false
    }
  }

  back(){
    this.props.navigation.goBack()
  }

  static navigationOptions = {
    title: 'History'
  };

  getData = async () => {
    try {
      this.setState({ refreshing: true});
      const response = await fetch('http://fit-fun.herokuapp.com/user/history', {
        method: 'GET',
      });

      const res = await response.json();
      console.log('history response: ', res)
      res.history.sort((a, b) => {
        return a.createdAt > b.createdAt
      })

      this.setState({
        history: res.history,
        points: res.totalPoints.total,
        refreshing: false
      })

    }  catch (e) {
      console.log('error: ', e)
    }
  }

  componentDidMount = async () => {
    try {
      await this.getData();
    } catch (e) {
      console.log("error", e)
    }
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
    * content, we just wanted to give you a quick view of your config */
    return (
      <View style={{flex: 1}}>
      <Container style={{display: 'flex', flexDirection: 'row', backgroundColor: '#A3CDD3', paddingTop: 20}}>
        <Content style={{flex: 1}}
          refreshControl={
         <RefreshControl
           refreshing={this.state.refreshing}
           onRefresh={this.getData.bind(this)}
         />
       }>
          {/* <View style={{flex: 2, marginLeft: 5}}>
            <TouchableOpacity onPress={() => this.back()}><Icon name='arrow-back' /></TouchableOpacity>
          </View> */}

          <View style={{alignSelf: 'flex-end', marginRight: 5, flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold', fontSize: 25, textAlign: 'right'}}>
              Points:
            </Text>
            <View style={{marginLeft: 7, borderColor: '#101112', borderWidth: 2, width: 200}}>
              <Text style={{fontWeight: 'bold', fontSize: 25, textAlign: 'right'}}>
                {this.state.points ? this.state.points : 'No points yet..'}
              </Text>
            </View>
          </View>

          {this.state.history.length ?
            this.state.history.map((activity, id) => {
              const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
              let date = new Date(activity.createdAt);

              console.log('date: ', date)
              return <Card key={id}>
                <CardItem>
                  <Left>
                    <Thumbnail source={{uri: 'https://i.imgur.com/RjXZTgw.jpg'}} />
                    <Body>
                      <Text style={{fontWeight: 'bold'}}>{activity.name}</Text>
                      <Text>{parseInt(activity.duration/60)} hr {activity.duration % 60} minutes</Text>
                      <Text note>{months[date.getMonth() - 1]} {date.getDate()}</Text>
                    </Body>
                  </Left>
                  <View style={{display: 'flex', width: 50, alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row'}}>
                      <Text style={{fontWeight: 'bold', fontSize: 20}}>{activity.points}</Text>
                      <Text style={{fontWeight: 'bold', fontSize: 10}}> pts</Text>
                  </View>
                </CardItem>
              </Card>
            })

             : <Text>No activities have been completed yet.</Text>
           }
        </Content>
      </Container>
    </View>
    )
  }
}
