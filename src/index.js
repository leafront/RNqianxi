/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	TouchableOpacity,
	Platform,
	View,
	Image
} from 'react-native';

import Index from './container/index';

import Introduce from './container/introduce';

import News from './container/news';

import My from './container/my';

import {getSize} from './widget/deviceInfo';

import { StackNavigator, TabNavigator } from 'react-navigation'

import TabBarItem from './component/widget/tabBarItem';

const TabView = TabNavigator({

		home:{
			screen:Index,
			navigationOptions:({navigation}) => ({
				tabBarLabel:'首页',
				tabBarIcon:({focused,tintColor}) => (
					<TabBarItem
						focused={focused}
						normalImage={require('./images/home_ico.png')}
						selectedImage={require('./images/home_ico_active.png')}
					/>
				)
			}),
		},

		introduce:{
			screen:Introduce,
			navigationOptions:({navigation}) => ({
				tabBarLabel:'简介',
				tabBarIcon:({focused}) => (
					<TabBarItem
						focused={focused}
						normalImage={require('./images/introduce_ico.png')}
						selectedImage={require('./images/introduce_ico_active.png')}
					/>
				),
				title: '简介',
				headerTitleStyle: {
					color: '#333',
					fontSize: 18,
				},
				headerStyle: {
					height:64,
					paddingTop: 20,
					backgroundColor:'white'
				}
			})
		},
		news:{
			screen:News,
			navigationOptions:({navigation}) => ({
				tabBarLabel:'快讯',
				tabBarIcon:({focused}) => (
					<TabBarItem
						focused={focused}
						normalImage={require('./images/news_ico.png')}
						selectedImage={require('./images/news_ico_active.png')}
					/>
				),
				title: '迁西快讯',
				headerTitleStyle: {
					color: '#333',
					fontSize: 18,
				},
				headerStyle: {
					height:64,
					paddingTop: 20,
					backgroundColor:'white'
				}
			})
		},
		my:{
			screen:My,
			navigationOptions:({navigation}) => ({
				tabBarLabel:'我的',
				tabBarIcon:({focused}) => (
					<TabBarItem
						focused={focused}
						normalImage={require('./images/my_ico.png')}
						selectedImage={require('./images/my_ico_active.png')}
					/>
				),
				title: '我的',
				headerTitleStyle: {
					color: '#333',
					fontSize: 18,
				},
				headerStyle: {
					height:64,
					paddingTop: 20,
					backgroundColor:'white'
				}
			})
		}
	},
	{
		lazy: true,
		tabBarPosition: "bottom",
		tabBarOptions:{
			showIcon: true,
			activeTintColor: "rgb(250, 90, 75)",
			inactiveTintColor: "rgb(102,102,102)",
			style: {
				backgroundColor: "#fff",
			},
			tabStyle: {
				padding: 0
			},
			labelStyle: {
				fontSize: 12
			}
		}
	})

const RNqianxi = StackNavigator({

	Main: {
		screen: TabView
	}

})


export default  RNqianxi;


