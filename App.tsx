import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import AgendaTelefonica from './src/screen/AgendaTelefonica';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AgendaTelefonica />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d2d44",
  },
});
