import React, { Component } from 'react';
import {  View,Text, StyleSheet,Image,TouchableOpacity  } from 'react-native';
import { Container,Actions,Button,DrawerHeader,List,ListItem,Left,Body, Footer, FooterTab, Header, Content, Item, Input, Icon, Form, Label } from 'native-base';
import { NavigationActions } from 'react-navigation';
const routes = ["Dashboard", "Profile"];
export default class Menu extends Component {
     
    constructor(props) {
        super(props);
      }
      
    
  render() {  
    return (
        <Content style={{backgroundColor:'#FFFFFF',flexDirection:'column'}}>
       
       
       <View style={styles.drawerheader}>     
                     <View style={styles.hold}>
                                 <View style={styles.inner}>
                                        <TouchableOpacity style={styles.checkbox}
                                            onPress={() => this.props.navigation.navigate('Profile')}        >
                                            <Icon active name='md-check-circle' style={styles.white} />
                                        </TouchableOpacity>
                                  </View>
                                   <View style={styles.inner}>
                                        <TouchableOpacity style={styles.profilename}>
                                            <Text style={styles.leadtitle}>
                                                    Oluwatobi
                                              </Text>
                                              <Text style={styles.subtitle} >
                                                        VIEW PROFILE                                                    
                                                    </Text>
                                        </TouchableOpacity>
                                  </View>
                        </View>

       </View>
       <View style={styles.drawerbody}>     
         <List>
         <ListItem icon noBorder  >
                <Left>
                <Image style={styles.stackicon} source={require('../assets/dashboard.png')}/>
                </Left>
                <Body >
                  <Text onPress={() => this.props.navigation.dispatch(NavigationActions.reset({
                  index: 0,
                  key: null,
                  actions: [NavigationActions.navigate({ routeName: 'Issue' })]
              }))}
                style={styles.stacktext}>Dashboard</Text>
                </Body>
              </ListItem>

             <ListItem icon noBorder  >
                <Left>
                <Image style={styles.stackicon} source={require('../assets/bills.png')}/>
                </Left>
                <Body >
                  <Text style={styles.stacktext}>Bill Payment</Text>
                </Body>
              </ListItem>
              <ListItem icon noBorder  >
                <Left>
                <Image style={styles.stackicon} source={require('../assets/send-money.png')}/>
                </Left>
                <Body >
                  <Text style={styles.stacktext}>Money Transfer</Text>
                </Body>
              </ListItem>
              <ListItem icon noBorder  >
                <Left>
                <Image style={styles.stackicon} source={require('../assets/cards.png')}/>
                </Left>
                <Body >
                  <Text style={styles.stacktext}>My Cards</Text>
                </Body>
              </ListItem>
              <ListItem icon noBorder  >
                <Left>
                <Image style={styles.stackicon} source={require('../assets/bank.png')}/>
                </Left>
                <Body >
                  <Text style={styles.stacktext}>My Bank</Text>
                </Body>
              </ListItem>
              <ListItem icon noBorder  >
                <Left>
                <Image style={styles.stackicon} source={require('../assets/bank.png')}/>
                </Left>
                <Body >
                  <Text style={styles.stacktext}>Refer a Friend</Text>
                </Body>
              </ListItem>
              <ListItem icon noBorder  >
                <Left>
                <Image style={styles.stackicon} source={require('../assets/report.png')}/>
                </Left>
                <Body >
                  <Text style={styles.stacktext}>Report Issue</Text>
                </Body>
              </ListItem>
          
         </List>
</View>
          </Content>
    );
  }
}

const styles = StyleSheet.create({
    wrap:{
        backgroundColor:'white',
    },
    stackicon:{
        width:30,
        height:25,
     },
     stacktext:{
        color:'#c2cbd0',
        fontWeight:'600',
        fontSize:20,

    },
    drawerheader:{
         paddingTop:60,
         paddingBottom:60,
         borderBottomColor:'#c2cbd0',
         borderColor:'transparent',
         borderWidth:1,
    },
    drawerbody:{
     marginTop:30,
   },
   hold: {
    flexDirection: 'row',
    justifyContent:'center',
    alignContent:'center',
    
    },
  inner: {
    flex:1,
    
  },
  checkbox:{
    alignSelf:'center',
  },
  profilename:{
    alignSelf:'flex-start',
  },
  leadtitle:{
    color:'#f27700',
    fontSize:28,
    fontWeight:'700',
    marginBottom:5,
},
subtitle:{
    color:'#c2cbd0',
    fontSize:10,
    fontWeight:'700',
    
}


});




