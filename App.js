import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import { createNativeStackNavigator } from '@react-navigation/native-stack';

import home from './src/view/Screen1'; // Asegúrate de proporcionar la ruta correcta
import PelisScreen from './src/view/pelis';
import SeriesScreen from './src/view/series';

const   Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{headerShown: false}} component={home} />
        <Stack.Screen name="pelisScreen" options={{headerShown: false}} component={PelisScreen} />
        <Stack.Screen name="seriesScreen" options={{headerShown: false}} component={SeriesScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

