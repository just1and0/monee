import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import PinBoxList from './PinBoxList';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    backgroundColor: 'red',
    position: 'absolute',
    right: -99,
    // right: 0,
    top: Constants.statusBarHeight,
  },
  pinView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'rgb(239, 239, 244)',
    paddingTop: Constants.statusBarHeight + 100,
  },
  pinPromptText: {
    marginBottom: 10,
  }
});

class PinView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      maxPinLength: 6,
      pinValue: ''
    };
  }

  onPinEntry = (pinValue) => {
    if (pinValue.length && isNaN(pinValue)) return;
    
    this.setState({pinValue}, this.onPinEntered);
  };
  
  onPinEntered = () => {
    if (this.state.pinValue.length <= this.state.maxPinLength) return;
    
    // do something with the pin
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.pinView}>
          <PinBoxList 
            pinLength={this.state.maxPinLength} 
            pinValueLength={this.state.pinValue && this.state.pinValue.length} 
          />
          <Text style={styles.pinPromptText}>
            {this.state.pinValue}
          </Text>
        </View>
        <TextInput
          autoFocus={true} 
          blurOnSubmit={false} 
          defaultValue={this.state.pinValue}
          enablesReturnKeyAutomatically={false}
          keyboardType='numeric' 
          maxLength={this.state.maxPinLength}
          onChangeText={this.onPinEntry}
          style={styles.input}
        />
      </View>
    );
  }
}

export default PinView;