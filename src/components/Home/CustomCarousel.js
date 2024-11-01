import { View, useWindowDimensions, Image, StyleSheet } from "react-native";
import React from "react";
import Carousel from "react-native-reanimated-carousel";

const styles = StyleSheet.create({
  imageCarousel: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});

export default function CustomCarousel() {
  const { width } = useWindowDimensions();

  const dataCarousel = [
    {
      id: 1,
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1688125414593-391cf90f3103?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1670076513880-f58e3c377903?q=80&w=1318&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <View style={{ alignItems: "center" }}>
      <Carousel
        loop={false}
        width={width - 30}
        height={200}
        data={dataCarousel}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <Image
            style={styles.imageCarousel}
            source={{
              uri: item.imageUrl,
            }}
          />
        )}
      />
    </View>
  );
}
