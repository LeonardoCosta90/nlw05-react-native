import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from '../styles/colors';
import { fonts } from '../styles/fonts';

export function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.welcomeMessage}>Olá,</Text>
        <Text style={styles.name}>Leonardo Costa</Text>
      </View>

      <Image
        source={{ uri: 'https://avatars.githubusercontent.com/u/12099276' }}
        style={styles.avatar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 72,
    width: '100%',
    paddingHorizontal: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  welcomeMessage: {
    fontFamily: fonts.light,
    fontSize: 32,
    color: colors.heading,
  },

  name: {
    fontFamily: fonts.heading,
    fontSize: 32,
    color: colors.heading,
    marginTop: -10,
  },

  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
});
