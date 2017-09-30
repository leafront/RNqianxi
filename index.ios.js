/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Index from './src/container/index'

import { StackNavigator } from 'react-navigation'

const RNqianxi = StackNavigator({

	index: { screen: Index }

})

AppRegistry.registerComponent('RNqianxi', () => RNqianxi);
