import React from 'react';
import { Feather } from '@expo/vector-icons';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { fonts } from '../styles/fonts';
import { colors } from '../styles/colors';

import wateringImg from '../assets/images/watering.png';

export function Welcome() {
  const navigation = useNavigation();

  function handleNavigateToUserIdentificationPage() {
    navigation.navigate('UserIdentification');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          Gerencie{'\n'}suas plantas de{'\n'} forma fácil
        </Text>

        <Image source={wateringImg} />

        <Text style={styles.subTitle}>
          Não esqueça mais de regar suas{'\n'}plantas. Nós cuidamos de lembrar você sempre
          que precisar.
        </Text>

        <TouchableOpacity
          style={styles.nextButton}
          activeOpacity={0.7}
          onPress={handleNavigateToUserIdentificationPage}
        >
          <Feather name="chevron-right" style={styles.buttonIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 24,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 8,
    fontFamily: fonts.heading,
    lineHeight: 38,
  },

  subTitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.body_dark,
    fontFamily: fonts.text,
  },

  nextButton: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56,
  },

  buttonIcon: {
    fontSize: 28,
    color: colors.white,
  },
});
