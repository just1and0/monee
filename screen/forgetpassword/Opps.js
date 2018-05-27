import React, { Component } from 'react';
import {  View,Text, StyleSheet,Image,ImageBackground,TouchableHighlight,TouchableOpacity  } from 'react-native';
import { Container,Button, Header, Content, Item, Input, Icon, Form, Label } from 'native-base';



export default class Opps extends Component {
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
                    Opps! your Password reset link has expired. Enter your email again
                    </Text>

                    <Content>
                        <Form>
                        <Item floatingLabel last last style={styles.itemorange}>
                                  <Label style={styles.orange}>Email</Label>
                                  <Input style={styles.inputorange} />
                            </Item>
                           
                               
                                      <TouchableOpacity style={styles.button}>
                                          <Text style={styles.whiteloan} >Send Link</Text>
                                      </TouchableOpacity>
                            
                               
                             
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
    button: {
      marginTop:40,
      borderWidth: 1,
      paddingTop: 15,
      paddingBottom: 15,
      padding:15,
      borderRadius:5,
      borderColor: '#d66c04',
      backgroundColor:'#f27700',
      alignSelf:'flex-start',
      shadowColor: '#d66c04',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 8,

   },
   whiteloan:{
      color:'white',
      fontSize:18,
      fontWeight:'600'
    },
});




