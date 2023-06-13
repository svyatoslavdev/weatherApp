import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import CloudyImage from '../../assets/images/cloudy.png';

export const Header = ({city}) => (
  <View style={HEADER_STYLES.main}>
    <View style={HEADER_STYLES.titleContainer}>
      <Image style={HEADER_STYLES.image} source={CloudyImage} />
      <Text style={HEADER_STYLES.text}>Weather App</Text>
    </View>

    <View style={HEADER_STYLES.cityContainer}>
      <Text style={HEADER_STYLES.city}>City: {city}</Text>
    </View>
  </View>
);

const HEADER_STYLES = StyleSheet.create({
  main: {
    height: 50,
    position: 'absolute',
    top: 0,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#20232A',
    padding: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginStart: 6,
    color: 'white',
    fontSize: 18,
    fontWeight: 500,
  },
  city: {
    color: 'white',
    fontSize: 18,
  },
  image: {
    width: 36,
    height: 36,
  },
  cityContainer: {
    display: 'flex',
    alignItems: 'center',
  },
});
