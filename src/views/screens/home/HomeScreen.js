import {
  View,
  // TextInput,
  StyleSheet,
  // Text,
  useWindowDimensions,
  // Image,
  ScrollView,
  // FlatList,
  // Pressable,
} from "react-native";
import React from "react";
import { Card, IconButton } from "react-native-paper";
import { Ionicons } from "react-native-vector-icons";
// import Carousel from "react-native-reanimated-carousel";

import SearchBar from "../../../components/Global/SearchBar";
import CustomCarousel from "../../../components/Home/CustomCarousel";
import Category from "../../../components/Home/Category";
import AdsPromotion from "../../../components/Home/AdsPromotion";
import Popular from "../../../components/Home/Popular";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    gap: 10,
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
    <ScrollView>
      <View style={styles.mainContainer}>
        <SearchBar />
        <CustomCarousel />
        <Category />
        <AdsPromotion />
        <Popular />

        {/* Product Component */}
      </View>

      <View
        style={{
          marginTop: "15%",
        }}
      />
    </ScrollView>
  );
}
