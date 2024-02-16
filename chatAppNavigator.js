//borrar la palabra chat del nombre

//creaada por el chat

// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import home from './src/view/Screen1';
//import HomeScreen from './path-to-your-home/home';
//import PelisScreen from './path-to-your-pelis/PelisScreen';
import PelisScreen from './src/view/pelis';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={home} />
        <Stack.Screen name="Pelis" component={PelisScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
