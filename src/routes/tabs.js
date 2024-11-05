import React from "react-native";
import { Ionicons } from "react-native-vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../views/screens/home/HomeScreen";
import DiscoverScreen from "../views/screens/home/DiscoverScreen";
import CartScreen from "../views/screens/home/CartScreen";

const Tabs = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          borderRadius: 15,
          height: 50,
        },
      }}
    >
      <Tabs.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />

      <Tabs.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "map" : "map-outline"}
              size={size}
              color={color}
            />
          ),
        }}
        name="Discover"
        component={DiscoverScreen}
      />

      <Tabs.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "cart" : "cart-outline"}
              size={size}
              color={color}
            />
          ),
        }}
        name="Cart"
        component={CartScreen}
      />
    </Tabs.Navigator>
  );
}
