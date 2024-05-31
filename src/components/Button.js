import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const Button = ({ text, style, onClickFn }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onClickFn}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#87CEEB",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  text: {
    color: "#fff",
    fontSize: 18,
  },
});

export default Button;
