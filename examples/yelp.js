import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#666',
    marginTop: 20
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#941423',
    height: 45,
  },
  body: {
    flex: 5,
    flexDirection: 'column',
    backgroundColor: '#def7f6',
  }
});

class HeaderNavigation extends Component {
  render() {
    return (
      <View style={styles.navigation}>
        <Text>Menu</Text>
        <Text>Company Name</Text>
      </View>
    );
  }
}

class BodyContent extends Component {
  render() {
    return (
      <View style={styles.body}>
        <Text>Images go here</Text>
      </View>
    );
  }
}

export default class Yelp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderNavigation />
        <BodyContent />
      </View>
    );
  }
}
