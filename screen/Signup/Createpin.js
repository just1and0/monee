import React, { Component } from 'react';
import {  View,Text, StyleSheet,Image,ImageBackground,TouchableHighlight,TouchableOpacity  } from 'react-native';
import { Container, Header, Content, Item, Input, Icon, Form, Label } from 'native-base';

import PinView from "../PinView/PinView";

export default class App extends Component {
  state = {
    password: "123456",
    message: "Enter your password",
  };

  handleSuccess = password => {
    if (!this.state.password) {
      this.setState({ password, message: "Repeat your password" });
    } else {
      this.setState({ message: "Password saved!" }, () => {
        setTimeout(() => {
          console.log("Return to previous screen");
        }, 1000);
      })
    }
  };

  render() {
    const { message, password } = this.state;
    const { goBack } = this.props.navigation;  

    return (
      <View style={styles.container}>
      
            <TouchableOpacity style={styles.navigate}
             onPress={() => goBack()}>
                <Icon active name='md-arrow-back' style={styles.icon} />
            </TouchableOpacity>

            <View style={styles.contentid}> 
                    <Text  style={styles.title}>
                         Create Pin
                    </Text>
                    <Text  style={styles.titlesub}>
                      Create a 4-digit pin to perform transactions on Monee
                    </Text>

                    <PinView
                      hideFooter
                      password={password}
                      message={message}
                      messageError="Password doesn't match"
                      onSuccess={this.handleSuccess}
                    />
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




