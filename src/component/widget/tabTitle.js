import React,{Component} from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	PixelRatio,
} from 'react-native';

import {getSize} from "../../widget/deviceInfo";

const ratio = PixelRatio.get();

export default class TabTitle extends Component {

	render() {
		return(
			<View style={styles.titWrapper}>
				<View style={styles.title}>
					<Text style={styles.titText}>{this.props.title}</Text>
					<Image style={styles.titPic} source={require('../../images/nav_link.png')}/>
				</View>
			</View>
		)
	}

}

const styles = StyleSheet.create({
	titWrapper: {
		paddingHorizontal: getSize(12),
		backgroundColor:'#fff'
	},
	title: {

		height: getSize(44),

		borderBottomColor: '#e6e6e6',
		backgroundColor: '#fff',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection:'row',
		borderBottomWidth:1/ratio

	},
	titText: {
		fontSize: getSize(16),
		color: '#005196'

	},
	titPic: {
		width:16,
		height: 3

	}
})
