import React from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

import plantLoad from '../assets/plantLoad.json';

export function Load() {
  return (
    <View style={styles.container}>
      <LottieView source={plantLoad} autoPlay loop />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 150,
  },
});
