/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/app/App';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';
import 'react-native-get-random-values';
import 'react-native-reanimated';

AppRegistry.registerComponent(appName, () => App);
