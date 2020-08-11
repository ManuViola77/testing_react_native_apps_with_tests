import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {render} from '@testing-library/react-native';

const Stack = createStackNavigator();

const renderOtherComponents = (otherComponents, screenConfig = {}) => {
  return otherComponents.map(({name, component}) => {
    return (
      <Stack.Screen
        {...screenConfig}
        key={name}
        name={name}
        component={component}
      />
    );
  });
};

export const renderWithNavigation = (
  mainComponent,
  {otherComponents = [], navigatorConfig = {}, screenConfig = {}} = {},
) => {
  const App = () => (
    <NavigationContainer>
      <Stack.Navigator {...navigatorConfig}>
        <Stack.Screen
          {...screenConfig}
          name="TestNavigator"
          component={mainComponent}
        />
        {otherComponents &&
          renderOtherComponents(otherComponents, screenConfig)}
      </Stack.Navigator>
    </NavigationContainer>
  );

  return {...render(<App />)};
};
