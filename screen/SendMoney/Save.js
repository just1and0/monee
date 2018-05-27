import React, { Component } from 'react';
import {  View,Text, StyleSheet,Image,ImageBackground,TouchableHighlight,TouchableOpacity  } from 'react-native';
import { Container, Header, Content, Item, Input, Icon, Form, Label, Picker, } from 'native-base';

import Buttoncorrect from './../components/Buttoncorrect';
import Footer from './../components/Footer';

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
    return (
      <View style={styles.container}>
      
            <View style={styles.contentid}> 
                    <Text  style={styles.title}>
                       BENEFICIARY
                    </Text>
                 
                      <View style={{flexDirection:'row',}}>
                                <Text  style={styles.titlesub}>
                                Select a saved beneficiary
                                </Text>

                                <Picker style={{alignSelf:'flex-end',justifyContent:'flex-end',alignItems:'flex-en' }} floatingLabel last 
                                iosHeader=""
                                mode="dropdown"
                                style={{  color: '#f27700',  borderBottomColor: 'white',
                                borderColor:'transparent',
                                borderWidth: 1,
                              }}
                                iosIcon={<Icon name="ios-arrow-down-outline" style={{color:'#f27700'}} />}
                                placeholder="Select your bank"
                                selectedValue={this.state.selected1}
                                onValueChange={this.onValueChange.bind(this)}
                                >
                                    <Picker.Item label="." value="key1" />
                                    <Picker.Item label="GT bank" value="key0" />
                                    <Picker.Item label="United Bank Of Africa (UBA)" value="key2" />
                                    </Picker>
                            

                         </View>
                    <Content>
                          <Form>
                                  <Item floatingLabel last style={styles.inputorange}>
                                        <Label style={styles.inputorange}>How much do you want to send?</Label>
                                        <Input />
                                 </Item>
                                  <View style={styles.hold}>
                                        <View style={styles.inner}>
                                            <Item floatingLabel last style={styles.inputorange}>
                                            <Label style={styles.inputgray}>Account No.</Label>
                                            <Input />
                                          </Item>

                                        </View>
                                        <View style={styles.inner}>
                                                <Text style={{color:'#999'}}>Bank </Text>
                                                <Item>
                                                <Picker floatingLabel last 
                                                iosHeader="Select your bank"
                                                mode="dropdown"
                                                style={{color: '#999',  borderBottomColor: '#999',
                                                borderColor:'transparent',
                                   
                                              }}
                                                iosIcon={<Icon name="ios-arrow-down-outline" style={{color:'#f27700'}} />}
                                                placeholder="Select your bank"
                                                selectedValue={this.state.selected1}
                                                onValueChange={this.onValueChange.bind(this)}
                                                >
                                                    <Picker.Item label="GT bank" value="key0" />
                                                    <Picker.Item label=" (UBA)" value="key1" />
                                                    <Picker.Item label="Diamond Bank" value="key2" />
                                                    <Picker.Item label="Unity Bank" value="key3" />
                                                    <Picker.Item label="Wema Bank" value="key4" />
                                                </Picker>
                                                </Item>
                                            
                                        </View>
                                      
                                  </View>
                                  <View style={{flexDirection:'row', marginTop:30,}}>
                                          <Text style={{color:'#999',}}>Select payment method </Text>
                                   </View>
                                  <View style={styles.hold1}>
                                          <View style={styles.inner1}>
                                              <Image style={styles.btn} source={require('../assets/mastercard-logo.png')}/>
  
                                          </View>
                                          <View style={styles.inner2}>
                     
                                          <Picker style={styles.checkbox} floatingLabel last 
                                                iosHeader="Select your bank"
                                                mode="dropdown"
                                                style={{color: '#999',
                                                borderColor:'transparent',
                                                
                                              }}
                                                iosIcon={<Icon name="ios-arrow-down-outline" style={{color:'#f27700'}} />}
                                                placeholder="Select your bank"
                                                selectedValue={this.state.selected1}
                                                onValueChange={this.onValueChange.bind(this)}
                                                >
                                                    <Picker.Item label="**** 4958" value="key0" />
                                                    <Picker.Item label=" **** 7878" value="key1" />
                                                    <Picker.Item label="**** 7651" value="key2" />
                                                </Picker>
                                            
                                          </View>
                                      
                                  </View>
                                  <View style={styles.hold1}>
                                  <View style={styles.inner}>
                                        <TouchableOpacity >
                                             <Text style={styles.white}>
                                                  
                                              </Text>
                                        </TouchableOpacity>
                                   </View>
                                  <View style={styles.inner1}>
                                        <TouchableOpacity style={styles.checkbox}
                                         onPress={() => this.props.navigation.navigate('Dashboard')}>
                                       <Buttoncorrect />
                                        </TouchableOpacity>
                                  </View>
                                 
                            </View>
                              </Form>



                  </Content>
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
      marginLeft:30,
      marginRight:30,
       },
       title:{
         marginTop:20,
        fontSize:15,
        color:'#999',
        fontWeight:'900',
      },
      titlesub:{
        fontSize:14,
        color:'#999',
        fontWeight:'200',
        letterSpacing:1,
        marginTop:10,
        marginBottom:35,
        marginRight:35,
      },
      inputorange:{
        color:'#d66c04',
    },
    inputgray:{
      color:'#999',
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
        padding:5,
      },
      inner2: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        flex:3,
     
      },
      hold1: {
        flexDirection: 'row',
    
        },
      
      inner1: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        flex:1,
    
      },
      btn:{
      width:50,
      height:40,
         },
         checkbox:{
          alignItems: 'flex-end',
        },

});




