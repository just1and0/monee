import React, { Component } from 'react';
import { Text, StyleSheet,TouchableOpacity  } from 'react-native';

export default class Menu extends Component {
     
    constructor(props) {
        super(props);
      };
      
  render() {  
    return (
        <TouchableOpacity style={[styles.button,]}>
        <Text style={styles.whiteloan} > {this.props.title} </Text>
    </TouchableOpacity>

    );
  }
}

const styles = StyleSheet.create({
    button: {
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
        marginTop:40,
  
     },
     whiteloan:{
        color:'white',
        fontSize:18,
        fontWeight:'600'
      },

});




