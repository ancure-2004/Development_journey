import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert, TouchableHighlight, Pressable, SafeAreaView, useColorScheme, ScrollView, FlatList, TextInput } from 'react-native'
import React, { useState } from 'react'

// const dummy = [
//   { id: 1, name: "Ankur", email: "ankur@gmail.com", image: "https://i.pinimg.com/736x/b0/f1/d7/b0f1d7a8bc7e34e3ff130244e1d540bd.jpg"},
//   { id: 2, name: "Ankur1", email: "ankur1@gmail.com", image: "https://i.pinimg.com/736x/b0/f1/d7/b0f1d7a8bc7e34e3ff130244e1d540bd.jpg"},
//   { id: 3, name: "Ankur2", email: "ankur2@gmail.com", image: "https://i.pinimg.com/736x/b0/f1/d7/b0f1d7a8bc7e34e3ff130244e1d540bd.jpg"},
//   { id: 4, name: "Ankur3", email: "ankur3@gmail.com", image: "https://i.pinimg.com/736x/b0/f1/d7/b0f1d7a8bc7e34e3ff130244e1d540bd.jpg"},
//   { id: 5, name: "Ankur4", email: "ankur4@gmail.com", image: "https://i.pinimg.com/736x/b0/f1/d7/b0f1d7a8bc7e34e3ff130244e1d540bd.jpg"},
//   { id: 6, name: "Ankur5", email: "ankur5@gmail.com", image: "https://i.pinimg.com/736x/b0/f1/d7/b0f1d7a8bc7e34e3ff130244e1d540bd.jpg"},
//   { id: 7, name: "Ankur6", email: "ankur6@gmail.com", image: "https://i.pinimg.com/736x/b0/f1/d7/b0f1d7a8bc7e34e3ff130244e1d540bd.jpg"},
//   { id: 8, name: "Ankur7", email: "ankur7@gmail.com", image: "https://i.pinimg.com/736x/b0/f1/d7/b0f1d7a8bc7e34e3ff130244e1d540bd.jpg"},
//   { id: 9, name: "Ankur8", email: "ankur8@gmail.com", image: "https://i.pinimg.com/736x/b0/f1/d7/b0f1d7a8bc7e34e3ff130244e1d540bd.jpg"},
//   { id: 10, name: "Ankur9", email: "ankur9@gmail.com", image: "https://i.pinimg.com/736x/b0/f1/d7/b0f1d7a8bc7e34e3ff130244e1d540bd.jpg"},
//   { id: 11, name: "Ankur10", email: "ankur10@gmail.com", image: "https://i.pinimg.com/736x/b0/f1/d7/b0f1d7a8bc7e34e3ff130244e1d540bd.jpg"},
//   { id: 12, name: "Ankur11", email: "ankur11@gmail.com", image: "https://i.pinimg.com/736x/b0/f1/d7/b0f1d7a8bc7e34e3ff130244e1d540bd.jpg"},
//   { id: 13, name: "Ankur12", email: "ankur12@gmail.com", image: "https://i.pinimg.com/736x/b0/f1/d7/b0f1d7a8bc7e34e3ff130244e1d540bd.jpg"},
//   { id: 14, name: "Ankur13", email: "ankur13@gmail.com", image: "https://i.pinimg.com/736x/b0/f1/d7/b0f1d7a8bc7e34e3ff130244e1d540bd.jpg"},
//   { id: 15, name: "Ankur14", email: "ankur14@gmail.com", image: "https://i.pinimg.com/736x/b0/f1/d7/b0f1d7a8bc7e34e3ff130244e1d540bd.jpg"},
//   { id: 16, name: "Ankur15", email: "ankur15@gmail.com", image: "https://i.pinimg.com/736x/b0/f1/d7/b0f1d7a8bc7e34e3ff130244e1d540bd.jpg"},
//   { id: 17, name: "Ankur16", email: "ankur16@gmail.com", image: "https://i.pinimg.com/736x/b0/f1/d7/b0f1d7a8bc7e34e3ff130244e1d540bd.jpg"},
//   { id: 18, name: "Ankur17", email: "ankur17@gmail.com", image: "https://i.pinimg.com/736x/b0/f1/d7/b0f1d7a8bc7e34e3ff130244e1d540bd.jpg"},
//   { id: 19, name: "Ankur18", email: "ankur18@gmail.com", image: "https://i.pinimg.com/736x/b0/f1/d7/b0f1d7a8bc7e34e3ff130244e1d540bd.jpg"},
//   { id: 20, name: "Ankur19", email: "ankur19@gmail.com", image: "https://i.pinimg.com/736x/b0/f1/d7/b0f1d7a8bc7e34e3ff130244e1d540bd.jpg"},
//   { id: 21, name: "Ankur21", email: "ankur20@gmail.com", image: "https://i.pinimg.com/736x/b0/f1/d7/b0f1d7a8bc7e34e3ff130244e1d540bd.jpg"},
//   { id: 22, name: "Ankur22", email: "ankur21@gmail.com", image: "https://i.pinimg.com/736x/b0/f1/d7/b0f1d7a8bc7e34e3ff130244e1d540bd.jpg"},
// ] 


