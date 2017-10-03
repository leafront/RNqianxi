/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View,
	Button,
	Image
} from 'react-native'


import Swiper from 'react-native-swiper'

import {getSize, winWidth} from '../../widget/deviceInfo';

import Lizard from '../../widget/lizard';

class Banner extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataSource: []
		}
	}
	static navigationOptions = {
		header: null
	}
	componentWillMount(){

		this.getBanner();

	}
	getBanner() {

		fetch(
			'https://m.lechebang.com/gateway/mkt/getShowcaseModules' , {
				method: 'POST',
				headers: {
					'Content-Type':'application/x-www-form-urlencoded'
				},
				body: JSON.stringify({
					"positionId":[15,19,20,37,38],
					"cityId":10201,
					"appCode":101,
					"lcb_client_id":"3ae73b81-1d13-40b8-b0d1-d7aa3d9df7ee",
					"lcb_request_id":"7eb21e24-9ed3-43ca-afe0-bb048617d142",
					"lcb_h5_v":"4.0.2"
				})
			})
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
			}).then((json) => {
			if(json && json.msg == "ok"){

				this.setState({
					dataSource: json.result[19].content
				})
			}
		}).catch((error) => {
			console.error(error)
		})

	}
	render() {

		const bannerList = this.state.dataSource;

		const banner = bannerList.map((item,index) => {
			return (
				<View style={styles.slide} key={index}>
					<Image source={{uri: 'http://qianxi.spvi.cn/Public/home/images/tong1.jpg'}} style={styles.thumbnail}/>
					<Text style={styles.sliderText}>县委政法委召开第二次全体（扩大）会议{index}</Text>
				</View>
			)
		})

		return (
			<View>
				<Swiper
					style={styles.wrapper}
					showsButtons={false}
					showsPagination={true}
					loadMinimal={true}
					height={ getSize(224)}
					paginationStyle = {styles.pagination}
					dot = {
					<View
						style={{backgroundColor:'rgba(244,244,244,.55)',
						width: getSize(10), height: getSize(10),
						borderRadius: getSize(10),
						marginRight: getSize(10)}}
					/>}
					activeDot = {
						<View
							style={{backgroundColor:'#f4f4f4',
								width: getSize(20), height: getSize(10),
								borderRadius: getSize(10),
								marginRight: getSize(10)}}
						/>}
				>
					{banner}
				</Swiper>
			</View>
		)
	}
}

export default Banner

var styles = StyleSheet.create({
	pagination: {
		bottom:getSize(8)
	},
	wrapper: {
		height: getSize(224)
	},
	thumbnail: {
		width:winWidth,
		height: getSize(224)
	},
	slide: {
		flex: 1,
		height:getSize(224)
	},
	sliderText: {
		fontSize: getSize(16),
		color:'#fff',
    position:'relative',
		bottom:getSize(42),
		textAlign:'center'
	}
})
