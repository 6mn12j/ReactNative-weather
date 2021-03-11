import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  Haze: {
    iconName: 'weather-hail',
    gradient: ['#C5796D', '#DBE6F6'],
    title: 'Haze',
    subtitle: "Just don't go out side",
  },
  Thunderstrorm: {
    iconName: 'weather-lightning-rainy',
    gradient: ['#00D2FF', '#928DAB'],
    title: 'Thunderstorm in the house',
    subtitle: 'Actually, outside of the house',
  },
  Drizzle: {
    iconName: 'weather-hail',
    gradient: ['#89F7FE', '#66A6FF'],
    title: 'Drizzle',
    subtitle: 'Is like rain',
  },
  Rain: {
    iconName: 'weather-rainy',
    gradient: ['#3d72b4', '#525252'],
    title: 'Rainy day ☔',
    subtitle: 'Bring an umbrella when you go out',
  },
  Snow: {
    iconName: 'weather-snowy',
    gradient: ['#6190e8', '#a7bfe8'],
    title: 'Snow',
    subtitle: 'Do you want to build a snowman?',
  },
  Atomsphere: {
    iconName: 'weather-hail',
    gradient: ['#89F7FE', '#66A6FF'],
    title: 'Atomsphere',
    subtitle: 'a t o m s p h e r e',
  },
  Clear: {
    iconName: 'weather-sunny',
    gradient: ['#ede574', '#ffffff'],
    title: 'Sunny',
    subtitle: "Let's go outside",
  },
  Clouds: {
    iconName: 'weather-cloudy',
    gradient: ['#D7D2CC', '#304352'],
    title: 'Clouds',
    subtitle: 'I know, Cloudy day',
  },
  Dust: {
    iconName: 'weather-hail',
    gradient: ['#4DA0B0', '#D39D38'],
    title: 'Dusty',
    subtitle: 'Thanks a lot China 🖕🏻',
  },
  Mist: {
    iconName: 'weather-rainy',
    gradient: ['#9cecfb', '#0052d4'],
    title: 'Mist day ☔',
    subtitle: 'Bring an umbrella when you go out',
  },
};
export default function Weather({ temp, condition }) {
  return (
    <>
      <LinearGradient
        // Background Linear Gradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}
      >
        <StatusBar barStyle="light-content"></StatusBar>
        <View style={styles.halfContainer}>
          <MaterialCommunityIcons size={86} color="white" name={weatherOptions[condition].iconName || 'weather-sunset-up'}></MaterialCommunityIcons>
          <Text style={styles.temp}>{temp}</Text>
        </View>
        <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
          <Text style={styles.title}>{weatherOptions[condition].title}</Text>
          <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
        </View>
      </LinearGradient>
    </>
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
  title: {
    color: '#ffffff',
    marginBottom: 10,
    fontSize: 34,
    fontWeight: '300',
  },
  subtitle: {
    color: '#ffffff',
    marginBottom: 10,
    fontSize: 24,
    fontWeight: '600',
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: 'flex-start',
  },
});
