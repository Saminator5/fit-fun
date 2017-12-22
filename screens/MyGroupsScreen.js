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

import styles from '../styles.js'

import { ExpoConfigView } from '@expo/samples';
import { Container, Header, Content, Button, Icon, Text, Item, Input, Form, Label, Thumbnail, Segment, Card, CardItem, Left, Body, Right,  } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';



export default class BrowseScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      activeGroups: [],
      invited: false,
      invitedGroups: [],
      loading: true,
      refreshing: false
    }
  }
  static navigationOptions = {
    header: null
  };

  getData = async () => {
    try {
      this.setState({
        refreshing: true
      })
      const activeGroups = await fetch('http://fit-fun.herokuapp.com/search/active', {
        method: 'GET'
      });

      const invitedGroups = await fetch('http://fit-fun.herokuapp.com/search/invited', {
        method: 'GET'
      });

      const activeGroupsRes = await activeGroups.json();
      const invitedGroupsRes = await invitedGroups.json();

      this.setState({
        activeGroups: activeGroupsRes.groups,
        invitedGroups: invitedGroupsRes.groups,
        loading: false,
        refreshing: false
      })
    } catch(e){
      console.log('error: ', e)
    }
  }

  componentWillMount = async () => {
    try {
      await this.getData();
    } catch (e){
      console.log('error', e)
    }
  }

  goToGroup = (id) => {
    console.log('going to: ', id)
    const { navigate } = this.props.navigation;
    navigate('GroupScreen', {id})
  }

  render() {
    const resizeMode = 'cover';
    const _this = this;
    console.log(this.state.groups)
    return (
      <Container style={{display: 'flex', flexDirection: 'row', backgroundColor: '#A3CDD3', paddingTop: 20}}>
        <Content style={{flex: 1}}
          refreshControl={
         <RefreshControl
           refreshing={this.state.refreshing}
           onRefresh={this.getData.bind(this)}
         />
       }
          >
          <View style={{marginLeft: 5, marginRight: 5, flexDirection: 'row', justifyContent: 'center'}}>
            <Button first onPress={() => this.setState({
              invited: false
            })}
            style={styles.segmentButton}
            >
              <Text>Active</Text>
            </Button>
            <Button onPress={() => this.setState({
              invited: true
            })}
            style={styles.segmentButton}
            >
              <Text>Invited</Text>
            </Button>
          </View>
          {!this.state.loading ? (this.state.invited ? this.state.invitedGroups : this.state.activeGroups).map((group , id) =>  {
            console.log('group:', group)
            return <Card key={id} style={{height: 170, marginLeft: 20, marginRight: 20}}>
              <CardItem>
                <Left>
                  <Thumbnail source={group.groupImg ? {uri: group.groupImg} : {uri: 'https://vignette.wikia.nocookie.net/scoobydoo/images/9/9d/Velma_Dinkley.png/revision/latest?cb=20160213120532'}} />
                  <Body style={{display: 'flex', flexDirection:'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <View style={{flexDirection: 'column'}}>
                      <Text style={{fontWeight: 'bold'}}>{group.name}</Text>
                      <Text note>{group.description}</Text>
                    </View>
                    <TouchableOpacity onPress={() => _this.goToGroup(group.id)}>
                      <Icon name='arrow-forward' />
                    </TouchableOpacity>
                  </Body>
                </Left>
              </CardItem>

              <View style={{display: 'flex', flexDirection: 'row', backgroundColor: 'green', flex: 1}}>
                <CardItem cardBody style={{flex: 2, flexDirection: 'column', borderColor: 'grey', borderWidth: 0.5}}>
                  <Body style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                    <Text style={{textAlign: 'center'}}>{`${group.users ? group.users.length : 32} members`}</Text>
                    <Text style={{textAlign: 'center', color: 'green'}}>{`Ongoing`}</Text>
                  </Body>
                </CardItem>
              </View>
            </Card>
          }) : <Text>Loading...</Text>}
          {this.state.invited && !this.state.invitedGroups.length && !this.state.loading ? <Text>No new invitations.</Text> :
          !this.state.invited && !this.state.activeGroups.length && !this.state.loading ? <Text>No active groups.</Text> : null}
        </Content>
      </Container>
    )
  }
}
