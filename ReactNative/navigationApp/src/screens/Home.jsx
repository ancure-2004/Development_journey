import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Profile from './Profile'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Button title='Profile' onPress={() => navigation.navigate("Profile", {id: 1, name: 'Ankur'})}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },

    title: {
        fontSize: 20,
        fontWeight: "500",
        marginBottom: 10
    }
})