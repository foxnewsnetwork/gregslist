import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#941423',
    height: 45,
  },
  menuIcon: {
    color: '#000',
    paddingHorizontal: 5
  },
  companyName: {
    fontFamily: 'FontAwesome',
    flex: 2,
    textAlign: 'center',
    paddingRight: 40
  }
})

export default class HeaderNavigation extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Icon name="bars" size={30} style={Styles.menuIcon} />
        <Text style={Styles.companyName}>Company Name</Text>
      </View>
    );
  }
}
