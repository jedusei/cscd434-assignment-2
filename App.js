import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LoginScreen from './screens/Login';
import ProfileScreen from './screens/Profile';

const screens = ["Screen 1", "Screen 2", "Screen 3"];

export default function App() {
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
  const screens = [
    {
      name: 'Screen 1',
      component: LoginScreen
    },
    {
      name: 'Screen 2',
      component: ProfileScreen
    },
    {
      name: 'Screen 3',
      component: null
    }
  ];

  const CurrentScreen = screens[currentScreenIndex].component;

  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={{ flex: 1 }}>
        {CurrentScreen && <CurrentScreen />}
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingVertical: 20, backgroundColor: 'black' }}>
        {screens.map((screen, i) => {
          const isSelected = (i == currentScreenIndex);
          return (
            <TouchableOpacity key={screen.name} activeOpacity={0.75} onPress={() => setCurrentScreenIndex(i)}>
              <View style={Object.assign({}, styles.chip, isSelected && styles.selectedChip)}>
                <Text style={isSelected ? styles.selectedChipText : styles.chipText}>{screen.name}</Text>
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
