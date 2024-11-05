import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import GlobalStyles from "../../../styles/GlobalStyles";
import { FlatList } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  cartItem: {
    marginHorizontal: 20,
    backgroundColor: "#ECECED",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  cartItemLeft: {
    margin: 0,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  cartItemImg: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },

  cartItemRight: {
    alignItems: "center",
    margin: 0,
    flexDirection: "row",
  },

  checkoutBtnContainer: {
    position: "absolute",
    bottom: 100,
    width: "100%",
  },

  checkoutButton: {
    marginHorizontal: 20,
    borderRadius: 10,
  },

  cartTrashButton: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#ECECED",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function CartScreen() {
  // Dummy Cart Item
  const DUMMY_CART_ITEMS = [
    {
      id: 1,
      name: "Lemari",
      price: 10,
      image: "https://picsum.photos/700",
      quantity: 1,
    },
    {
      id: 2,
      name: "Meja",
      price: 20,
      image: "https://picsum.photos/700",
      quantity: 1,
    },
    {
      id: 3,
      name: "Kursi",
      price: 30,
      image: "https://picsum.photos/700",
      quantity: 1,
    },
  ];

  const [data, setData] = useState[DUMMY_CART_ITEMS];

  const totalPrice = useMemo(
    () => data.reduce((acc, curr) => acc + item.price * curr.quantity, 0),
    [data]
  );

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== itemId));
  };

  return (
    <View>
      <Text
        style={{
          ...GlobalStyles.largeFont,
          marginVertical: 10,
          marginHorizontal: 20,
        }}
      >
        Cart
      </Text>
      <FlatList
        data={DUMMY_CART_ITEMS}
        renderItem={(item) => <Text> {item.item.name}</Text>}
      />
    </View>
  );
}
