import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Restaurants } from './Components/Restaurants'

export default function App() {
  return (
    <View style={styles.container}>
      <Restaurants />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
});
