import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'; 
import apostila_04 from './components/apostila_04';

import apostila_04 from './components/apostila_04';

export default function App() {
  return (
    <View style={styles.container}>
      <apostila_04 />
      <StatusBar style="auto" />
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
