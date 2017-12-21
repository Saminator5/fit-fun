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
import { Container, Header, Content, Button, Icon, Text, Item, Input, Form, Label, Thumbnail, Segment, Card, CardItem, Left, Body, Right } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

const {width, height} = Dimensions.get('window')
console.log('width: ', width)
console.log('height: ', height)
export default class GroupScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      activities: true,
      members: false,
      winners: false,
      activitiesArr: [],
      membersArr: [],
      winnersArr: [],
      group: {}
    }
  }

  static navigationOptions = {
    title: 'Group',
  };



  componentWillMount = async () => {
    console.log('id: ', this.props.navigation.state.params.id)
    try {
      const response = await fetch(`http://fit-fun.herokuapp.com/groups/${this.props.navigation.state.params.id}`, {
        method: 'GET'
      });

      console.log('response: ', response)

      const res = await response.json();
      console.log('group found: ', res.group)
      this.setState({
        group: res.group
      })
    } catch(e){
      console.log('error: ', e)
    }

    let activitiesArr = [];
    let membersArr = [];

    // NOTE could need fixing later (not wanting to this.setState in loop)
    for(i = 0; i < this.state.group.users.length; i++){
      const user = this.state.group.users[i];
      console.log('user: ', user)
      for(let j = 0; j < user.activities.length; j++){
        const activity = user.activities[j];
        console.log('activity: ', activity)
        activitiesArr.push({username: user.username.split(' ')[0], name: activity.name, duration: activity.duration, rigor: activity.rigor, points: activity.points, completedAt: activity.createdAt })
      }
      let userInfo = {id: user.id, role: user.membership.role, username: user.username}
      membersArr = [userInfo, ...membersArr];
    }

    activitiesArr.sort((a, b) => {
      return a.completedAt < b.completedAt
    })

    this.setState({activitiesArr, membersArr})
    console.log('activitiesArr: ', this.state.activitiesArr);
    console.log('membersArr: ', this.state.membersArr);
  }

  render() {

    console.log('this.state.group.name: ', this.state.group.name);
    console.log('this.state.group.description: ', this.state.group.description);

    return (
      <Container style={{display: 'flex', flexDirection: 'column', backgroundColor: '#A3CDD3'}} >
        <View style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
          <View style={{flex: 2}}>
            <Card style={{minHeight: 100, marginRight: 2, marginLeft: 2, display: 'flex', flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <Image style={{width: 80, height: 80, borderRadius: 40}} source={this.state.group.groupImg ? {uri: this.state.group.groupImg}: {uri: 'https://img.huffingtonpost.com/asset/56f30663150000ad000b3082.jpeg?cache=c15cnysyem&ops=scalefit_960_noupscale' }} />
              </View>
              <View style={{flex: 3, flexDirection: 'column', marginLeft: 2}}>
                <Text style={{fontWeight: 'bold'}}>{this.state.group.name ? this.state.group.name : <Text>Loading...</Text>}</Text>
                <Text style={{fontSize: 15, color: '#292929'}} note>{this.state.group.description}</Text>
              </View>
            </Card>
          </View>
          <View style={{flex: 6}}>
            <View>
              <Segment style={{marginLeft: 1, marginRight: 1}}>
                <Button first onPress={() => this.setState({
                  activities: true,
                  members: false,
                  winners: false
                })}>
                <Text>Activities</Text>
              </Button>
              <Button onPress={() => this.setState({
                activities: false,
                members: true,
                winners: false
              })}>
              <Text>Members</Text>
            </Button>
            <Button last onPress={() => this.setState({
              activities: false,
              members: false,
              winners: true
            })}>
            <Text>Winners</Text>
          </Button>
        </Segment>
      </View>
      <View style={{flex: 4}}>
        <ScrollView>
          <View style={{flex: 4, borderColor: 'black', borderWidth: 1/2}}>
          {this.state.activitiesArr.length !== 0 &&
            this.state.activitiesArr.map((activity, id) => {
              return <View key={id} style={{flexDirection: 'column', flex: 1}}>
                <Card>
                  <CardItem>
                    <Left>
                      <Thumbnail source={{uri: 'https://i.imgur.com/RjXZTgw.jpg'}} />
                      <Body>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                          <Text style={{fontWeight: 'bold'}}>{activity.username}:</Text>
                          <Text> {activity.name}</Text>
                        </View>
                        <Text>Intensity: {activity.rigor}</Text>
                        <Text note>{activity.duration} minutes</Text>
                      </Body>
                    </Left>
                    <View style={{display: 'flex', width: 50, alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row'}}>
                      <Text style={{fontWeight: 'bold', fontSize: 20}}>{activity.points}</Text>
                      <Text style={{fontWeight: 'bold', fontSize: 10}}> pts</Text>
                    </View>
                  </CardItem>
                </Card>
              </View>
            })
            }

          {this.state.members &&
            <View>
              <Card>
                <CardItem>
                  <Left>
                    <Thumbnail source={{uri: 'https://img.grouponcdn.com/iam/2Ptb6LZfTwH1Qkjgovd7Xuy7sKhN/2P-2048x1229/v1/c700x420.jpg'}} />
                    <Body>
                      <Text style={{fontWeight: 'bold'}}>Samuel</Text>
                      <View style={{flexDirection: 'row'}}>
                        <Text>180993837</Text>
                        <Text style={{color: 'grey', fontSize: 12, alignSelf: 'flex-end'}}>pts</Text>
                      </View>
                    </Body>
                  </Left>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Left>
                    <Thumbnail source={{uri: 'https://img.grouponcdn.com/iam/2Ptb6LZfTwH1Qkjgovd7Xuy7sKhN/2P-2048x1229/v1/c700x420.jpg'}} />
                    <Body>
                      <Text style={{fontWeight: 'bold'}}>Samuel</Text>
                      <View style={{flexDirection: 'row'}}>
                        <Text>180993837</Text>
                        <Text style={{color: 'grey', fontSize: 12, alignSelf: 'flex-end'}}>pts</Text>
                      </View>
                    </Body>
                  </Left>
                </CardItem>
              </Card>
            </View>
          }

          {this.state.winners &&
            <View>
              <Card style={{height: 100, marginLeft: 20, marginRight: 20}}>
                <CardItem>
                  <Left>
                    <Thumbnail source={{uri: 'https://img.huffingtonpost.com/asset/56f30663150000ad000b3082.jpeg?cache=c15cnysyem&ops=scalefit_960_noupscale'}} />
                    <Body>
                      <Text style={{fontWeight: 'bold', fontSize: 17}}>Symmone</Text>
                      <Text style={{fontSize: 15}} note>135</Text>
                    </Body>
                  </Left>
                  <Right>
                    <ScrollView>
                      <CardItem right style={{flex: 2, flexDirection: 'column', borderColor: 'grey', borderWidth: 2}}>
                        <Body>
                          <Text style={{textAlign: 'left', fontSize: 15}}>{`\u2022 Ran 3 miles`}</Text>
                          <Text style={{textAlign: 'left', fontSize: 15}}>{`\u2022 Swam for 3h and 25m`}</Text>
                          <Text style={{textAlign: 'left', fontSize: 15}}>{`\u2022 Swam for 3h and 25m`}</Text>
                          <Text style={{textAlign: 'left', fontSize: 15}}>{`\u2022 Swam for 3h and 25m`}</Text>
                          <Text style={{textAlign: 'left', fontSize: 15}}>{`\u2022 Swam for 3h and 25m`}</Text>
                          <Text style={{textAlign: 'left', fontSize: 15}}>{`\u2022 Swam for 3h and 25m`}</Text>
                          <Text style={{textAlign: 'left', fontSize: 15}}>{`\u2022 Swam for 3h and 25m`}</Text>
                        </Body>
                      </CardItem>
                    </ScrollView>
                  </Right>
                </CardItem>
              </Card>
              <Card style={{height: 100, marginLeft: 20, marginRight: 20}}>
                <CardItem>
                  <Left>
                    <Thumbnail source={{uri: 'https://img.huffingtonpost.com/asset/56f30663150000ad000b3082.jpeg?cache=c15cnysyem&ops=scalefit_960_noupscale'}} />
                    <Body>
                      <Text style={{fontWeight: 'bold', fontSize: 17}}>Symmone</Text>
                      <Text style={{fontSize: 15}} note>135</Text>
                    </Body>
                  </Left>
                  <Right>
                    <ScrollView>
                      <CardItem right style={{flex: 2, flexDirection: 'column', borderColor: 'grey', borderWidth: 2}}>
                        <Body>
                          <Text style={{textAlign: 'left', fontSize: 15}}>{`\u2022 Ran 3 miles`}</Text>
                          <Text style={{textAlign: 'left', fontSize: 15}}>{`\u2022 Swam for 3h and 25m`}</Text>
                          <Text style={{textAlign: 'left', fontSize: 15}}>{`\u2022 Swam for 3h and 25m`}</Text>
                          <Text style={{textAlign: 'left', fontSize: 15}}>{`\u2022 Swam for 3h and 25m`}</Text>
                          <Text style={{textAlign: 'left', fontSize: 15}}>{`\u2022 Swam for 3h and 25m`}</Text>
                          <Text style={{textAlign: 'left', fontSize: 15}}>{`\u2022 Swam for 3h and 25m`}</Text>
                          <Text style={{textAlign: 'left', fontSize: 15}}>{`\u2022 Swam for 3h and 25m`}</Text>
                        </Body>
                      </CardItem>
                    </ScrollView>
                  </Right>
                </CardItem>
              </Card>
            </View>
          }

        </View>
      </ScrollView>
    </View>

  </View>
</View>
</Container>
)
}
}
