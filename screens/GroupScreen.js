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
      activitiesArr = [...user.activities, ...activitiesArr]
      let userInfo = {id: user.id, role: user.membership.role, username: user.username}
      membersArr = [userInfo, ...membersArr];
    }

    this.setState({activitiesArr, membersArr})
    console.log('activitiesArr: ', this.state.activitiesArr);
    console.log('membersArr: ', this.state.membersArr);
  }

render() {

  return (
    <Container style={{display: 'flex', flexDirection: 'row', backgroundColor: '#A3CDD3'}} >
      <View style={{display: 'flex', flex: 1}}>
        <View style={{flex: 1/6, marginBottom: 10}}>
        <Card style={{minHeight: 100, marginRight: 2, marginLeft: 2}}>
          <CardItem>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <Image style={{width: 80, height: 80, borderRadius: 40}} source={this.group ? {uri: this.group.groupImg}: {uri: 'https://img.huffingtonpost.com/asset/56f30663150000ad000b3082.jpeg?cache=c15cnysyem&ops=scalefit_960_noupscale' }} />
              </View>
              <View style={{flex: 3, flexDirection: 'column'}}>
                <Text style={{fontWeight: 'bold'}}>{this.state.group.name}</Text>
                <Text style={{fontSize: 15, color: '#292929'}} note>{this.state.group.description}</Text>
              </View>
            </View>
          </CardItem>
        </Card>
      </View>
      <View style={{flex: 1, marginTop: 20}}>
        <View style={{flex: 1/2}}>
        <Segment style={{backgroundColor: 'transparent'}}>
          <Button
            onPress={() => this.setState({
              activities: true,
              members: false,
              winners: false
            })}
            style={{borderColor: '#D8DBE2', backgroundColor: '#8FAABA'}}
            first>
            <Text style={{color: '#394648'}}>Recent Activities</Text>
          </Button>
          <Button
            onPress={() => this.setState({
              activities: false,
              members: true,
              winners: false
            })}
            style={{borderColor: '#D8DBE2', backgroundColor: '#8FAABA'}}>
            <Text style={{color: '#394648'}}>Members</Text>
          </Button>
          <Button
            onPress={() => this.setState({
              activities: false,
              members: false,
              winners: true
            })}
            style={{borderColor: '#D8DBE2', backgroundColor: '#8FAABA'}} last>
            <Text style={{color: '#394648'}}>Winners</Text>
          </Button>
        </Segment>
      </View>
      <View style={{flex: 4}}>
        <ScrollView>
          <View style={{flex: 4, borderColor: 'black', borderWidth: 1/2}}>
          {this.state.activities &&
            <View style={{flexDirection: 'column', flex: 1}}>
              <Card>
                <CardItem>
                  <Left>
                    <Thumbnail source={{uri: 'https://i.imgur.com/RjXZTgw.jpg'}} />
                    <Body>
                      <Text style={{fontWeight: 'bold'}}>Samuel</Text>
                      <Text>Ran 3 miles</Text>
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
                      <Text style={{fontWeight: 'bold'}}>Samuel</Text>
                      <Text>Ran 3 miles</Text>
                      <Text note>12-06-17</Text>
                    </Body>
                  </Left>
                  <View style={{display: 'flex', width: 50, alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 20}}>35</Text>
                    <Text style={{fontWeight: 'bold', fontSize: 10}}> pts</Text>
                  </View>
                </CardItem>
              </Card>
            </View>
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
