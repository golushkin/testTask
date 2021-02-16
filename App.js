import React from 'react';
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Restaurants } from './Components/Restaurant/Restaurants'
import { RestaurantOptionDetails } from './Components/Restaurant/RestaurantOptionDetails'
import { ApplicationDetails } from './Components/Application/ApplicationDetails.js'
import { store } from './store/store'
import { getAppDetailsOptions, getDetailsOptions } from './NavigationOptions'
import { ErrorHandler } from './Components/ErrorHandler'

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <ErrorHandler>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Restaurants'>
            <Stack.Screen options={{ title: 'Restaurants list' }} name='Restaurants' component={Restaurants} />
            <Stack.Screen options={getDetailsOptions} name='Details' component={RestaurantOptionDetails} />
            <Stack.Screen options={getAppDetailsOptions} name='AppDetails' component={ApplicationDetails} />
          </Stack.Navigator>
        </NavigationContainer>
      </ErrorHandler>
    </Provider>
  );
}
