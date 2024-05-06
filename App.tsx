import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import AgendaTelefonica from './src/screen/AgendaTelefonica';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AgendaTelefonica />
    </SafeAreaView>
  );
}
