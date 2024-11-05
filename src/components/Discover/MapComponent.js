import { Animated, StyleSheet } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";

export default function MapComponent({
  mapRef,
  region,
  markers,
  onPressMarker,
  storeMarker,
  interpolations,
}) {
  return (
    <MapView
      ref={mapRef}
      initialRegion={region}
      style={StyleSheet.absoluteFillObject}
    >
      {markers.map((markers, index) => (
        <Marker
          key={index}
          coordinate={markers.coordinate}
          onPress={(e) => onPressMarker(e)}
        >
          <Animated.Image
            source={storeMarker}
            style={{
              transform: [{ scale: interpolations[index].scale }],
            }}
          />
        </Marker>
      ))}
    </MapView>
  );
}
