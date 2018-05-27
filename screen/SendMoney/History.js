import React, { Component } from 'react';
import {  View,Text, StyleSheet,Image,ImageBackground,TouchableHighlight,TouchableOpacity,ScrollView  } from 'react-native';
import { Container,Actions,Button,DrawerHeader,List,ListItem,Left,Right,Body, Footer, FooterTab, Header, Content, Item, Input, Icon, Form, Label } from 'native-base';


import Buttonnextwhite from '../components/Buttonnextwhite';


export default class Bankdetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selected1: "key1"
        };
      }
 
  render() {  
    return (
      <View  style={styles.container}>
      <ScrollView>
            <List>
                   <ListItem>
                        <View style={{flexDirection:'row', padding:15}} >
                            <View style={{flex:3,}}>
                                 <Text style={{color:'#666',fontWeight:'700',fontSize:16,marginBottom:10,}}>
                                    SHOKUNBI DAVID AYODEJI
                                  </Text>
                                  <View style={{flexDirection:'row',}} >
                                      <Text style={{color:'#999',fontWeight:'400',fontSize:20}}>
                                        0224695397
                                      </Text>
                                      <Text style={{color:'#999',fontWeight:'400',marginLeft:10,fontSize:20,}}>
                                        FBN
                                      </Text>
                                </View>
                           </View>
                            <View style={{flex:1,}}>
                                  <Text style={{color:'red',fontWeight:'300',fontSize:20,marginBottom:10,}}>
                                  N10,000
                                </Text>
                                <Text style={{color:'#999',fontWeight:'200',marginLeft:10,fontSize:17,alignItems:'flex-end'}}>
                                  APR 12
                                </Text>
                            </View>
                            
                        </View>
                  </ListItem>

                  <ListItem>
                        <View style={{flexDirection:'row', padding:15}} >
                            <View style={{flex:3,}}>
                                 <Text style={{color:'#666',fontWeight:'700',fontSize:16,marginBottom:10,}}>
                                    SHOKUNBI DAVID AYODEJI
                                  </Text>
                                  <View style={{flexDirection:'row',}} >
                                      <Text style={{color:'#999',fontWeight:'400',fontSize:20}}>
                                        0224695397
                                      </Text>
                                      <Text style={{color:'#999',fontWeight:'400',marginLeft:10,fontSize:20,}}>
                                        FBN
                                      </Text>
                                </View>
                           </View>
                            <View style={{flex:1,}}>
                                  <Text style={{color:'red',fontWeight:'300',fontSize:20,marginBottom:10,}}>
                                  N10,000
                                </Text>
                                <Text style={{color:'#999',fontWeight:'200',marginLeft:10,fontSize:17,alignItems:'flex-end'}}>
                                  APR 12
                                </Text>
                            </View>
                            
                        </View>
                  </ListItem>
                  <ListItem>
                        <View style={{flexDirection:'row', padding:15}} >
                            <View style={{flex:3,}}>
                                 <Text style={{color:'#666',fontWeight:'700',fontSize:16,marginBottom:10,}}>
                                    SHOKUNBI DAVID AYODEJI
                                  </Text>
                                  <View style={{flexDirection:'row',}} >
                                      <Text style={{color:'#999',fontWeight:'400',fontSize:20}}>
                                        0224695397
                                      </Text>
                                      <Text style={{color:'#999',fontWeight:'400',marginLeft:10,fontSize:20,}}>
                                        FBN
                                      </Text>
                                </View>
                           </View>
                            <View style={{flex:1,}}>
                                  <Text style={{color:'red',fontWeight:'300',fontSize:20,marginBottom:10,}}>
                                  N10,000
                                </Text>
                                <Text style={{color:'#999',fontWeight:'200',marginLeft:10,fontSize:17,alignItems:'flex-end'}}>
                                  APR 12
                                </Text>
                            </View>
                            
                        </View>
                  </ListItem>
                  <ListItem>
                        <View style={{flexDirection:'row', padding:15}} >
                            <View style={{flex:3,}}>
                                 <Text style={{color:'#666',fontWeight:'700',fontSize:16,marginBottom:10,}}>
                                    SHOKUNBI DAVID AYODEJI
                                  </Text>
                                  <View style={{flexDirection:'row',}} >
                                      <Text style={{color:'#999',fontWeight:'400',fontSize:20}}>
                                        0224695397
                                      </Text>
                                      <Text style={{color:'#999',fontWeight:'400',marginLeft:10,fontSize:20,}}>
                                        FBN
                                      </Text>
                                </View>
                           </View>
                            <View style={{flex:1,}}>
                                  <Text style={{color:'red',fontWeight:'300',fontSize:20,marginBottom:10,}}>
                                  N10,000
                                </Text>
                                <Text style={{color:'#999',fontWeight:'200',marginLeft:10,fontSize:17,alignItems:'flex-end'}}>
                                  APR 12
                                </Text>
                            </View>
                            
                        </View>
                  </ListItem>
                   <ListItem>
                        <View style={{flexDirection:'row', padding:15}} >
                            <View style={{flex:3,}}>
                                 <Text style={{color:'#666',fontWeight:'700',fontSize:16,marginBottom:10,}}>
                                    SHOKUNBI DAVID AYODEJI
                                  </Text>
                                  <View style={{flexDirection:'row',}} >
                                      <Text style={{color:'#999',fontWeight:'400',fontSize:20}}>
                                        0224695397
                                      </Text>
                                      <Text style={{color:'#999',fontWeight:'400',marginLeft:10,fontSize:20,}}>
                                        FBN
                                      </Text>
                                </View>
                           </View>
                            <View style={{flex:1,}}>
                                  <Text style={{color:'red',fontWeight:'300',fontSize:20,marginBottom:10,}}>
                                  N10,000
                                </Text>
                                <Text style={{color:'#999',fontWeight:'200',marginLeft:10,fontSize:17,alignItems:'flex-end'}}>
                                  APR 12
                                </Text>
                            </View>
                            
                        </View>
                  </ListItem>
                  <ListItem>
                        <View style={{flexDirection:'row', padding:15}} >
                            <View style={{flex:3,}}>
                                 <Text style={{color:'#666',fontWeight:'700',fontSize:16,marginBottom:10,}}>
                                    SHOKUNBI DAVID AYODEJI
                                  </Text>
                                  <View style={{flexDirection:'row',}} >
                                      <Text style={{color:'#999',fontWeight:'400',fontSize:20}}>
                                        0224695397
                                      </Text>
                                      <Text style={{color:'#999',fontWeight:'400',marginLeft:10,fontSize:20,}}>
                                        FBN
                                      </Text>
                                </View>
                           </View>
                            <View style={{flex:1,}}>
                                  <Text style={{color:'red',fontWeight:'300',fontSize:20,marginBottom:10,}}>
                                  N10,000
                                </Text>
                                <Text style={{color:'#999',fontWeight:'200',marginLeft:10,fontSize:17,alignItems:'flex-end'}}>
                                  APR 12
                                </Text>
                            </View>
                            
                        </View>
                  </ListItem>
                   <ListItem>
                        <View style={{flexDirection:'row', padding:15}} >
                            <View style={{flex:3,}}>
                                 <Text style={{color:'#666',fontWeight:'700',fontSize:16,marginBottom:10,}}>
                                    SHOKUNBI DAVID AYODEJI
                                  </Text>
                                  <View style={{flexDirection:'row',}} >
                                      <Text style={{color:'#999',fontWeight:'400',fontSize:20}}>
                                        0224695397
                                      </Text>
                                      <Text style={{color:'#999',fontWeight:'400',marginLeft:10,fontSize:20,}}>
                                        FBN
                                      </Text>
                                </View>
                           </View>
                            <View style={{flex:1,}}>
                                  <Text style={{color:'red',fontWeight:'300',fontSize:20,marginBottom:10,}}>
                                  N10,000
                                </Text>
                                <Text style={{color:'#999',fontWeight:'200',marginLeft:10,fontSize:17,alignItems:'flex-end'}}>
                                  APR 12
                                </Text>
                            </View>
                            
                        </View>
                  </ListItem>
                   <ListItem>
                        <View style={{flexDirection:'row', padding:15}} >
                            <View style={{flex:3,}}>
                                 <Text style={{color:'#666',fontWeight:'700',fontSize:16,marginBottom:10,}}>
                                    SHOKUNBI DAVID AYODEJI
                                  </Text>
                                  <View style={{flexDirection:'row',}} >
                                      <Text style={{color:'#999',fontWeight:'400',fontSize:20}}>
                                        0224695397
                                      </Text>
                                      <Text style={{color:'#999',fontWeight:'400',marginLeft:10,fontSize:20,}}>
                                        FBN
                                      </Text>
                                </View>
                           </View>
                            <View style={{flex:1,}}>
                                  <Text style={{color:'red',fontWeight:'300',fontSize:20,marginBottom:10,}}>
                                  N10,000
                                </Text>
                                <Text style={{color:'#999',fontWeight:'200',marginLeft:10,fontSize:17,alignItems:'flex-end'}}>
                                  APR 12
                                </Text>
                            </View>
                            
                        </View>
                  </ListItem>
                  <ListItem>
                        <View style={{flexDirection:'row', padding:15}} >
                            <View style={{flex:3,}}>
                                 <Text style={{color:'#666',fontWeight:'700',fontSize:16,marginBottom:10,}}>
                                    SHOKUNBI DAVID AYODEJI
                                  </Text>
                                  <View style={{flexDirection:'row',}} >
                                      <Text style={{color:'#999',fontWeight:'400',fontSize:20}}>
                                        0224695397
                                      </Text>
                                      <Text style={{color:'#999',fontWeight:'400',marginLeft:10,fontSize:20,}}>
                                        FBN
                                      </Text>
                                </View>
                           </View>
                            <View style={{flex:1,}}>
                                  <Text style={{color:'red',fontWeight:'300',fontSize:20,marginBottom:10,}}>
                                  N10,000
                                </Text>
                                <Text style={{color:'#999',fontWeight:'200',marginLeft:10,fontSize:17,alignItems:'flex-end'}}>
                                  APR 12
                                </Text>
                            </View>
                            
                        </View>
                  </ListItem>

             </List>
</ScrollView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      width: null,
      height: null,
    },
    icon:{
      color:'white',
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
        marginBottom:35,
      },
      white:{
        color:'white',
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
  },
  whiteitems:{
    color:'white',
 
}

});




