// pelis.js

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function PelisScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <Text style={styles.bannerText}>Pelis</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text>Contenido de la pantalla de Pelis</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bannerContainer: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
  },
  bannerText: {
    color: 'white',
    fontSize: 20,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
