// src/screens/MyOrders.js
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

const MyOrders = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>My Orders</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});

export default MyOrders;
