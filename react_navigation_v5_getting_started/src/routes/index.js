import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Detail from '../pages/Detail';
import Home from '../pages/Home';

export default function Routes() {
  const StackNavigator = createStackNavigator();

  return (
    <NavigationContainer>
      <StackNavigator.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <StackNavigator.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Overview',
          }}
        />
        <StackNavigator.Screen name="Detail" component={Detail} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}
