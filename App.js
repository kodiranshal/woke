import { View, Text } from 'react-native'
import React from 'react'
import CustomSafeArea from './src/components/CustomSafeArea'
import Routes from './src/routes'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function App() {
  return (
    <CustomSafeArea>
      <Routes />
   </CustomSafeArea>
  )
}