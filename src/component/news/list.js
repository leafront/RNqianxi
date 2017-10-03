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
	TextInput,
	Image,
	Platform,
	PixelRatio,
	ActivityIndicator,
} from 'react-native';

import {getSize } from '../../widget/deviceInfo';

const ratio = PixelRatio.get();

export default class List extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.item}>
					<Image style={styles.pic} source={{uri: 'http://qianxi.spvi.cn/filespath/images/qxkx/20170929151200.jpg'}}/>
					<View style={styles.newsDes}>
						<Text style={styles.info}>全市依法规范信访秩序专项工作推进会在我县召开</Text>
						<Text style={styles.times}>2017-09-28</Text>
					</View>
				</View>
				<View style={styles.item}>
					<Image style={styles.pic} source={{uri: 'http://qianxi.spvi.cn/filespath/images/qxkx/20170929151200.jpg'}}/>
					<View style={styles.newsDes}>
						<Text style={styles.info}>全市依法规范信访秩序专项工作推进会在我县召开</Text>
						<Text style={styles.times}>2017-09-28</Text>
					</View>
				</View>
				<View style={styles.item}>
					<Image style={styles.pic} source={{uri: 'http://qianxi.spvi.cn/filespath/images/qxkx/20170929151200.jpg'}}/>
					<View style={styles.newsDes}>
						<Text style={styles.info}>全市依法规范信访秩序专项工作推进会在我县召开</Text>
						<Text style={styles.times}>2017-09-28</Text>
					</View>
				</View>
				<View style={styles.item}>
					<Image style={styles.pic} source={{uri: 'http://qianxi.spvi.cn/filespath/images/qxkx/20170929151200.jpg'}}/>
					<View style={styles.newsDes}>
						<Text style={styles.info}>全市依法规范信访秩序专项工作推进会在我县召开</Text>
						<Text style={styles.times}>2017-09-28</Text>
					</View>
				</View>
				<View style={styles.item}>
					<Image style={styles.pic} source={{uri: 'http://qianxi.spvi.cn/filespath/images/qxkx/20170929151200.jpg'}}/>
					<View style={styles.newsDes}>
						<Text style={styles.info}>全市依法规范信访秩序专项工作推进会在我县召开</Text>
						<Text style={styles.times}>2017-09-28</Text>
					</View>
				</View>
				<View style={styles.item}>
					<Image style={styles.pic} source={{uri: 'http://qianxi.spvi.cn/filespath/images/qxkx/20170929151200.jpg'}}/>
					<View style={styles.newsDes}>
						<Text style={styles.info}>全市依法规范信访秩序专项工作推进会在我县召开</Text>
						<Text style={styles.times}>2017-09-28</Text>
					</View>
				</View>
				<View style={styles.item}>
					<Image style={styles.pic} source={{uri: 'http://qianxi.spvi.cn/filespath/images/qxkx/20170929151200.jpg'}}/>
					<View style={styles.newsDes}>
						<Text style={styles.info}>全市依法规范信访秩序专项工作推进会在我县召开</Text>
						<Text style={styles.times}>2017-09-28</Text>
					</View>
				</View>
				<View style={styles.item}>
					<Image style={styles.pic} source={{uri: 'http://qianxi.spvi.cn/filespath/images/qxkx/20170929151200.jpg'}}/>
					<View style={styles.newsDes}>
						<Text style={styles.info}>全市依法规范信访秩序专项工作推进会在我县召开</Text>
						<Text style={styles.times}>2017-09-28</Text>
					</View>
				</View>
				<View style={styles.item}>
					<Image style={styles.pic} source={{uri: 'http://qianxi.spvi.cn/filespath/images/qxkx/20170929151200.jpg'}}/>
					<View style={styles.newsDes}>
						<Text style={styles.info}>全市依法规范信访秩序专项工作推进会在我县召开</Text>
						<Text style={styles.times}>2017-09-28</Text>
					</View>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
  	backgroundColor: '#f5f5f5',
		paddingTop:getSize(10)
	},
	item: {

  	flexDirection: 'row',
		paddingTop: getSize(12),
		paddingHorizontal: getSize(12),
		backgroundColor:'white',
		height:getSize(110),
		justifyContent: 'space-between',
		borderBottomWidth:1/ratio,
		borderColor:'#f0f0f0'

	},
	pic: {
		width: getSize(115),
		height: getSize(85)
	},
	newsDes: {
		width: getSize(220),
		paddingTop: getSize(5)
	},
	info: {
  	fontSize: 14,
		color: '#333',
		lineHeight: getSize(20)
	},
	times: {
  	paddingTop: getSize(10),
  	fontSize: 12,
		color: '#999'
	}
})
