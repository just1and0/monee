import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import React from 'react';
import { MaterialIcons } from '@expo/vector-icons'; // Version can be specified in package.json

const { width } = Dimensions.get('window');
const MAX_LENGTH = 6;
const CLEAR = null;
const ERASE = '⇐';
const PRIMARY_COLOR = '#228B22';
const BUTTON_SIZE = width * 0.24;
const BUTTONS = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [CLEAR, 0, ERASE]];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  btn: {
    alignItems: 'center',
    borderRadius: BUTTON_SIZE / 2,
    margin: 10,
    justifyContent: 'center',
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
  },
  btnText: {
    color: PRIMARY_COLOR,
    fontFamily: 'Droid Sans Mono',
    fontSize: 40,
    textAlign: 'center',
  },
  error: {
    color: 'red',
  },
  flex: {
    flex: 1,
  },
  footer: { 
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  label: {
    color: '#ccc',
    fontSize: 16,
  },
  logo: {
    color: PRIMARY_COLOR,
    fontSize: 90,
  },
  pin: {
    color: PRIMARY_COLOR,
    fontFamily: 'Droid Sans Mono',
    fontSize: 18,
    fontWeight: '500',
    margin: 5,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
});

function makeDots(num) {
  let ret = '';

  while (num > 0) {
    ret += ' ○ ';
    num--;
  }

  return ret;
}

class PinKeyboard extends React.Component {
  static defaultProps = {
    message: "Enter pin:",
    messageError: "Wrong PIN!",
    onExit: f => f,
    onLogout: f => f,
    onSuccess: f => f,
  };
  
  state = this.initialState;

  get initialState() {
    return {
      showError: false,
      value: "",
    };
  }

  componentWillReceiveProps({ message, messageError }) {
    const state = {};
    
    if (this.props.message !== message) {
      state.message = message;
    }
    
    if (this.props.messageError !== messageError) {
      state.messageError = messageError;
    }
    
    this.setState(state);
  }

  handlePress(char) {
    const { password, onSuccess } = this.props;
    const { value: val } = this.state;
    const value = char === ERASE ? val.slice(0, -1) : char === CLEAR ? "" : val + char;
    const completed = value.length === MAX_LENGTH;
    
    if (completed && (value === password || !password)) {
      this.setState({ value }, () => setTimeout(() => {
        this.setState({ value: "" }, () => onSuccess(value));
      }));
    } else if (value.length <= MAX_LENGTH) {
      this.setState({ value, showError: completed }, () => {
        if (completed) {
          setTimeout(() => this.setState(this.initialState), 1000);
        }
      });
    }
  }

  renderButton = val => {
    if (val === null) {
      return <View style={styles.btn} />;
    }
    
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.btn}
        onPress={() => this.handlePress(val)}
      >
        <Text style={styles.btnText}>{val}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    const { hideFooter, message, messageError, style, onExit, onLogout } = this.props;
    const { showError, value } = this.state;
    const marks = value.replace(/./g, ' ● ');
    const dots = makeDots(MAX_LENGTH - value.length);

    return (
      <View style={[styles.container, style]}>
        <View style={[styles.center, styles.row]}>
          <MaterialIcons name="monetization-on" style={styles.logo} />
        </View>
        <View style={[styles.center, { paddingVertical: 10 }]}>
          <Text style={[styles.label, showError && styles.error]}>
            {showError ? messageError : message}
          </Text>
          <Text style={styles.pin}>{marks}{dots}</Text>
        </View>
        {BUTTONS.map(arr => (
          <View style={[styles.center, styles.row, styles.flex]}>
            {arr.map(this.renderButton)}
          </View>
        ))}
        {!hideFooter && (
          <View style={[styles.center, styles.row, { alignItems: 'flex-end' }]}>
            <TouchableOpacity activeOpacity={0.6}  style={styles.footer} onPress={onLogout}>
              <Text style={styles.label}>Logout</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6}  style={[styles.footer, {marginLeft: 'auto'}]} onPress={onExit}>
              <Text style={styles.label}>Logout and Exit</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

export default PinKeyboard;
