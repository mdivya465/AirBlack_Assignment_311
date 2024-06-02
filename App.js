import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import CTA from "./Components/CTA";
import Navbar from "./Components/Navbar";
import Terms from "./Components/Terms";
import Wishlist from "./Components/Wishlist";
import Announcement from "./Components/Announcement";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
export default function App() {
 return (
   <View style={styles.container}>
     <StatusBar style="auto" />
     <SafeAreaView>
       <ScrollView>
       <Navbar />
       <CTA />
       <Terms/>
       <Wishlist/>
       <Announcement/>
      <Contact/>
       <Footer/>
       </ScrollView>
     </SafeAreaView>
   </View>
 );
}

const styles = StyleSheet.create({
 container: { flex: 1 },
});