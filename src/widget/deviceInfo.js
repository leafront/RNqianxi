/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
	Dimensions
} from 'react-native';

const designWidth = 375;

const winWidth = Dimensions.get('window').width;

const winHeight =  Dimensions.get('window').height;

export function getWidth (width) {

	return  width * (winWidth / designWidth);

}

export {
	winWidth,
	winHeight
}

