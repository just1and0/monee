import React, { Component } from 'react';
import {  View,Text, StyleSheet,Image,TouchableOpacity  } from 'react-native';


export default class Buttoncorrect extends Component {
     
    constructor(props) {
        super(props);
      }
      
    
  render() {  
    return (
            <Image style={styles.btn} source={require('../assets/button-check.png')}/>
    );
  }
}

const styles = StyleSheet.create({
    btn:{
      
  width:50,
  height:50,

    }
});




