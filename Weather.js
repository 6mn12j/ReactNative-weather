import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Weather({ temp }) {
  return (
    <View style={styles.container}>
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons size={86} name="weather-lightning-rainy"></MaterialCommunityIcons>
        <Text>{temp}</Text>
      </View>
      <View style={styles.halfContainer}>
        <Text style={styles.temp}></Text>
      </View>
    </View>
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
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
