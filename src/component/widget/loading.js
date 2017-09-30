/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';

import {
	StyleSheet,
	View,
	Text,
	Dimensions,
	ActivityIndicator,
} from 'react-native';

import { winWidth, winHeight } from '../../widget/deviceInfo';

export default class Loading extends React.Component {
	render() {
		return (
			<View style={styles.loading}>
				<ActivityIndicator color="white"/>
				<Text style={styles.loadingTitle}>正在加载中</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	loading: {
		backgroundColor: 'rgba(17,17,17,0.7)',
		height: 100,
		width: 100,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		top: (winHeight - 100)/2,
		left: (winWidth - 100)/2,
	},

	loadingTitle: {
		marginTop: 10,
		fontSize: 14,
		color: 'white'
	}
})
