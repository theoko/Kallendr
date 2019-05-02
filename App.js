import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import TeamCreate from './src/screens/Auth/TeamCreate';

import MyCalendar from './src/screens/MyCalendar/MyCalendar';
import TeamCalendar from './src/screens/TeamCalendar/TeamCalendar';
import configureStore from './src/store/configureStore';

const store = configureStore();

// Register Screens
Navigation.registerComponent("Kallendr.AuthScreen", () => AuthScreen, store, Provider);
Navigation.registerComponent("Kallendr.TeamCreate", () => TeamCreate, store, Provider);

Navigation.registerComponent("Kallendr.TeamCalendar", () => TeamCalendar, store, Provider);
Navigation.registerComponent("Kallendr.MyCalendar", () => MyCalendar, store, Provider);


Navigation.startSingleScreenApp({
  screen: {
    screen: "Kallendr.AuthScreen",
    title: "Welcome"
  }
});