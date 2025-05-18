import React from 'react';
import Calculator from './src/Calculator';
import { PaperProvider } from 'react-native-paper';
import { View } from 'react-native';

export default function App() {
  return (
    <PaperProvider>
      <Calculator />
    </PaperProvider>
  );
}