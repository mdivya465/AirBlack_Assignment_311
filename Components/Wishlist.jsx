import React from "react";
import { Text, View, StyleSheet, TextInput, Button, ImageBackground } from "react-native";

const Wishlist = () => {
 return (
    <ImageBackground
      source={{ uri: 'https://t4.ftcdn.net/jpg/04/27/16/53/360_F_427165334_jusUtosgCuFGRDOUq0XUGaLJPUQc2YMb.jpg' }} // Replace with your image URL or local image
      style={styles.image}
    >

   <View style={styles.container}>
     <View style={styles.header_container}>
       <Text style={styles.header_text}>Why Should You</Text>
       <Text style={styles.header_text_last}>Join Airblack ?</Text>
     </View>
     <View style={styles.content_container}>
       <Text style={styles.content}>
         Free Learning Platform
       </Text>
     </View>

     <View style={styles.input_container}>
       <View>
         <Button title="Apply Now" color="rgba(255, 0, 104, 1)" />
       </View>
     </View>
   </View>
   </ImageBackground>
 );
};

export default Wishlist;

const styles = StyleSheet.create({
 container: {
   width: "100%",
   height: 300,
   alignItems: "center",
   justifyContent: "center",
 },

 image: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },


 header_container: {
   width: "100%",
   alignItems: "center",
 },

 header_text: {
   color: "#fff",
   fontSize: 20,
   fontWeight: "600",
 },
 header_text_last: {
   color: "rgba(255, 0, 104, 1)",
   fontSize: 20,
   fontWeight: "600",
 },
 content_container: {
   width: " 70%",
   marginVertical: 20,
 },
 content: {
   color: "#fff",
   textAlign: "center",
 },
 input_container: {
   width: "80%",
   textAlign: "center",
 },
 input: {
   backgroundColor: "#fff",
   width: "50%",
   padding: 8,
   borderRadius: 5,
 },
});