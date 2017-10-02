/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component , PropTypes } from 'react';

import {
	StyleSheet,
	View,
	Text,
	ScrollView,
	WebView
} from 'react-native';


import {getWidth} from "../widget/deviceInfo";

import Lizard from '../widget/lizard';

import Loading from '../component/widget/loading';

export default class Home extends Component {

	constructor(props) {

		super(props);

		this.state = {

		}
	}

	static navigationOptions = {
		header: null
	}

	render() {

		return (
			<WebView
				source={require('../webView/index.html')}
				style={styles.webView}
			/>

		)
	}
}

const styles = StyleSheet.create({
	webView:  {
		flex:1

	}
})
