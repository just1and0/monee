import React, { Component } from 'react';
import {  View,Text, StyleSheet,Image,ImageBackground,TouchableHighlight,ScrollView,TouchableOpacity  } from 'react-native';
import { Container, Header, Content, Item, Input, Icon, Form, Label } from 'native-base';
   
import Footer from './components/Footer';
import Buttoncorrect from './components/Buttoncorrect';



export default class Withdraw extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    const { goBack } = this.props.navigation;  
    return (
      <View style={styles.container}>
                     <ImageBackground style={styles.header} source={require('./assets/pat-top-bg.png')}>
                                <TouchableOpacity style={styles.navigate}
                                onPress={() => goBack()}>
                                    <Icon active name='md-arrow-back' style={styles.icon} />
                                </TouchableOpacity>
                                <Text style={styles.title} > 
                                    Invite a friend
                                </Text>
                                <Text style={styles.subtitle} >
                                    Referral ID: 14dWUjKmma
                                </Text>
                                <Text style={styles.subtitle}>
                                    Total referrals: 0
                                </Text>
                                
                        </ImageBackground>
                        <View style={styles.body}>
                            <Text  style={styles.normal}> CURRENT BALANCE - <Text  style={styles.bold}>N100,000</Text></Text>
                            
                             
                                    <Item floatingLabel last style={styles.inputorange}>
                                            <Label style={styles.white}>Amount</Label>
                                            <Input  />
                                        </Item>
                                        <Item floatingLabel last style={styles.inputorange}>
                                            <Label style={styles.white}>Transaction Pin</Label>
                                            <Input  />
                                        </Item>
                                        <View style={styles.hold}>
                                  <View style={styles.inner}>
                                        <TouchableOpacity 
                                       >
                                              <Text style={styles.white}>
                                       
                                              </Text>
                                        </TouchableOpacity>
                                   </View>
                                  <View style={styles.inner1}>
                                        <TouchableOpacity style={styles.checkbox}
                                             onPress={() => this.props.navigation.navigate('Verifybvn')}>
                                             
                                             <Buttoncorrect/>
                                     
                                        </TouchableOpacity>
                                  </View>
                                 
                            </View>
                   
                         </View>      
                    
                <Footer/>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor:'#f5f5f5',
    },
    icon:{
      color:'white',
      },
      navigate:{
      
        marginTop:70,
        marginLeft:30,
     },
     header:{
         flex:3,
         backgroundColor:'#f27700',

        },
     body:{
        flex:3,
        paddingTop:20,
        marginLeft:35,
        marginRight:35,
        flexDirection:'column',
        alignItems:'center' 
    },
    normal:{
        alignSelf:"flex-start",
        color:'#c2cbd0',
    },
    bold:{
        color:'#424d54',
        fontWeight:'700'
    },
    title:{
        marginLeft:30,
        fontSize:40,
        color:'white',
        marginBottom:15,
        marginTop:15,
    },
    subtitle:{
        marginLeft:30,
        marginTop:5,
        color:'white',
    },
    yippy:{
        width:undefined,
        height:230,
        },
        textbottom:{
            alignSelf:'center',
            color:'#c2cbd0',
            fontWeight:'700',
            fontSize:20,
      
        },
        inputorange:{
            borderColor:'#d66c04',
            marginTop:30,

        },    
        white:{
            color:'#c2cbd0',
            fontWeight:'500'
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
    
});




