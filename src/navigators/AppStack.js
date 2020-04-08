import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AnotherScreen from '../screens/AnotherScreen';
import MainScreen from '../screens/MainScreen';
const {Navigator, Screen} = createStackNavigator();
const AppStack = () => (
  <Navigator headerMode="none">
    <Screen name="MainScreen" component={MainScreen} />
    <Screen name="AnotherScreen" component={AnotherScreen} />
  </Navigator>
);
export default AppStack;
