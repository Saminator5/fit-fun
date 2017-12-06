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
import { Container, Header, Content, Button, Icon, Text, Item, Input, Form, Label, Thumbnail } from 'native-base';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Signup',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
    * content, we just wanted to give you a quick view of your config */
    const resizeMode = 'cover';

    return (
      <Container style={{display: 'flex', flex: 1, alignItems: 'center', flexDirection: 'row'}}>
        <View
          style={{
            flex: 1,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
          >
            <Image
            style={{
              flex: 1,
              resizeMode,
              justifyContent: 'center',
            }}
            source={{uri: 'https://cdn-media-1.lifehack.org/wp-content/files/2015/09/22141228/runners-888021.jpg'}}
          />
          </View>
        <Content style={{flex: 1}}>

          <View
            style={{
              flex: 1,
              width: '100%',
              height: '100%',
            }}
            >

                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                  }}
                  >
                    <Form>
                      <Item stackedLabel last style={{backgroundColor: 'white',
                      opacity: 0.75}}>
                        <Label style={{color: 'black', fontWeight: 'bold'}}>Email</Label>
                        <Input />
                      </Item>

                      <Item stackedLabel last style={{backgroundColor: 'white',
                      opacity: 0.75}}>
                        <Label style={{color: 'black', fontWeight: 'bold'}}>Username</Label>
                        <Input />
                      </Item>

                      <Item stackedLabel last style={{backgroundColor: 'white',
                      opacity: 0.75}}>
                        <Label style={{color: 'black', fontWeight: 'bold'}}>Password</Label>
                        <Input />
                      </Item>

                      <Item stackedLabel last style={{backgroundColor: 'white',
                      opacity: 0.75}}>
                        <Label style={{color: 'black', fontWeight: 'bold'}}>Repeat Password</Label>
                        <Input secureTextEntry={true}/>
                      </Item>

                      <View style={{paddingTop: 15}}>
                        <Button block success>
                          <Text>Log In</Text>
                        </Button>
                      </View>
                    </Form>
                  </View>
                </View>
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
          paddingTop: 10
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
