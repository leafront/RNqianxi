/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component , PropTypes } from 'react';

import {
	StyleSheet,
	View,
	WebView
} from 'react-native';


import {getWidth} from "../widget/deviceInfo";

import Lizard from '../widget/lizard';

import Loading from '../component/widget/loading';

import Banner from '../component/home/banner';

export default class My extends Component {

	constructor(props) {

		super(props);
		this.state = {
			isRefreshing: false,
			comment: [],
			page:1,
			loading:true
		}
	}
	componentDidMount() {

		this.setState({
			loading:false
		})

	}
	render() {

		const {loading} = this.state;

		console.log(loading)

		return (
			<View>
				{
					loading ?
						<Loading /> :
						<View style={styles.container}>

						</View>
				}
			</View>


		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	}
})
