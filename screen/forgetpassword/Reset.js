import React, { Component } from 'react';
import {  View,Text, StyleSheet,Image,ImageBackground,TouchableHighlight,TouchableOpacity  } from 'react-native';
import { Container,Button, Header, Content, Item, Input, Icon, Form, Label } from 'native-base';
import Gradbutton from '../components/Gradbutton';



export default class Reset extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    const { goBack } = this.props.navigation;  
    return (
      <View style={styles.container}>
      
            <TouchableOpacity style={styles.navigate}
            >
          </TouchableOpacity>

            <View style={styles.contentid}> 
                    <Text  style={styles.titlesub}>
                     Please enter a new password for your Monee account
                    </Text>

                    <Content>
                        <Form>
                        <Item floatingLabel last last style={styles.itemorange}>
                                  <Label style={styles.orange}>New Password</Label>
                                  <Input style={styles.inputorange} />
                            </Item>
                            <Item floatingLabel last style={styles.itemorange}>
                                  <Label style={styles.orange}>Type new password again </Label>
                                  <Input style={styles.inputorange} />
                            </Item>
                          
                            <Gradbutton title="Change Password" style={{marginTop:40,}}/>
                               
                             
                        </Form>
                  </Content>
          </View>
          <View style={styles.footer}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Signin')} > 
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
     
      titlesub:{
        fontSize:18,
        lineHeight:30,
        color:'#424d54',
        fontWeight:'500',
        letterSpacing:1,
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
        color:'white',
      },
      whitetext:{
        justifyContent: 'center',
        alignItems: 'center',
  

      },
      orange:{
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
      borderTopColor: '#424d54',
      borderColor:'transparent',
      borderWidth: 1,
    },
    itemorange:{
        borderColor:'#d66c04',
    },

});




