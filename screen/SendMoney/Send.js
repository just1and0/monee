import React, { Component } from 'react';
import {  View,Text, StyleSheet,Image,ImageBackground,TouchableHighlight,TouchableOpacity, ScrollView } from 'react-native';
import { Container, Header, Content, Item, Input, Icon, Form, Label, Picker, } from 'native-base';

import Buttoncorrect from './../components/Buttoncorrect';
import Footer from './../components/Footer';

export default class Send extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selected1: "key1"
        };
      }
      onValueChange(value: string) {
        this.setState({
          selected1: value
        });
      } 

  render() {  
    return (
      <View style={styles.container}>
      
            <View style={styles.contentid}> 
                    <Text  style={styles.title}>
                       These are your beneficiaries
                    </Text>
                    <ScrollView>
                        <View style={styles.holder}>
                              <View style={styles.holderimg}>
                                  <Image style={styles.btn} source={require('../assets/mastercard-logo.png')}/>
                              </View>
                              <View style={styles.holdercontent}>
                                  <Text style={{color:'#666',fontWeight:'700',marginBottom:10,}}>
                                    SHOKUNBI DAVID AYODEJI
                                  </Text>
                                  <Text style={{color:'#999',fontWeight:'700',}}>
                                    0224695397
                                  </Text>
                              </View>
                              <View style={styles.holdercan}>
                                  <TouchableOpacity style={styles.iconhold}>
                                    <Icon active name='md-close' style={styles.icon} />
                                </TouchableOpacity>
                                <Text style={{color:'#999',fontWeight:'700',}}>
                                        FBN
                                  </Text>
                              </View>
                        </View>
               
                        <View style={styles.holder}>
                              <View style={styles.holderimg}>
                                  <Image style={styles.btn} source={require('../assets/mastercard-logo.png')}/>
                              </View>
                              <View style={styles.holdercontent}>
                                  <Text style={{color:'#666',fontWeight:'700',marginBottom:10,}}>
                                    SHOKUNBI DAVID AYODEJI
                                  </Text>
                                  <Text style={{color:'#999',fontWeight:'700',}}>
                                    0224695397
                                  </Text>
                              </View>
                              <View style={styles.holdercan}>
                                  <TouchableOpacity style={styles.iconhold}>
                                    <Icon active name='md-close' style={styles.icon} />
                                </TouchableOpacity>
                                <Text style={{color:'#999',fontWeight:'700',}}>
                                        FBN
                                  </Text>
                              </View>
                        </View>
                </ScrollView>

             </View>
          <Footer/>

    </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor:'white',
    },
     contentid:{
      flex:7,
      marginLeft:20,
      marginRight:20,
       },
       title:{
        marginTop:20,
        marginBottom:30,
        fontSize:15,
        color:'#999',
        fontWeight:'900',
      },
   holder:{
      margin:5,
      backgroundColor: '#fff',
      shadowColor: '#c2cbd0',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 8,
      flexDirection:'row',
      padding:15,
      paddingLeft:5,
      paddingRight:5,
    borderRadius:5,
    marginBottom:30,
  
   },
   holderimg:{
    flex:2,
    padding:5,
 },
 holdercontent:{
  flex:4,
  paddingLeft:25,
  paddingRight:5,
  justifyContent:'center'

},
holdercan:{
  flex:1,
  justifyContent:'center'
},
icon:{
  color:'red',
  },
  iconhold:{
    marginBottom:10,
  }
  });




