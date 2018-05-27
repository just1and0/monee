import React, { Component } from 'react';
import {  View,Text, StyleSheet,Image,TouchableOpacity  } from 'react-native';
import { FooterTab, Footer, Button} from 'native-base';

export default class Footerstack extends Component {
     
    constructor(props) {
        super(props);
      }
      
    
  render() {  
    return (
        <Footer style={styles.stacktab}>
        <FooterTab>
        <Button vertical>
                    <Image style={styles.stackicon} source={require('../assets/dashboard.png')}/>
                    <Text style={styles.stacktextactive}>Dashboard</Text>
                </Button>
                <Button vertical>
                    <Image style={styles.stackicon} source={require('../assets/loans-disabled.png')}/>
                    <Text style={styles.stacktext}>Loan</Text>
                </Button>
                <Button vertical>
                    <Image style={styles.stackicon} source={require('../assets/savings.png')}/>
                    <Text style={styles.stacktext}>My Savings</Text>
                </Button>
                <Button vertical>
                    <Image style={styles.stackicon} source={require('../assets/profile.png')}/>
                    <Text style={styles.stacktext}>Profile</Text>
                </Button>
        </FooterTab>
</Footer>
    );
  }
}

const styles = StyleSheet.create({
    
    stacktab:{
        backgroundColor: '#fff',
        shadowColor: '#c2cbd0',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 8,
      
    },  
    stackicon:{
        width:50,
        height:38,
        marginTop:20,
     },
     stacktext:{
        color:'#424d54',
       marginTop:0,
    },
    stacktextactive:{
        color:'#d66c04',
       marginTop:0,
    },
});




