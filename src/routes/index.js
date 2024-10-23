
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTabs from './tabs';
import DetailsScreen from '../views/screens/detail/DetailScreen';



const Stack = createNativeStackNavigator();


export default function Routes() {
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeTabs} />
              <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
   </NavigationContainer>
  );
}