const App = () => {

  const [text, setText] = useState('');
  const [submittedText, setsubmittedText] = useState('');
 
  const handleSubmit = () => {
    setsubmittedText(text);
    setText('');
  }

  function handleClear() {
    setsubmittedText('');
  }  


  // const theme = useColorScheme()
  // const isDarkMode = theme === 'dark';

  // const backgroundColor = isDarkMode ? "black" : "white";
  // const textColor = isDarkMode ? "white" : "dark";

  return (

    /* ---> Automatically add padding in ios notch*/
    // <SafeAreaView style= {styles.container}>
    //   <Text style={styles.text}>Hello Bhaiyo</Text>

    //   <Image 
    //     style={{width:200, height:300}}
    //     source={{uri:"https://i.pinimg.com/736x/b0/f1/d7/b0f1d7a8bc7e34e3ff130244e1d540bd.jpg"}}
    //   />

    //   {/* <TouchableOpacity style={{padding:10, backgroundColor:"green"}}
    //     onPress={() => Alert.alert("Presented!")}>
    //     <Text>Button</Text>
    //   </TouchableOpacity> */}

    //   {/* <TouchableHighlight style={{padding:10, backgroundColor:"green"}}
    //     onPress={() => Alert.alert("Presented!")}>
    //     <Text>Button</Text>
    //   </TouchableHighlight> */}

    //   <Pressable style={styles.button} >
    //     <Text style={styles.btnText}>Press Me</Text>
    //   </Pressable>   
    //   {/* Most powerful button component pressable */}
    // </SafeAreaView>


    // <ScrollView 
    //   contentContainerStyle= {{gap:10}}
    //   horizontal
    //   style={styles.container}>
    //   <View style={styles.box1}/>
    //   <View style={styles.box2}/>
    //   <View style={styles.box3}/>
    //   <View style={styles.box1}/>
    //   <View style={styles.box2}/>
    //   <View style={styles.box3}/>
    //   <View style={styles.box1}/>
    //   <View style={styles.box2}/>
    //   <View style={styles.box3}/>
    //   <View style={styles.box1}/>
    //   <View style={styles.box2}/>
    //   <View style={styles.box3}/>
    //   <View style={styles.box1}/>
    //   <View style={styles.box2}/>
    // </ScrollView>


    // <View style={styles.container}>
    //   <FlatList
    //     data={dummy}
    //     renderItem={({item}) => (
    //         <View style={styles.card}>
    //           <Image
    //             style={{width: 40, height: 40, borderRadius:50}}
    //             source={{uri: "https://i.pinimg.com/736x/eb/76/a4/eb76a46ab920d056b02d203ca95e9a22.jpg"}}/>
    //           <Text>Name</Text>
    //           <Text>Email</Text>
    //         </View>
    //     )}
    //     keyExtractor={item => item.id}
    //     ItemSeparatorComponent={<View style={{height: 10}}/>}
    //     numColumns={2}
    //     columnWrapperStyle={{gap:10}}
    //   />
    // </View>

    <View style={styles.container}>
      <Text style={styles.title}>Aur bhai, Swagat hain apka</Text>

      <TextInput
        style={styles.input}
        placeholder= 'Enter text here ....'
        value={text}
        onChangeText={setText}
        multiline
        numberOfLines={1}
      />

      <Button title='Submit' onPress={handleSubmit}></Button>
      {submittedText ? (<Text> Result: {submittedText}</Text>) : null}

      <Button title='Clear' onPress={handleClear}></Button>
    </View>

  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    gap: 10
  },

  title: {
    fontSize: 20,
    fontWeight: "500",
  },

  input: {
    width: "100%",
    padding: 5,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
  }
})

// const styles = StyleSheet.create({
//   container: {
//     width: "100%",
//     height: "100%",
//     backgroundColor: "#dadada",
//     paddingVertical: 10,
//     paddingHorizontal: 20
//   },

//   card: {
//     width: 100,
//     height: 100,
//     backgroundColor: "white",
//     borderRadius: 10,
//     padding: 5,
//     alignItems: "center",
//     justifyContent: "center",
//   }
// })

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor : "black",
//     padding: 10,
//     // flexDirection: "row",
//     // justifyContent: "center",
//     // alignItems: "center",
//     // //align items do not work with wrap
//     // alignContent: "center",
//     // flexWrap: "wrap",
//   },

//   box1: {
//     width: 80,
//     height: 80,
//     // alignSelf: "flex-end",
//     // flex: 1,
//     backgroundColor: "red",
//     borderRadius: 50,
//   },

//   box2: {
//     width: 80,
//     height: 80,
//     // flexGrow: 1,
//     // flex: 1,
//     backgroundColor: "yellow",
//     borderRadius: 50,

//   },

//   box3: {
//     width: 80,
//     height: 80,
//     // flex: 1,
//     backgroundColor: "green",
//     borderRadius: 50,
//   },
// })

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center"

//   },

//   text:{
//     fontSize: 20,
//     fontWeight: "bold",
//   }
// })

// const styles = StyleSheet.create({
//   container: {
//     widht: "100%",
//     height: "100%",
//     backgroundColor: "#ffff",
//     padding: 20,
//     gap:10
//   },

//   text:{
//     color: "black",
//     fontSize: 20,
//     fontWeight: "bold",
//   },
  
//   button:{
//     width: 120,
//     padding: 10,
//     backgroundColor: "#666",
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 50,
//     marginTop: 10,
//   },

//   btnText:{
//     color: "white",
//     fontWeight: "400",
//     fontSize: 16
//   }

// })