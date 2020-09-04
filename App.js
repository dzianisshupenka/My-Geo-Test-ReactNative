import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MainScreen from './components/MainScreen';
import HistoryWrapper from './components/HistoryWrapper';

const Tab = createMaterialTopTabNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <Tab.Navigator tabBarOptions={{
          activeTintColor: '#54B0FC',
          labelStyle: {
            fontSize: 25,
          },
          tabStyle: {
            justifyContent: 'center'    
          },
          style: {
            backgroundColor: '#080A35'
          },
        }}>
        <Tab.Screen name="Main" component={MainScreen} />
        <Tab.Screen name="History" component={HistoryWrapper} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}