import { AppRegistry } from 'react-native';
import { App } from './src/App';
import { name as appName } from './app.json';

if (__DEV__) {
  import('react-native-flipper-relay-devtools').then((m) => m.addPlugin());
}

AppRegistry.registerComponent(appName, () => App);
