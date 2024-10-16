import { Button, Text, View, StyleSheet, Image } from "react-native";
import { useAuth } from "../../hooks/Auth";
import { Banner } from "../../components/Banner";

export default function Home() {
 return (
  <View style={{flex:1}}>
     <Banner />
  </View>
 );
}