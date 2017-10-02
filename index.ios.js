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

import city from './src/container/city'

import { StackNavigator } from 'react-navigation'

const RNqianxi = StackNavigator({

	index: { screen: Index },
	city: {screen: city}

})

AppRegistry.registerComponent('RNqianxi', () => RNqianxi);
