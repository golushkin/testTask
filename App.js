import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Restaurants } from './Components/Restaurant/Restaurants'
import { RestaurantOptionDetails } from './Components/Restaurant/RestaurantOptionDetails'
import { ApplicationDetails } from './Components/Application/ApplicationDetails.js'
import { StoreContext, storeDef } from './StoreContext'

const Stack = createStackNavigator()

export default function App() {
  const [store, setStore] = useState(storeDef)

  return (
    <StoreContext.Provider value={{store, setStore}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Restaurants'>
          <Stack.Screen name='Restaurants' component={Restaurants} />
          <Stack.Screen name='Details' component={RestaurantOptionDetails} />
          <Stack.Screen name='AppDetails' component={ApplicationDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreContext.Provider>
  );
}
