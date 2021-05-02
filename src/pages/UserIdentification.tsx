import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { transparentize } from 'polished';

import { Button } from '../components/Button';

import { fonts } from '../styles/fonts';
import { colors } from '../styles/colors';

export function UserIdentification() {
  const navigation = useNavigation();

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState('');

  function handleNavigateToConfirmationPage() {
    if (!name) return;

    navigation.navigate('Confirmation');
  }

  function handleInputBlur() {
    setIsFocused(false);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <View style={styles.form}>
              <Text style={styles.emoji}>{isFilled ? '🙈' : '😁'}</Text>
              <Text style={styles.title}>Como podemos{'\n'}chamar você?</Text>

              <TextInput
                value={name}
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                placeholder="Digite um nome"
                onChangeText={handleInputChange}
                placeholderTextColor={colors.placeholder}
                style={[styles.input, (isFocused || isFilled) && styles.inputOnFocus]}
              />

              <Button
                title="Confirmar"
                activeOpacity={0.7}
                disabled={!isFilled}
                containerStyle={[
                  styles.buttonContainer,
                  isFilled && styles.buttonContainerIsFilled,
                ]}
                onPress={handleNavigateToConfirmationPage}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },

  content: {
    flex: 1,
    width: '100%',
    marginTop: 128,
  },

  form: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 54,
  },

  emoji: {
    fontSize: 44,
  },

  title: {
    fontSize: 24,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 32,
    marginTop: 24,
  },

  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: 'center',
    width: '100%',
  },

  inputOnFocus: {
    borderColor: colors.green,
  },

  buttonContainer: {
    marginTop: 40,
    width: 232,
    backgroundColor: transparentize(0.5, colors.green),
  },

  buttonContainerIsFilled: {
    backgroundColor: colors.green,
  },
});
