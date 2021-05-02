import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { colors } from '../styles/colors';

import { Welcome } from '../pages/Welcome';
import { PlantSelect } from '../pages/PlantSelect';
import { Confirmation } from '../pages/Confirmation';
import { UserIdentification } from '../pages/UserIdentification';

const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.white,
        },
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="UserIdentification" component={UserIdentification} />
      <Stack.Screen name="Confirmation" component={Confirmation} />
      <Stack.Screen name="PlantSelect" component={PlantSelect} />
    </Stack.Navigator>
  );
}
