// src/screens/SplashScreen.js
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';

const SplashScreen = ({ navigation }) => {
  const user = useSelector((state) => state.user);

  useEffect(() => {
    setTimeout(() => {
      if (user.isLoggedIn) {
        navigation.replace('Main');
      } else {
        navigation.replace('SignIn');
      }
    }, 1500);
  }, [user, navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgContainer}>
        <Text style={styles.title}>FAKE STORE</Text>
        <Image source={require('../../assets/splashImage.png')} style={styles.image} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffe6e6',
  },
  imgContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#333',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 450,
    resizeMode: 'contain',
  },
});

export default SplashScreen;
