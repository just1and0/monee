import React, { Component } from 'react';
import {  View,Text, StyleSheet,Image,ImageBackground,TouchableHighlight,TouchableOpacity  } from 'react-native';
import { Container, Header, Content, Item, Input, Icon, Form, Label } from 'native-base';

import Logo from './components/logo';
import Gradbuttoncenter from './components/Gradbuttoncenter';


export default class Landingpage extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {  
    const { goBack } = this.props.navigation;
    return (
      <ImageBackground source={require('./assets/sigin-bg.jpg')}
      style={styles.container}>
      
           <View style={styles.body}>
                    <Logo />
                    <Text style={styles.title}>Monee</Text>
                    <Text style={styles.subtitle1}>Get quick loans and achieve your</Text>
                    <Text style={styles.subtitle}>financial goal with Monee</Text>
                   
             
                    <TouchableOpacity style={[styles.button1,]}  onPress={() => this.props.navigation.navigate('Signup')}>
                    <Text style={styles.whiteloan} > CREATE ACCOUNT  </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button,]} 
                      onPress={() => this.props.navigation.navigate('Signin')}>
                        <Text style={styles.whitesignin} > SIGN IN</Text>
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
      navigate:{
        flex:1,
        marginTop:80,
        marginLeft:30,
     },
     body:{
        flexDirection:'column',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
     },
     logo:{
        width:undefined,
        height:300,
     },
     title:{
        alignSelf:'center',
        color:'white',
        fontWeight:'600',
        fontSize:50,
        marginBottom:60,
     },
     subtitle1:{
        alignSelf:'center',
        color:'white',
        fontWeight:'600',
        fontSize:20,
        marginBottom:5,

     },
     subtitle:{
        alignSelf:'center',
        color:'white',
        fontWeight:'600',
        fontSize:20,
        marginBottom:55,

     },
     whitesignin:{
        color:'white',
        fontWeight:'600',
        alignSelf:'center',
        fontSize:23,
        marginTop:35,
        
     },
     button1: {
        borderWidth: 1,
        paddingTop: 25,
        paddingBottom: 25,
        padding:30,
        borderRadius:5,
        borderColor: '#d66c04',
        backgroundColor:'white',
        alignSelf:'center',
        shadowColor: '#d66c04',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 8,
      
  
     },
     whiteloan:{
        color:'#f27700',
        fontSize:20,
        fontWeight:'900'
      },

     
  
});




