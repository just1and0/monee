import React, { Component } from 'react';
import {  View,Text, StyleSheet,Image,ImageBackground,TouchableHighlight,ScrollView,TouchableOpacity  } from 'react-native';
import { Container, Header, Content, Item, Input, Icon, Form, Label } from 'native-base';
   

export default class Referral extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    const { goBack } = this.props.navigation;  
    return (
      <View style={styles.container}>
                     <ImageBackground style={styles.header} source={require('../assets/card-top-bg.png')}>
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
                            <ScrollView>
                                <Image style={styles.yippy} source={require('../assets/referral.png')}/>
                                <Text style={styles.textbottom}>
                                    Share Monee app with friends and 
                                    </Text>
                                    <Text style={styles.textbottom}>
                                    family. Help them save to meet their 
                                    </Text>
                                    <Text style={styles.textbottom}>
                                     financial goals
                                    </Text>
                                    <TouchableOpacity style={[styles.button,]}>
                                    <Text style={styles.whiteloan} > SHARE NOW </Text>
                                    </TouchableOpacity>
                            </ScrollView>
                        </View>      
                    
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
         flex:2,
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
            marginTop:15,
            alignSelf:'center',
      
         },
         whiteloan:{
            color:'white',
            fontSize:18,
            fontWeight:'600'
          },
    
    
});




