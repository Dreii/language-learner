import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WritePage from './pages/WritePage'

export default function App() {
  return (
    <View style={styles.container}>
      <WritePage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
