import { View, Text } from 'react-native'
import React from 'react'
import Home from "./src/screens/Home";
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from './src/navigation/BottomNavigation';
const App = () => {
  return (
    <View style={{ flex: 1 }}>
   <BottomNavigator/>
    </View>
  )
}

export default App