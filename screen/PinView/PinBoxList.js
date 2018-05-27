import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import PinBox from './PinBox';

const styles = StyleSheet.create({
  pinBoxList: {
    flex: -1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});

class PinBoxList extends Component {
  static propTypes = {
    pinValueLength: PropTypes.number,
    pinLength: PropTypes.number,
  };

  render() {
    return (
      <View
        style={styles.pinBoxList}>
        {this.renderPills()}
      </View>
    );
  }

  renderPills() {
    let pills = [];

    for (var i = 0; i < this.props.pinLength; i++) {
      pills.push(this.renderPill(i + 1));
    }

    return pills;
  }

  renderPill(index) {
    return (
      <PinBox
        key={index}
        hasValue={this.props.pinValueLength && this.props.pinValueLength >= index}
      />
    );
  }
}

export default PinBoxList;