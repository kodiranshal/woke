import {
  View,
  TextInput,
  StyleSheet,
  Text,
  useWindowDimensions,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { IconButton } from "react-native-paper";
import { Ionicons } from "react-native-vector-icons";
import Carousel from "react-native-reanimated-carousel";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    gap: 10,
  },

  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "gray",
    padding: 10,
    gap: 10,
    flex: 1,
  },
  borderShadow: {
    borderRadius: 50,
    shadowColor: "gray",
    shadowOffset: { width: 2, height: 1 },
    shadowOpacity: 5,
    shadowRadius: 2,
    elevation: 5,
    borderTopWidth: 0,
    borderLeftWidth: 0.2,
    backgroundColor: "#f5f5f5",
  },
  imageCarousel: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },

  iconButton: {
    margin: 5,
    borderRadius: 10,
    backgroundColor: "white",
    width: 100,
    height: 100,
  },
});

export default function HomeScreen({ navigation }) {
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
    <View style={styles.mainContainer}>
      {/* SearchBar Componen */}
      <View style={styles.searchBarContainer}>
        <View style={[styles.searchBar, styles.borderShadow]}>
          <Ionicons name="search" size={12} />
          <TextInput placeholder="Mau cari barang apa" />
        </View>
        <IconButton icon="menu" />
      </View>

      {/* Carousel Componen */}
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

      {/* Category Componen */}
      <ScrollView horizontal>
        {Array.from(Array(5)).map(() => (
          <IconButton
            icon={({ color, size }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="home-outline" size={size} color={color} />
                <Text
                  style={{
                    fontSize: 12,
                  }}
                >
                  Home
                </Text>
              </View>
            )}
            style={styles.iconButton}
          />
        ))}
      </ScrollView>
    </View>
  );
}
