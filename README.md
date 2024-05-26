# My React Native App

This is a simple React Native application that I developed as part of a task to display a text message with specific styles.

## Description

In this project, I made the following modifications to the `App.js` file:
- Changed the background color of the `View` component.
- Edited the `Text` component to display "My name is Benson Otti".
- Increased the font size of the text to 24.
- Made the name "Benson Otti" bold.

## Screenshot



## Student ID

My Student ID: 11296671

## How to Run the Project

1. Clone this repository:
    ```sh
    git clone https://github.com/Rizculla/rn-assignment2-ID-11296671.git
    ```
2. Navigate to the project directory:
    ```sh
    cd rn-assignment2-ID-11296671
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
4. Run the project:
    ```sh
    npm start
    ```

## App.js Code

Here is the code for the `App.js` file:

```javascript
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
