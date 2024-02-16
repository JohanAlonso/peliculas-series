import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

const PelisScreen = () => {
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    // Leer el archivo JSON
    const leerJSON = async () => {
      try {
        const response = require('./data/sample.json');
        // Filtrar las entradas que cumplen con "programType": "movie"
        const movies = response.entries.filter(entry => entry.programType === 'movie');
        setDatos({ total: movies.length, entries: movies });
      } catch (error) {
        console.error('Error al leer el archivo JSON:', error);
      }
    };

    leerJSON();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <Text style={styles.bannerText}>PELICULAS</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.contentContainer}>
          {datos ? (
            <>
              <Text>Total: {datos.total}</Text>
              {datos.entries.map((entry, index) => (
                <View key={index} style={styles.entryContainer}>
                  <Text>Title: {entry.title}</Text>
                  <Text>Description: {entry.description}</Text>
                  <Text>Program Type: {entry.programType}</Text>
                  <Image
                    source={{ uri: entry.images['Poster Art'].url }}
                    style={{ width: 100, height: 150 }}
                  />
                  <Text>Release Year: {entry.releaseYear}</Text>
                  <Text>-------------------</Text>
                </View>
              ))}
            </>
          ) : (
            <Text>Cargando datos...</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bannerContainer: {
    backgroundColor: 'red',
    padding: 20,
    alignItems: 'center',
  },
  bannerText: {
    color: 'white',
    fontSize: 40,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  entryContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
});

export default PelisScreen;
