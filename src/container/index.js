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
	ScrollView
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
	componentDidMount() {

		Lizard.ajax({
			type: 'POST',
			url: '/gateway/ord_comment/getOrderHyperCommentList',
			data: {
				"minResultCount":5,
				"page":{
					"currentPage":1,
					"pageSize":5
				},
				"queryType":1,
				"recommended":true,
				"appCode":101,
				"lcb_client_id":"4b1a5e1f-c146-46ca-9189-41cbf0827f26",
				"lcb_request_id":"11dc84af-a7f8-440e-af65-658297aedc5a",
				"lcb_h5_v":"4.0.2"
			}
		}).then((data) => {

			console.log(data);

		})


	}

	static navigationOptions = {
		header: null
	}

	render() {

		return (
			<View style={styles.container}>
				<Loading/>
			</View>


		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor:'#f4f4f8',
		alignItems:'center',
		justifyContent:'center',
	}
})
