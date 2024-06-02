import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const Announcement = () => {
 return (
   <View style={styles.container}>
     
     <View style={styles.content_container}>
       <Text style={styles.content}>
         Get Certified From India's Biggest Platform
       </Text>
       <View style={styles.image}>
           <Image source={{ uri: 'https://5.imimg.com/data5/ANDROID/Default/2022/3/UY/XX/WC/146103732/product-jpeg-500x500.jpg' }} />
         </View>
     </View>
     <View>
       
       
     </View>
   </View>
 );
};

export default Announcement;

const styles = StyleSheet.create({
 container: {
   paddingVertical: 20,
   paddingHorizontal: 20,
   backgroundColor: 'black',
 },
 content_container: {
   marginTop: 20,
   alignItems: "center",
 },
 content: {
    color: "white",
   letterSpacing: "0.03rem",
   fontSize: 30,
 },
 image: {
  
   width: 100,
   height: 100,
   alignItems: "center",
   justifyContent: "center",
   
 },
 icon_box: {
   flexDirection: "row",
   marginVertical: 15,
 },
});