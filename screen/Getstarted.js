import React, { Component } from 'react';
import {  View, StyleSheet,Image,ImageBackground,TouchableHighlight,TouchableOpacity  } from 'react-native';
import { Container, Header, Content, Item, Input, Form, Label,DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';

import Buttoncorrectwhite from './components/Buttoncorrectwhite';

const info = [
    {
      title: 'Get Quick Loans',
      content: ' lorem dydyugs dsyuigdug dyuvsd uig dyusdv duydsvsd dsyudsvvvds dsyu dy ',
    },

   
  ];
export default class Getstarted extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {  
    const { goBack } = this.props.navigation;
    return (
      <View style={styles.container}>
           <ImageBackground style={styles.top} source={require('./assets/referral.png')}>
            
           </ImageBackground>
            <View style={styles.bottom}>
                <View style={styles.bo}>
                    <DeckSwiper
                        dataSource={info}
                        renderItem={item =>
                                <View style={styles.hold} >
                                        <Text style={styles.title}>
                                                {item.title}
                                        </Text>
                                        <Text style={styles.subtitle}>
                                                {item.content}
                                        </Text>
                                </View>

                        }
                    />
                    </View>
                    <View style={styles.bo1}>
                            <TouchableOpacity style={[styles.button1,]}  onPress={() => this.props.navigation.navigate('Landingpage')}>
                            <Text style={styles.whiteloan} > GET STARTED  </Text>
                            </TouchableOpacity>
                    </View>
            </View>
        
        
     </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
   top:{
       flex:1
   },
   bottom:{
       flex:1,
       backgroundColor:'#f27700',
       justifyContent:'center',
    flexDirection:'column'
    
   }
   ,
   hold:{
       flex:1,
     
   },
   title:{
        fontSize:40,
        color:'white',
        alignSelf:'center',
        marginBottom:15,
        
   },
   subtitle:{
    fontSize:20,
    color:'white',
    alignSelf:'center',
    lineHeight:25,
    fontWeight:'200'
},
bo:{
    flex:2,
    justifyContent:'center',
    flexDirection:'column',
   
},
bo1:{
    flex:1,
},
button1: {
    borderWidth: 1,
    paddingTop: 20,
    paddingBottom: 20,
    padding:25,
    borderRadius:5,
    borderColor: '#d66c04',
    backgroundColor:'white',
    alignSelf:'center',
    shadowColor: '#d66c04',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    marginTop:15,

 },
 whiteloan:{
    color:'#f27700',
    fontSize:20,
    fontWeight:'900'
  },

 


});




