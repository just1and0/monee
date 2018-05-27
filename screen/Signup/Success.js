import React, { Component } from 'react';
import {  View,Text, StyleSheet,Image,ImageBackground,TouchableHighlight,TouchableOpacity  } from 'react-native';
import { Container, Header, Content, Item, Input, Icon, Form, Label } from 'native-base';

import Buttonnext from '../components/Buttonnext';

export default class Success extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {  
    const { goBack } = this.props.navigation;
    return (
      <View
      style={styles.container}>
      
            <TouchableOpacity style={styles.navigate}>
       
             </TouchableOpacity>

            <View style={styles.contentid}> 
                     <Image style={styles.yippy} source={require('../assets/yippy.png')}/>

                    <Text style={styles.yippytext}>
                        Yippie!
                    </Text>
                    <Text style={styles.yippytextsub}>
                        Your Monee account has been successfully created. Let's go!
                    </Text>
                 
                 
                            <View style={styles.hold}>
                                  <View style={styles.inner}>
                                   </View>
                                  <View style={styles.inner1}>
                                        <TouchableOpacity style={styles.checkbox}
                                                    onPress={() => this.props.navigation.navigate('Personalinfo')}>
                                       <Buttonnext/>
                                        </TouchableOpacity>
                                  </View>
                                 
                            </View>
          </View>



    </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor:'white',
    },
    yippy:{
      width:undefined,
      height:300,
      },
      yippytext:{
        fontSize:40,
        color:'#666',
        fontWeight:'400',
        letterSpacing:1,
        marginTop:25,
        marginBottom:15,
        alignSelf:'center',
      },
      yippytextsub:{
        fontSize:15,
        color:'#666',
        fontWeight:'400',
        letterSpacing:1,
  
        alignSelf:'center',
      },
      navigate:{
        flex:1,
        marginTop:5,
        marginLeft:30,
     },
     contentid:{
      flex:7,
      marginLeft:50,
      marginRight:50,
       },
       title:{
        fontSize:35,
        color:'white',
        fontWeight:'900',
      },
      titlesub:{
        fontSize:12,
        color:'white',
        fontWeight:'200',
        letterSpacing:1,
        marginTop:25,
        marginBottom:15,
      },
      white:{
        color:'white',
      },
      whitespace:{
        color:'white',
        margin:7,
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
      borderTopColor: 'white',
      borderColor:'transparent',
      borderWidth: 1,
    },
    itemorange:{
      borderColor:'#d66c04',
  }
});




