/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Navigator from './Navigator';
import { Provider } from 'react-redux';
import store from './store/store'

export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Navigator />
        </Provider>
    );
  }
}

