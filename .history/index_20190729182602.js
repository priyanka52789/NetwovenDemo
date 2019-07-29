/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import HomeNavigator from './src/navigators/HomeNavigator';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => HomeNavigator);
