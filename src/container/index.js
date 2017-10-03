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
	StatusBar,
	TouchableOpacity
} from 'react-native';


import {getSize} from "../widget/deviceInfo";

import Lizard from '../widget/lizard';

import Loading from '../component/widget/loading';

import Banner from '../component/home/banner';

import Search from '../component/home/search';

export default class Home extends Component {

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

		setTimeout(() =>{

			this.setState({
				loading:false
			})
		},200)



	}

	static navigationOptions = {
		header: null
	}

	render() {

		const {loading} = this.state;

		return (
			<View>
				{
					loading ?
						<Loading /> :
						<View style={styles.container}>
							<StatusBar
							hidden={false} //是否隐藏状态栏。
							animated={true} //是否需要动画效果
							translucent={true} //android平台，是否有半透明效果,如果为true,状态栏会浮在下面的布局上面，
							backgroundColor="white" // android 平台，设置状态栏配背景颜色
							barStyle="dark-content"//可以取值 'default', 'light-content', 'dark-content'它的默认是default,
						/>
							<Banner/>
							<Search/>
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
