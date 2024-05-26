import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        My name is <Text style={styles.boldText}>Benson Otti</Text>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff', // Changed the background color
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24, // Increased the font size
  },
  boldText: {
    fontWeight: 'bold',
  },
});

