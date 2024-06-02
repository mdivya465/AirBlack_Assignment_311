import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const Contact = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://5.imimg.com/data5/ANDROID/Default/2022/3/UY/XX/WC/146103732/product-jpeg-500x500.jpg' }}
          style={styles.image}
        />
      </View>
      <Text style={styles.header}></Text>
      <View style={styles.addressContainer}>
        <Text style={styles.addressText}>Model of the Certificate</Text>
      </View>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    backgroundColor: 'black',
    alignItems: 'center', // Center align the contents horizontally
    justifyContent: 'center', // Center align the contents vertically
  },
  header: {
    color: "white",
    fontWeight: "700",
    fontSize: 20,
    marginTop: 20, // Add some spacing between the image and the header
  },
  imageContainer: {
    alignItems: "center", // Center align the image horizontally
    justifyContent: "center", // Center align the image vertically
  },
  image: {
    width: 600,
    height: 300,
    
  },
  addressContainer: {
    marginTop: 10, // Add some spacing between the header and the address
  },
  addressText: {
    color: "white",
    textAlign: 'center', // Center align the text
  },
});
