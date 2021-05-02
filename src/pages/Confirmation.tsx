import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { Button } from '../components/Button';

import { colors } from '../styles/colors';
import { fonts } from '../styles/fonts';

export function Confirmation() {
  const navigation = useNavigation();

  function handleNavigateToPlantSelectPage() {
    navigation.navigate('PlantSelect');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>😁</Text>

        <Text style={styles.title}>Prontinho</Text>

        <Text style={styles.message}>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </Text>

        <Button
          title="Começar"
          activeOpacity={0.7}
          containerStyle={styles.buttonContainer}
          onPress={handleNavigateToPlantSelectPage}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },

  content: {
    alignItems: 'center',
  },

  emoji: {
    fontSize: 80,
    marginBottom: 64,
  },

  title: {
    fontSize: 24,
    color: colors.heading,
    fontFamily: fonts.heading,
    marginBottom: 16,
  },

  message: {
    paddingHorizontal: 32,
    fontSize: 17,
    color: colors.body_dark,
    fontFamily: fonts.text,
    textAlign: 'center',
    lineHeight: 25,
    marginBottom: 40,
  },

  buttonContainer: {
    width: 232,
  },
});
