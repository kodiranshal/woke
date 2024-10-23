import React from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoriteScreen from '../views/screens/home/FavoriteScreen';
import HomeScreen from '../views/screens/home/HomeScreen';

const Tabs = createBottomTabNavigator();


export default function HomeTabs() {
  return (
     
          <Tabs.Navigator>
              <Tabs.Screen name="Home" component={HomeScreen} />
              <Tabs.Screen name="Favorite" component={FavoriteScreen} />
          </Tabs.Navigator>
   
  );
}