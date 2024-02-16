import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function home() {
  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <Text style={styles.bannerText}>Streaming</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text>Peliculas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
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
    justifyContent: 'flex-start', // Alinea el contenido en la parte superior
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
