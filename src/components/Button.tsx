import React from 'react';
import {
  Text,
  TextStyle,
  ViewStyle,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import { colors } from '../styles/colors';
import { fonts } from '../styles/fonts';

type ButtonProps = TouchableOpacityProps & {
  title: string;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export function Button({ title, containerStyle, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={[styles.container, containerStyle]} {...rest}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  text: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.heading,
  },
});
