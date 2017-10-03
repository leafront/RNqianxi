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
	Platform
} from 'react-native';

import { winWidth, winHeight,getSize } from '../../widget/deviceInfo';



export default class Search extends React.Component {
	render() {
		return (
			<View>
				 <View style={styles.searchWrapper}>
					 <Image style={styles.logo} source={require('../../images/logo.png')} />
					 <View style={styles.searchInput}>
						 <Image style={styles.searchBg} source={require('../../images/search.png')}/>
						 <TextInput style={styles.searchBtn} placeholder="关键词搜索" underlineColorAndroid='transparent'/>
						 <Image style={styles.searchNav} source={require('../../images/search_nav.png')}/>
					 </View>
				 </View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	searchWrapper: {
		marginTop: Platform.OS == "ios" ? getSize(28) : getSize(35),
		paddingHorizontal:getSize(17),
		justifyContent:'space-between',
		flexDirection:'row',
		height:getSize(30),
		alignItems:'center'
	},
	logo: {
		width: getSize(90),
		height: getSize(21),

	},
	searchBg: {
		width: getSize(15),
		height: getSize(15),
		position:'relative',
		left:getSize(25),
		top:0,
		zIndex:100
	},
	searchBtn: {
		width: getSize(200),
		height: getSize(30),
		borderRadius: getSize(14),
		paddingLeft: getSize(33),
		fontSize:14,
		justifyContent: 'center',
		padding:0,
		backgroundColor:'white'
	},
	searchNav: {

		width:getSize(20),
		height:getSize(20),
		marginLeft:getSize(14)
	},
	searchInput: {
		flexDirection:'row',
		alignItems:'center'
	}
})
