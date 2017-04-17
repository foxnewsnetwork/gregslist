import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View
} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 5,
    flexDirection: 'column',
    backgroundColor: '#def7f6',
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  },
  banner: {
    width: 414,
    height: 150
  }
})
export default class BodyContent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.banner} source={require('./body-content/banner-placeholder.png')} />
      </View>
    );
  }
}
