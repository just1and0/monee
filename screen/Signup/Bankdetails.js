import React, { Component } from 'react';
import {  View,Text, StyleSheet,Image,ImageBackground,TouchableHighlight,TouchableOpacity  } from 'react-native';
import { Container, Header, Content, Item, Input, Icon, Form, Label, Picker, } from 'native-base';

import Buttonnextwhite from '../components/Buttonnextwhite';


export default class Bankdetails extends Component {
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
    const { goBack } = this.props.navigation;
    return (
      <ImageBackground source={require('../assets/sigin-bg.jpg')}
      style={styles.container}>
      
            <TouchableOpacity style={styles.navigate}
             onPress={() => goBack()}>
                <Icon active name='md-arrow-back' style={styles.icon} />
            </TouchableOpacity>

            <View style={styles.contentid}> 
                    <Text  style={styles.title}>
                         Bank Details
                    </Text>
                    <Text  style={styles.titlesub}>
                    We need your bank details for your savings and loan accounts
                    </Text>

                    <Content>
                        <Form>
                            <Picker floatingLabel last 
                            iosHeader="Select your bank"
                            mode="dropdown"
                            style={{ flex: 1, color: 'white',  borderBottomColor: 'white',
                            borderColor:'transparent',
                            borderWidth: 1,
                           }}
                            iosIcon={<Icon name="ios-arrow-down-outline" style={{color:'white'}} />}
                            placeholder="Select your bank"
                            selectedValue={this.state.selected1}
                            onValueChange={this.onValueChange.bind(this)}
                            >
                                <Picker.Item label="GT bank" value="key0" />
                                <Picker.Item label="United Bank Of Africa (UBA)" value="key1" />
                                <Picker.Item label="Diamond Bank" value="key2" />
                                <Picker.Item label="Unity Bank" value="key3" />
                                <Picker.Item label="Wema Bank" value="key4" />
                            </Picker>
                        

                            <Item floatingLabel last style={styles.inputorange}>
                                <Label style={styles.white}>Account Number</Label>
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
                                             
                                             <Buttonnextwhite/>
                                     
                                        </TouchableOpacity>
                                  </View>
                                 
                            </View>
                        </Form>
                  </Content>
          </View>
          


    </ImageBackground>
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




