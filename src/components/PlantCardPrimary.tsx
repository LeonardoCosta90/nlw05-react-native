import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { colors } from '../styles/colors';
import { fonts } from '../styles/fonts';
import { SvgFromUri } from 'react-native-svg';

type PlantCardPrimaryProps = RectButtonProps & {
  title: string;
  imageURL: string;
};

export function PlantCardPrimary({ title, imageURL, ...rest }: PlantCardPrimaryProps) {
  return (
    <LinearGradient
      colors={['#F5FAF7', '#F0F0F0']}
      style={styles.linearGradientContainer}
    >
      <RectButton activeOpacity={0} style={styles.buttonContainer} {...rest}>
        <SvgFromUri uri={imageURL} width={70} height={70} />
        <Text style={styles.title}>{title}</Text>
      </RectButton>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradientContainer: {
    height: 154,
    width: 148,
    borderRadius: 20,
  },

  buttonContainer: {
    height: 154,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    marginTop: 12,
    fontSize: 13,
    color: colors.heading,
    fontFamily: fonts.heading,
  },
});
