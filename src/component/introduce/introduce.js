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
	TouchableHighlight,
} from 'react-native';

import { getSize, winWidth } from '../../widget/deviceInfo';

import TabTitle from '../widget/tabTitle';

const ratio = PixelRatio.get();

export default class Introduce extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<TabTitle title={'迁西简介'}/>
				<View style={styles.tabNav}>
					<View style={styles.tabNavBtn}>
						<TouchableHighlight>
							<Text style={styles.tabNavTxt}>迁西概况</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.tabNavBtn}>
						<TouchableHighlight>
							<Text style={styles.tabNavTxt}>行政区划</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.tabNavBtn}>
						<TouchableHighlight>
							<Text style={styles.tabNavTxt}>自然环境</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.tabNavBtn}>
						<TouchableHighlight>
							<Text style={styles.tabNavTxt}>历史沿革</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.tabNavBtn}>
						<TouchableHighlight>
							<Text style={styles.tabNavTxt}>物产资源</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.tabNavBtn}>
						<TouchableHighlight>
							<Text style={styles.tabNavTxt}>交通水利</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.tabNavBtn}>
						<TouchableHighlight>
							<Text style={styles.tabNavTxt}>名人英烈</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.tabNavBtn}>
						<TouchableHighlight>
							<Text style={styles.tabNavTxt}>民俗风情</Text>
						</TouchableHighlight>
					</View>
				</View>
				<View style={styles.tabContentWrapper}>
					<View style={styles.tabContent}>
						<Image style={styles.tabPic} source={{uri: 'http://qianxi.spvi.cn/filespath/images/qianxi/20170801080112.png'}}/>
						<Text style={styles.tabInfo}>中国迁西，位于河北省唐山市东北部，燕山南麓，长城脚下，滦河之滨，总面积1439平方公里，人口39万。世界最古老的大洋地壳遗迹滦河之滨，总面积1439平方公里，人口40.8万......</Text>
					</View>
				</View>
				<View style={styles.tabNavMore}>
					<Text style={styles.tabMoreTxt}>查看更多</Text>
					<Image style={styles.loadMore} soruce={require('../../images/load_more.png')}/>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		paddingTop:getSize(10),
		backgroundColor:'#f5f5f5'
	},
	tabNav: {
		paddingLeft: getSize(12),
		flexDirection: 'row',
		flexWrap:'wrap',
		backgroundColor:'#fff',
		paddingBottom: getSize(12)
	},
	tabNavBtn: {
		width: (winWidth - getSize(60)) * 0.25,
		borderRadius: 3,
		backgroundColor:'#f5f6f7',
		height: getSize(35),
		marginTop: getSize(12),
		marginRight: getSize(12)
	},
	tabNavTxt: {
		width: getSize(77),
		height: getSize(35),
		fontSize: getSize(16),
		textAlign: 'center',
		lineHeight: getSize(30)
	},
	tabContentWrapper: {

		paddingHorizontal: getSize(12),
		backgroundColor:'#fff'
	},
	tabContent: {
		borderBottomColor:'#f0f0f0',
		borderBottomWidth: 1 / ratio
	},
	tabPic: {
		width: winWidth - getSize(24),
		height: getSize(185)
	},
	tabInfo: {
		paddingVertical: getSize(8),
		lineHeight: getSize(20),
		fontSize: getSize(16),
		color: '#4c4c4c'
	},
	tabNavMore: {

		height:getSize(35),
		justifyContent: 'center',
		alignItems: 'center'

	},
	tabMoreTxt: {
		color: '#005196',
		fontSize: getSize(14)
	},
	loadMore: {

	}

})

