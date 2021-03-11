import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  Haze: {
    iconName: 'weather-hail',
    gradient: ['#C5796D', '#DBE6F6'],
  },
  Thunderstrorm: {
    iconName: 'weather-lightning-rainy',
    gradient: ['#00D2FF', '#928DAB'],
  },
  Drizzle: {
    iconName: 'weather-hail',
    gradient: ['#89F7FE', '#66A6FF'],
  },
  Rain: {
    iconName: 'weather-rainy',
    gradient: ['#3d72b4', '#525252'],
  },
  Snow: {
    iconName: 'weather-snowy',
    gradient: ['#6190e8', '#a7bfe8'],
  },
  Atomsphere: {
    iconName: 'weather-hail',
    gradient: ['#89F7FE', '#66A6FF'],
  },
  Clear: {
    iconName: 'weather-sunny',
    gradient: ['#ede574', '#ffffff'],
  },
  Clouds: {
    iconName: 'weather-cloudy',
    gradient: ['#D7D2CC', '#304352'],
  },
  Dust: {
    iconName: 'weather-hail',
    gradient: ['#4DA0B0', '#D39D38'],
  },
  Mist: {
    iconName: 'weather-rainy',
    gradient: ['#9cecfb', '#0052d4'],
  },
};
export default function Weather({ temp, Thunderstrorm }) {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={weatherOptions['Thunderstrorm'].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content"></StatusBar>
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons size={86} color="white" name={weatherOptions['Thunderstrorm'].iconName || 'weather-sunset-up'}></MaterialCommunityIcons>
        <Text>{temp}</Text>
      </View>
      <View style={styles.halfContainer}>
        <Text style={styles.temp}></Text>
      </View>
    </LinearGradient>
  );
}

Weather.PropTypes = {
  tep: PropTypes.number.isRequired,
  condition: PropTypes.oneOf(['Thunderstrorm', 'Drizzle', 'Rain', 'Snow', 'Atomsphere', 'Clear', 'Clouds', 'Haze', 'Dust', 'Mist']).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  temp: {
    fontSize: 42,
    color: 'white',
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
});
