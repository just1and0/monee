import React, { Component } from 'react';
import { Text, StyleSheet,TouchableOpacity  } from 'react-native';

export default class Menu extends Component {
     
    constructor(props) {
        super(props);
      };
      
  render() {  
    return (
        <TouchableOpacity style={[styles.button,]}  onPress={() => this.props.navigation.navigate(this.props.navi)}>
        <Text style={styles.whiteloan} > {this.props.title} </Text>
        </TouchableOpacity>

    );
  }
}

const styles = StyleSheet.create({
    button: {
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




