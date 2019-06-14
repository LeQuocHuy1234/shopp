/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList} from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ItemProduct';

class CartScreen extends Component {
  render() {
    return (
      <FlatList style = { styles.listContainer }
      data = { this.props.data }
      keyExtractor={(item, index) => index.toString()}
      renderItem = { ({item}) => (
        <ListItem 
          item={ item }
        />
      )}
    />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state
  }
}

export default connect(mapStateToProps)(CartScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

