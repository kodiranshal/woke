import { View, Text, Linking, Platform } from "react-native";
import React from "react";
import { Card, IconButton } from "react-native-paper";
import { Ionicons } from "react-native-vector-icons";

export default function CardDiscoverItem({ item }) {
  return (
    <Card
      style={{
        overflow: "hidden",
      }}
    >
      <Card.Cover
        source={{ uri: item.image }}
        style={{
          height: 150,
          borderRadius: 0,
        }}
      />

      <Card.Content
        style={{
          padding: 16,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "500",
            }}
          >
            {item.title}
          </Text>
          <Text>{item.address}</Text>
        </View>
        <IconButton
          mode="outlined"
          onPress={
            () =>
              Linking.openURL(
                Platform.OS === "ios"
                  ? `maps://app?daddr=${item.coordinate.latitude}, ${item.coordinate.longitude}`
                  : `google.navigation:q = ${item.coordinate.latitude}, ${item.coordinate.longitude}`
              )
            // Linking.openURL("google.navigation:q=37.78825,-122.4324")
          }
          icon={() => <Ionicons size={24} name="locate" />}
        />
      </Card.Content>
    </Card>
  );
}
