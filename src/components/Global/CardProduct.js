import { Text, StyleSheet } from "react-native";
import React from "react";
import { Card } from "react-native-paper";

const styles = StyleSheet.create({
  cardContainer: {
    width: 150,
    overflow: "hidden",
    marginRight: 15,
  },

  cardCoverImg: {
    borderRadius: 0,
    height: 150,
  },

  cardTextLabel: {
    fontWeight: "500",
    fontSize: 16,
  },
});

const furnitureJpg = require("../../../assets/furniture.jpg"); // Assuming the image is located in an assets folder. Replace with your actual image source.

export default function CardProduct() {
  return (
    <Card style={styles.cardContainer}>
      <Card.Cover style={styles.cardCoverImg} source={furnitureJpg} />
      <Card.Content
        style={{
          padding: 10,
        }}
      >
        <Text style={styles.cardTextLabel}>Sofa</Text>

        <Text>Rp. 1.000.000</Text>
      </Card.Content>
    </Card>
  );
}
