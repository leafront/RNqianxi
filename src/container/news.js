/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component , PropTypes } from 'react';

import {
	StyleSheet,
	View,
	StatusBar,
	ScrollView,
	RefreshControl,
	TouchableOpacity
} from 'react-native';

import Lizard from '../widget/lizard';

import Loading from '../component/widget/loading';

import List from '../component/news/list';

export default class News extends Component {

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
	_onRefresh () {
		this.setState({isRefreshing: true});
	}

	render() {

		const {loading} = this.state;

		return (
			<View>
				{
					loading ?
						<Loading /> :
						<View style={styles.container}>
							<ScrollView
								refreshControl = {
									<RefreshControl
										refreshing={ this.state.isRefreshing }
										onRefresh={ () => {this._onRefresh}}
										title="加载中..."
										colors={['#ff0000', '#00ff00', '#0000ff']}
										progressBackgroundColor="#ffffff"
									/>
								}
								scrollEventThrottle={50}
							 >
								<List/>

							</ScrollView>

						</View>
				}
			</View>


		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor:'#f5f5f5'
	}
})
