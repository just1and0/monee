import React, { Component } from 'react';
import { Container,Button, Icon,Title, Header, Content, Tab, Tabs,Item,Label,Input } from 'native-base';
import { StyleSheet, TouchableOpacity,Text, View} from 'react-native';

import Tab2 from './Send';
import Tab1 from './Save';
import Tab3 from './History';
import Buttoncorrect from '../components/Buttoncorrect';


export default class Homesend extends Component {
    
  render() {  
    return (
      <View style={styles.container}>
                     <View style={styles.header}>
                                <TouchableOpacity style={styles.navigate}
                                onPress={() => goBack()}>
                                    <Icon active name='md-arrow-back' style={styles.icon} />
                                </TouchableOpacity>
                                <Text style={styles.title} > 
                                    Send Money
                                </Text>
                                
                        </View>
                        <View style={styles.body}>
                              <Tabs  initialPage={2} >
                              <Tab heading="Save">
                                <Tab1 />
                              </Tab>
                              <Tab heading="Send">
                                <Tab2 />
                              </Tab>
                              <Tab heading="History">
                                <Tab3 />
                              </Tab>
                            </Tabs>
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
    
      marginTop:50,
      marginLeft:30,
   },
   header:{
       flex:1,
       backgroundColor:'#f27700',

      },
   body:{
      flex:3,
  },
  title:{
      marginLeft:30,
      fontSize:40,
      color:'white',
      marginBottom:15,
      marginTop:15,
  },
      white:{
          color:'#c2cbd0',
          fontWeight:'500'
      },
 
});




