import React, { Component } from 'react';
import {  View,Text, StyleSheet,Image,ImageBackground,TouchableHighlight,TouchableOpacity  } from 'react-native';
import { Container, Header, Content, Item, Input, Icon, Form, Label } from 'native-base';

import Footerstack from '../components/Footer';
import Buttoncorrect from '../components/Buttoncorrect';


export default class Issue extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    const { goBack } = this.props.navigation;  
    return (
      <View style={styles.container}>
      
            <TouchableOpacity style={styles.navigate}
             onPress={() => goBack()}>
                <Icon active name='md-arrow-back' style={styles.icon} />
            </TouchableOpacity>

            <View style={styles.contentid}> 
                    <Text  style={styles.title}>
                         Hey! What's up?
                    </Text>
                    <Text  style={styles.titlesub}>
                       Got any issues? we're here for you. Send us a message now
                    </Text>
                   
                    <Text  style={styles.titlenag}>
                   Type your message here
                    </Text>

                    <Content>
                        <Form>
                            <Item floatingLabel last style={styles.inputorange}>
                                 
                                  <Input style={styles.inputorange} />
                            </Item>
                            <View style={styles.hold}>
                                  <View style={styles.inner}>
                                        <TouchableOpacity
                                    >
                                              <Text style={styles.gray}>
                                               
                                              </Text>
                                        </TouchableOpacity>
                                   </View>
                                  <View style={styles.inner1}>
                                        <TouchableOpacity style={styles.checkbox}
                                         onPress={() => this.props.navigation.navigate('Resetpassword')}>
                                         >
                                         <Buttoncorrect/>
                                        </TouchableOpacity>
                                  </View>
                                 
                            </View>
                        </Form>
                  </Content>
          </View>
        
          <Footerstack/>



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
        fontSize:15 ,
        color:'#424d54',
        fontWeight:'200',
        letterSpacing:1,
        lineHeight:20,
        marginTop:25,
        marginBottom:15,
      },
      titlenag:{
        fontSize:15 ,
        color:'#d66c04',
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




