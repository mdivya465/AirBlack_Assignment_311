import React from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";

const CTA = () => {
  return (
    <ImageBackground
      source={{ uri: 'https://t4.ftcdn.net/jpg/04/27/16/53/360_F_427165334_jusUtosgCuFGRDOUq0XUGaLJPUQc2YMb.jpg' }} // Replace with your image URL or local image
      style={styles.image}
    >
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.buyText}>AirBlack</Text>
          <Text style={styles.smallText}>beauty club</Text>
          <Text style={styles.terms}>PRESENTS </Text>

        </View>
        <View style={{ alignItems: "right" }}>
        <Text style={styles.text}>
    * India's No.1 Online Makeup Course
</Text>
<Text style={styles.text}>
    * Learn by LIVE Do-it-Together Classes
</Text>
<Text style={styles.text}>
    * Unlimited Practice Session to master skills
</Text>
</View>

        <View
          style={{
            marginTop: 20,
            width: "80%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={styles.button_container}>
            <View style={{ marginLeft: 5 }}>
              <Text style={styles.download}>Download on the</Text>
              <Text style={styles.appStore}>AppStore</Text>
            </View>
          </View>


          <View style={styles.button_container}>
            <View style={{ marginCenter: 5 }}>
              <Text style={styles.download}>Enroll now</Text>
            </View>
          </View>




          <View style={styles.button}>
            <View style={{ marginLeft: 5 }}>
              <Text style={styles.download}>Get it on</Text>
              <Text style={styles.appStore}>Google Play</Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default CTA;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 300,
    marginTop: 30,
    marginBottom: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  text: {
    color: "#fff",
    fontSize: 15,
    letterSpacing: 1,
  },
  buyText: {
    color: "#fff",
    fontSize: 25,
    letterSpacing: 1,
  },
  smallText: {
    color: "rgba(255, 0, 104, 1)",
    fontSize: 25,
    letterSpacing: 1,
    marginTop: 8,
  },
  terms: {
    color: "#fff",
    marginTop: 8,
    fontSize: 18,
  },
  button_container: {
    borderWidth: 1,
    borderColor: "#fff",
    flexDirection: "row",
    borderRadius: 5,
    padding: 5,
    alignItems: "center",
  },
  button: {
    borderWidth: 1,
    borderColor: "#fff",
    flexDirection: "row",
    borderRadius: 4,
    padding: 4,
    
    alignItems: "center",
  },
  download: {
    color: "#fff",
  },
  appStore: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
  googleImage: {
    width: 20,
    height: 20,
  },
});
