import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LoginScreen from './screens/Login';

const screens = ["Screen 1", "Screen 2", "Screen 3"];

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(0);

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        {currentScreen == 0 && <LoginScreen />}
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingVertical: 20, backgroundColor: 'black' }}>
        {screens.map((screen, i) => {
          const isSelected = (i == currentScreen);
          return (
            <TouchableOpacity key={screen} onPress={() => setCurrentScreen(i)}>
              <View style={Object.assign({}, styles.chip, isSelected && styles.selectedChip)}>
                <Text style={isSelected ? styles.selectedChipText : styles.chipText}>{screen}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f8fd'
  },
  chip: {
    backgroundColor: "#fefefe",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 30
  },
  chipText: {
    color: '#000'
  },
  selectedChip: {
    backgroundColor: "#575e94"
  },
  selectedChipText: {
    color: "#fff",
    fontWeight: 'bold'
  }
});
