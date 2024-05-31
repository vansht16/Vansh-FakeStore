import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Categories");
    }, 1500);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgContainer}>
        <Text style={styles.title}>FAKE STORE</Text>
        <Image source={require("../../assets/splashImage.png")} style={styles.image} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffe6e6", // Different background color
  },
  imgContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#333",
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 450,
    resizeMode: "contain",
  },
});

export default SplashScreen;
