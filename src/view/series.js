// Home.js
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  const goToPelisScreen = () => {
    navigation.navigate('Pelis');
  };

  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <Text style={styles.bannerText}>Streaming</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={goToPelisScreen}>
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
  // ... estilos anteriores ...
});
