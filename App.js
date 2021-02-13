import React from 'react';
import { Restaurants } from './Components/Restaurant/Restaurants'
import {RestaurantOptionDetails } from './Components/Restaurant/RestaurantOptionDetails'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Restaurants'>
        <Stack.Screen name='Restaurants' component={Restaurants}/>
        <Stack.Screen name='Details' component={RestaurantOptionDetails}/>
        <Stack.Screen name='AppDetails' component={RestaurantOptionDetails}/>
      </Stack.Navigator>

    </NavigationContainer>

  );
}
