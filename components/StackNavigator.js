import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HistoryWrapper from './HistoryWrapper';
import { HistoryDetails } from './HistoryDetails';

const Stack = createStackNavigator();

export const MyStack = () => {
  return (
      <Stack.Navigator 
        screenOptions={{
            headerShown: false
        }}
      >
        <Stack.Screen name="History" component={HistoryWrapper} />
        <Stack.Screen name="HistoryDetayls" component={HistoryDetails} />
      </Stack.Navigator>
  );
};