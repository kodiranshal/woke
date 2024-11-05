import { Platform, StatusBar, StyleSheet } from "react-native";

const GlobalStyles = StyleSheet.create({
  safeAreaStyles: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  smallFont: {
    fontSize: 14,
    fontWeight: "400",
  },

  regularFont: {
    fontSize: 16,
    fontWeight: "400",
  },

  mediumFont: {
    fontSize: 18,
    fontWeight: "400",
  },

  largeFont: {
    fontSize: 22,
    fontWeight: "400",
  },

  superLargeFont: {
    fontSize: 28,
    fontWeight: "700",
  },
});

export default GlobalStyles;
