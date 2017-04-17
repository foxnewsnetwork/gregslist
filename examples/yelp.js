import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import HeaderNavigation from './yelp/header-navigation';
import BodyContent from './yelp/body-content';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#666',
    marginTop: 20
  }
});

export default class Yelp extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <HeaderNavigation />
        <BodyContent />
      </View>
    );
  }
}
