import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Home, Calender, Mine } from '../screens';
import Customdrawer from './Customdrawer';
import { MORE_VERTICAL } from '../assets/images';
import { createDrawerNavigator } from '@react-navigation/drawer'; // Import createDrawerNavigator

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator(); // Create a drawer navigator

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={() => <Customdrawer />}> 
        <Drawer.Screen name="ToDo" component={TabNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

// Create a separate TabNavigator component
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Calender') {
            iconName = 'calendar'; // Corrected icon name
          } else if (route.name === 'Mine') {
            iconName = 'user'; // Corrected icon name
          } 

          return <Fontisto name={iconName} size={16} color={color} />;
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'blue',
        tabBarLabelStyle: {
          fontSize: 16,
        },
        tabBarStyle: {
          display: 'flex',
        },
      })}
    >
      
      <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: 'Home', headerShown: false }} />
      <Tab.Screen name="Calender" component={Calender} options={{ tabBarLabel: 'Calender', headerShown: false }} />
      <Tab.Screen name="Mine" component={Mine} options={{ tabBarLabel: 'Mine', headerShown: false }} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
