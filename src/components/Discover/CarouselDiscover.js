import { View, Text, Linking, Platform } from "react-native";
import React from "react";
import Carousel from "react-native-reanimated-carousel";
import { Card, IconButton } from "react-native-paper";
import { Ionicons } from "react-native-vector-icons";
import CardDiscoverItem from "./CardDiscoverItem";

export default function CarouselDiscover({
  scrollCarouselRef,
  markers,
  mapAnimation,
  mapRef,
  region,
  width,
}) {
  return (
    <Carousel
      ref={scrollCarouselRef}
      loop={false}
      style={{
        top: 20,
      }}
      width={width - 30}
      height={250}
      data={markers}
      onProgressChange={(progress) => {
        mapAnimation.setValue(Math.abs(progress));
      }}
      //scrollAnimationDuration={1000}
      onSnapToItem={(index) => {
        const { coordinate } = markers[index];

        mapRef.current.animateToRegion({
          ...coordinate,
          latitudeDelta: region.latitudeDelta,
          longitudeDelta: region.longitudeDelta,
        });
      }}
      renderItem={({ item }) => <CardDiscoverItem item={item} />}
    />
  );
}
