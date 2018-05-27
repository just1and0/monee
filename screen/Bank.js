import React, { Component } from 'react';
import {  View,Text, StyleSheet,Image,ImageBackground,TouchableHighlight,ScrollView,TouchableOpacity  } from 'react-native';
import { Container, Header, Content, Item, Input, Icon, Form, Label,Picker } from 'native-base';
   
import Footer from './components/Footer';
import Buttoncorrect from './components/Buttoncorrect';



export default class Bank extends Component {
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
      <View style={styles.container}>
                     <View style={styles.header} >
                                <TouchableOpacity style={styles.navigate}
                                onPress={() => goBack()}>
                                    <Icon active name='md-arrow-back' style={styles.icon} />
                                </TouchableOpacity>
                                <Text style={styles.title} > 
                                  Bank Details
                                </Text>
                                <Text style={styles.subtitle} >
                                  We need your bank details for your 
                                </Text>
                                <Text style={styles.subtitle}>
                                savings and loan account
                                </Text>
                                
                        </View>
                        <View style={styles.body}>
                                   
                                                                
                                                    <Content>
                                                        <Form>
                                                            <Item style={styles.inputorange}>
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
                                                            <Item floatingLabel last style={styles.inputorange}>
                                                                <Label style={styles.white}>Account Number</Label>
                                                                <Input />
                                                            </Item>
                                                            <View style={styles.hold}>
                                                                <View style={styles.inner}>
                                                                        <TouchableOpacity>
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
      backgroundColor:'#f5f5f5',
    },
    icon:{
      color:'white',
      },
      navigate:{
      
        marginTop:40,
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
            borderColor:'#999',
            marginTop:30,

        },    
        white:{
            color:'#c2cbd0',
            fontWeight:'700'
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




