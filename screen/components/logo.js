import React, { Component } from 'react';
import {  View,Text, StyleSheet,Image,TouchableOpacity  } from 'react-native';


export default class logo extends Component {
     
    constructor(props) {
        super(props);
      }
      
    
  render() {  
    return (
            <Image style={styles.btn} source={require('../assets/logo.png')}/>
    );
  }
}

const styles = StyleSheet.create({
    btn:{
      
  width:100,
  height:100,
  alignSelf:'center',
  
    }
});




