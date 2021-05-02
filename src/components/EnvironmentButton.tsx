import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { colors } from '../styles/colors';
import { fonts } from '../styles/fonts';

type EnvironmentButtonProps = RectButtonProps & {
  title: string;
  isSelected?: boolean;
};

export function EnvironmentButton({
  isSelected = false,
  title,
  ...rest
}: EnvironmentButtonProps) {
  return (
    <LinearGradient
      colors={['#F5FAF7', '#F0F0F0']}
      style={styles.linearGradientContainer}
    >
      <RectButton
        activeOpacity={0}
        style={[styles.container, isSelected && styles.selectedContainer]}
        {...rest}
      >
        <Text style={[styles.title, isSelected && styles.selectedTitle]}>{title}</Text>
      </RectButton>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradientContainer: {
    height: 40,
    borderRadius: 12,
  },

  container: {
    height: 40,
    minWidth: 76,
    paddingHorizontal: 16,

    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 13,
    fontFamily: fonts.complement,
    color: colors.heading,
  },

  selectedContainer: {
    backgroundColor: colors.green_light,
  },

  selectedTitle: {
    color: colors.green_dark,
    fontFamily: fonts.heading,
  },
});
