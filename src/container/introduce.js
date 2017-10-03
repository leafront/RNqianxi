/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component , PropTypes } from 'react';

import {
	StyleSheet,
	View,
	RefreshControl,
	ScrollView
} from 'react-native';

import Loading from '../component/widget/loading';

import Index from '../component/introduce/introduce';

export default class Introduce extends Component {

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
								<Index/>
						</ScrollView>
						</View>
				}
			</View>


		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff'
	}
})
