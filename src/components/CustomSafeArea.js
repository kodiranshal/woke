import { SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import GlobalStyles from '../styles/GlobalStyles'

export default function CustomSafeArea ({ children }) {
    return <SafeAreaView style={GlobalStyles.safeAreaStyles}>{children}</SafeAreaView>;
}
 