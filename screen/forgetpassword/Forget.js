import React, { Component } from 'react';
import {  View,Text, StyleSheet,Image,ImageBackground,TouchableHighlight,TouchableOpacity  } from 'react-native';
import { Container, Header, Content, Item, Input, Icon, Form, Label } from 'native-base';

import Buttoncorrect from '../components/Buttoncorrect';


export default class Forget extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    const { goBack } = this.props.navigation;  
    return (
      <View style={styles.container}>
      
            <TouchableOpacity style={styles.navigate}
             onPress={() => goBack()}>
                <Icon active name='md-arrow-back' style={styles.icon} />
            </TouchableOpacity>

            <View style={styles.contentid}> 
                    <Text  style={styles.title}>
                         Forget Password
                    </Text>
                    <Text  style={styles.titlesub}>
                       Enter the email associated with your account
                    </Text>

                    <Content>
                        <Form>
                            <Item floatingLabel last style={styles.inputorange}>
                                  <Label style={styles.white}>Email </Label>
                                  <Input style={styles.inputorange} />
                            </Item>
                            <View style={styles.hold}>
                                  <View style={styles.inner}>
                                        <TouchableOpacity
                                       onPress={() => this.props.navigation.navigate('Signin')}>
                                              <Text style={styles.gray}>
                                                  I remember
                                              </Text>
                                        </TouchableOpacity>
                                   </View>
                                  <View style={styles.inner1}>
                                        <TouchableOpacity style={styles.checkbox}
                                         onPress={() => this.props.navigation.navigate('Resetpassword')}>
                                         
                                         <Buttoncorrect/>
                                        </TouchableOpacity>
                                  </View>
                                 
                            </View>
                        </Form>
                  </Content>
          </View>
          <View style={styles.footer}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Signup')} > 
                        <Text  style={styles.titlesubgray}>
                           Dont have an account? Sign up
                        </Text>
                  </TouchableOpacity>
          </View>
          


    </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor:'#f5f5f5',
      width: null,
      height: null,
    },
    icon:{
      color:'#d66c04',
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
        fontSize:30,
        color:'#d66c04',
        fontWeight:'900',
      },
      titlesub:{
        fontSize:13,
        color:'#424d54',
        fontWeight:'200',
        letterSpacing:1,
        lineHeight:20,
        marginTop:25,
        marginBottom:15,
      },
      titlesubgray:{
        fontSize:12,
        color:'#424d54',
        fontWeight:'700',
        letterSpacing:1,
        marginTop:25,
        marginBottom:15,
      },
      white:{
        color:'#d66c04',
      },
      gray:{
        color:'#424d54',
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
      borderTopColor: '#666',
      borderColor:'transparent',
      borderWidth: 1,
    },
    inputorange:{
        borderColor:'#d66c04',
    }
});




