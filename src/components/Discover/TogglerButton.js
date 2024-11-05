import { View } from "react-native";
import React from "react";
import { IconButton } from "react-native-paper";

export default function TogglerButton({ isShowCarousel, onToggler }) {
  return (
    <View
      style={{
        alignItems: "flex-end",
      }}
    >
      <IconButton
        style={{
          backgroundColor: "#fff",
        }}
        icon={isShowCarousel ? "close" : "menu"}
        mode="contained"
        onPress={onToggler}
      />
    </View>
  );
}
