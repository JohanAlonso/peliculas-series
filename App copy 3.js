import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/view/Screen1'; // Asegúrate de proporcionar la ruta correcta
import PelisScreen from './src/view/pelis';
import home from './src/view/Screen1';

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="PelisScreen" options={{headerShown: false}} component={PelisScreen} />
        <Stack.Screen name="home" options={{headerShown: false}} component={home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

