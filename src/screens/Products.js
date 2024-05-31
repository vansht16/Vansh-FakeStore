import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator, Image, ScrollView, TouchableOpacity } from "react-native";

const Products = ({ navigation, route }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const { category } = route.params;

  const fetchProducts = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{category[0].toUpperCase() + category.slice(1)}</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <ScrollView style={styles.productContainer}>
          {products.map((product) => (
            <TouchableOpacity
              key={product.id}
              style={styles.product}
              onPress={() => navigation.navigate("ProductDetail", { product })}
            >
              <Image source={{ uri: product.image }} style={styles.img} />
              <View style={styles.productDetails}>
                <Text style={styles.prodText}>{product.title}</Text>
                <Text style={styles.priceText}>Price: ${product.price}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f5f5", // Different background color
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
  productContainer: {
    width: "90%",
  },
  product: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  productDetails: {
    marginLeft: 10,
    justifyContent: "space-around",
  },
  img: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  prodText: {
    fontSize: 16,
    fontWeight: "500",
  },
  priceText: {
    fontSize: 14,
    color: "#888",
  },
  backButton: {
    backgroundColor: "#4da6ff", // Different button color
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  backButtonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default Products;
