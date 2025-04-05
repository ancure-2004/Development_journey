import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './src/screens/Home'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Search from './src/screens/Search';
import Profile from './src/screens/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyStack = () => {
  return(
    <Stack.Navigator 
      initialRouteName='Home'
      screenOptions={{
        headerStyle:{backgroundColor: "yellow"}
      }}
    >
      <Stack.Screen 
        name='Search'
        component={Search} 
        options={{headerShown: false}}
      />

      <Stack.Screen
       name='Home'
       component={Home} 
       options={{title: "Home Screen", headerStyle:{backgroundColor: "red"}}}
      />

      <Stack.Screen 
       name='Profile' 
       component={Profile} 
      />

    </Stack.Navigator>
  )
}

function TabNavigator() {
  return(
    <Tab.Navigator
     initialRouteName='Home'
     screenOptions={{
      tabBarActiveTintColor: "red",
      tabBarInactiveTintColor: "black",
      tabBarLabelStyle: {
        fontSize: 12
      },
      tabBarStyle:{
        height: 60
      },


     }}
    > 
      <Tab.Screen
       name='Home' 
       component={Home}
       options={{
        tabBarIcon: () => (
          <Feather name="home" size={30} color="red" />
       )
      }}
      />

      <Tab.Screen
       name='Profile'
       component={Profile}
       options={{
        tabBarIcon: () => (
          <AntDesign name="user" size={30} color="red" />
       )
      }}
      />

      <Tab.Screen
       name='Search'
       component={Search}
       options={{
        tabBarIcon: () => (
          <AntDesign name="search1" size={30} color="red" />
       )
      }}
      />
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})