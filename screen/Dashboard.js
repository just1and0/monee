import React, { Component } from 'react';
import {  View,Text, StyleSheet,Image,ImageBackground,TouchableHighlight,TouchableOpacity  } from 'react-native';
import { Drawer, Container,Button, Footer, FooterTab, Header, Content, Item, Input, Icon, Form, Label } from 'native-base';

import SideBar from './components/Menu';
import Footerstack from './components/Footer';

export default class Dashboard extends Component {
    closeDrawer() {
        this._drawer._root.close()
      }
      openDrawer() {
        this._drawer._root.open()
      }

      
  constructor(props) {
    super(props);       
  }
  


  render() {  
    const { goBack } = this.props.navigation;
    return (
        <Drawer
        ref={(ref) => { this._drawer = ref; }}
        content={<SideBar navigator={this._navigator} />}
        onClose={() => this.closeDrawer()} >
      
      <View
      style={styles.container}>
      
            <TouchableOpacity style={styles.navigate}
            onPress={()=> this.openDrawer()} >
                   <Image style={styles.stackicon} source={require('./assets/menu.png')}/>
             </TouchableOpacity>

            <View style={styles.contentid}> 
                     <Image style={styles.yippy} source={require('./assets/message-empty.png')}/>

                    <Text style={styles.yippytextsub}>
                        You currently have no loan 
                        
                    </Text>
                    <Text style={styles.yippytextsub}>with us. Get a loan now</Text>
           
                    <Button style={styles.button}>
                        <Text style={styles.whiteloan} >Get a loan</Text>
                    </Button>

                
                    <View style={styles.hold}>
                            <Text style={styles.orange}> RESENT TRANSACTION </Text>
                    </View>
                    <View style={styles.recenttransaction}>
                            <Text style={styles.ash}>Your transactions will </Text>
                            <Text style={styles.ash}> appear here </Text>
                    </View>

          </View>
         
        <Footerstack />
    </View>
    </Drawer>
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
        height:30,
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
  container:{
      flex: 1,
      backgroundColor:'white',
    },
    yippy:{
      width:undefined,
      height:200,
      },
      yippytext:{
        fontSize:20,
        color:'#666',
        fontWeight:'400',
        letterSpacing:1,
        marginTop:1,
        marginBottom:15,
        alignSelf:'center',
        letterSpacing:1,
       
  
      },
      yippytextsub:{
        fontSize:15,
        color:'#666',
        fontWeight:'400',
        letterSpacing:1,
        alignSelf:'center',
      },
      navigate:{
        marginTop:50,
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
     orange:{
        color:'#d66c04',
    },
    button: {
        marginTop:20,
        borderWidth: 1,
        padding: 5,
        borderColor: '#d66c04',
        backgroundColor:'#f27700',
        alignSelf:'center',
        shadowColor: '#d66c04',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 8,
     },
     whiteloan:{
        color:'white',
        fontSize:20,
        paddingLeft:10,
        paddingRight:10,
        fontWeight:'600'
      },
      recenttransaction:{
        marginTop:35,
      },
      ash:{
          alignSelf:'center',
          color:'#c2cbd0',
          fontSize:25,
      },

});




