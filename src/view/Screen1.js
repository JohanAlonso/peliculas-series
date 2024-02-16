import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PelisScreen from './pelis';
import SeriesScreen from './series';
import { createStackNavigator } from '@react-navigation/stack';

export default function Home(props) {

  const { navigation } = props;

  const iraMovies = () => {
    navigation.navigate('PelisScreen'); // Use the correct screen name
  }

  const iraSeries = () => {
    navigation.navigate('SeriesScreen'); // Use the correct screen name
  }

  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <Text style={styles.bannerText}>Streaming</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={PelisScreen}>
          <Text>Peliculas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={iraSeries}>
          <Text>Series</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  bannerContainer: {
    backgroundColor: 'red',
    padding: 30,
    width: '100%',
    alignItems: 'left',
  },
  bannerText: {
    color: 'white',
    fontSize: 40,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 10,
  },
});
