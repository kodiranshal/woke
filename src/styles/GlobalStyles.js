import { Platform, StatusBar, StyleSheet } from "react-native";


export default GlobalStyles = StyleSheet.create({
    safeAreaStyles: {
        flex: 1,
        backgroundColor: "#f8f9fa",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
});