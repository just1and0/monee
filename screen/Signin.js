import React, { Component } from 'react';
import {  View,Text, StyleSheet,Image,ImageBackground,TouchableHighlight,TouchableOpacity  } from 'react-native';
import { Container, Header, Content, Item, Input, Icon, Form, Label } from 'native-base';

import Buttoncorrectwhite from './components/Buttoncorrectwhite';


export default class Signin extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {  
    const { goBack } = this.props.navigation;
    return (
      <ImageBackground source={require('./assets/sigin-bg.jpg')}
      style={styles.container}>
      
            <TouchableOpacity style={styles.navigate}
             onPress={() => goBack()}>
                <Icon active name='md-arrow-back' style={styles.icon} />
            </TouchableOpacity>

            <View style={styles.contentid}> 
                    <Text  style={styles.title}>
                         Sign In
                    </Text>
                    <Text  style={styles.titlesub}>
                         Be bold and get a loan today
                    </Text>

                    <Content>
                        <Form>
                            <Item floatingLabel last style={styles.inputorange}>
                                  <Label style={styles.white}>Email or Phone</Label>
                                  <Input />
                            </Item>
                            <Item floatingLabel last style={styles.inputorange}>
                                <Label style={styles.white}>Password</Label>
                                <Input    secureTextEntry={true} />
                            </Item>
                            <View style={styles.hold}>
                                  <View style={styles.inner}>
                                        <TouchableOpacity 
                                         onPress={() => this.props.navigation.navigate('Forgetpassword')}>
                                              <Text style={styles.white}>
                                                  Forgot Password?
                                              </Text>
                                        </TouchableOpacity>
                                   </View>
                                  <View style={styles.inner1}>
                                        <TouchableOpacity style={styles.checkbox}
                                         onPress={() => this.props.navigation.navigate('Dashboard')}>
                                       <Buttoncorrectwhite />
                                        </TouchableOpacity>
                                  </View>
                                 
                            </View>
                        </Form>
                  </Content>
          </View>
          <View style={styles.footer}>
                  <TouchableOpacity 
                  onPress={() => this.props.navigation.navigate('Signup')} > 
                        <Text  style={styles.titlesub}>
                            New user? create account
                        </Text>
                  </TouchableOpacity>
          </View>
          


    </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      width: null,
      height: null,
    },
    icon:{
      color:'white',
      },
      navigate:{
        flex:1,
        marginTop:80,
        marginLeft:30,
     },
     contentid:{
      flex:7,
      marginLeft:50,
      marginRight:50,
       },
       title:{
        fontSize:35,
        color:'white',
        fontWeight:'900',
      },
      titlesub:{
        fontSize:12,
        color:'white',
        fontWeight:'200',
        letterSpacing:1,
        marginTop:25,
        marginBottom:15,
      },
      white:{
        color:'white',
      },
      hold: {
        flexDirection: 'row',
        marginTop:35,
        },
      inner: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        flex:1,
      },
        inner1: {
        flex:1,
        width: 50,
        height: 50,
      },
      checkbox:{
        alignItems: 'flex-end',
      },
    footer:{
      flex:1,
      marginLeft:50,
      marginRight:50,
      borderTopColor: 'white',
      borderColor:'transparent',
      borderWidth: 1,
    },
    itemorange:{
      borderColor:'#d66c04',
  }
});




