import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = ({navigation, route}) => {
  // const {id, name} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      {/* <Text style={styles.title}>id: {id}, name: {name} </Text> */}
      <Button title='Search' onPress={() => navigation.navigate("Search")}/>
    </View>
  )
}

export default Profile

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