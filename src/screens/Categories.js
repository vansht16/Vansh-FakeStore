import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator, TouchableOpacity } from "react-native";

const Categories = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products/categories");
      const data = await response.json();
      setCategories(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View style={styles.categoryContainer}>
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={styles.categoryButton}
              onPress={() => navigation.navigate("Products", { category })}
            >
              <Text style={styles.categoryText}>{category[0].toUpperCase() + category.slice(1)}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e6f2ff", // Different background color
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  categoryContainer: {
    width: "80%",
  },
  categoryButton: {
    backgroundColor: "#4da6ff", // Different button color
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  categoryText: {
    fontSize: 18,
    color: "#fff",
  },
});

export default Categories;
