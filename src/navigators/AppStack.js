import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SecondaryScreen from '../screens/SecondaryScreen';
import MainScreen from '../screens/MainScreen';
const {Navigator, Screen} = createStackNavigator();
const AppStack = () => (
  <Navigator headerMode="none">
    <Screen name="MainScreen" component={MainScreen} />
    <Screen name="SecondaryScreen" component={SecondaryScreen} />
  </Navigator>
);
export default AppStack;
