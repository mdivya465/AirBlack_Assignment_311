import React from "react";
import { Text, View, StyleSheet,Button, ImageBackground,TouchableOpacity, Image } from "react-native";

const Footer = () => {
 return (
    <ImageBackground
      source={{ uri: 'https://t4.ftcdn.net/jpg/04/27/16/53/360_F_427165334_jusUtosgCuFGRDOUq0XUGaLJPUQc2YMb.jpg' }} // Replace with your image URL or local image
      style={styles.image}
    >
   <View style={styles.container}>
    <View>
       <Text style={styles.header}>Join Our Growing Community of 35,000+ alumini</Text>
      
     </View>
     <View style={styles.input_container}>
       <View>
         <Button title="Apply Now" color="rgba(255, 0, 104, 1)" />
       </View>
     </View>
   </View>
   <View style={styles.socialMedia}>
      <TouchableOpacity>
        <Image source={{ uri: 'https://static01.nyt.com/images/2016/05/11/us/12xp-instagram/12xp-instagram-articleLarge.jpg?quality=75&auto=webp&disable=upscale' }} style={styles.socialIcon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhwKa8fxff9AwcEvnQFbASe-Ugjolzow2Xmg&s' }} style={styles.socialIcon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={{ uri: 'https://images.template.net/100603/small-linkedin-icon-clipart-q5ttq.jpg' }} style={styles.socialIcon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={{ uri: 'https://img.freepik.com/premium-vector/twitter-global-social-media-networking-service-new-logo-twitter_944081-108.jpg' }} style={styles.socialIcon} />
      </TouchableOpacity>
    </View>
   </ImageBackground>
 );
};

export default Footer;

const styles = StyleSheet.create({
 container: {
   width: "100%",
   padding: 15,
   marginTop: 20,
 },
 image: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
 text_content: {
   color: "#fff",
   textAlign: "center",
   letterSpacing: "0.03rem",
   lineHeight: 20,
 },
 header: {
    color: "white",
    fontWeight: "700",
    fontSize: 20,
    textAlign: "center",
  },
  input_container: {
    width: "80%",
    textAlign: "center",
  },
  socialMedia: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  socialIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
});