import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity, ActivityIndicator } from "react-native";
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../store/cartSlice';

const ProductDetail = ({ navigation, route }) => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const { product: selectedProduct } = route.params;
  const dispatch = useDispatch();

  useEffect(() => {
    setProduct(selectedProduct);
    setLoading(false);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Product Details</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Image source={{ uri: product.image }} style={styles.img} />
          <Text style={styles.itemTitle}>{product.title}</Text>
          <View style={styles.itemInfo}>
            <Text style={styles.itemInfoText}>Rating: {product.rating?.rate}</Text>
            <Text style={styles.itemInfoText}>Sold: {product.rating?.count}</Text>
            <Text style={styles.itemInfoText}>Price: ${product.price}</Text>
          </View>
          <Text style={styles.descTitle}>Description</Text>
          <Text style={styles.descText}>{product.description}</Text>
        </ScrollView>
      )}
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
          <Text style={styles.btnText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => dispatch(addItemToCart(product))}>
          <Text style={styles.btnText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
  scrollContainer: {
    alignItems: "center",
  },
  img: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    backgroundColor: "#fff",
    marginVertical: 20,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  itemInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginVertical: 20,
  },
  itemInfoText: {
    fontSize: 16,
  },
  descTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  descText: {
    fontSize: 16,
    paddingHorizontal: 20,
    textAlign: "justify",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    padding: 20,
    backgroundColor: "#4da6ff",
  },
  btn: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    width: "45%",
  },
  btnText: {
    color: "#4da6ff",
    fontSize: 18,
  },
});

export default ProductDetail;
