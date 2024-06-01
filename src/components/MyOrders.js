// src/screens/MyOrders.js
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

const MyOrders = () => {
  const orders = useSelector((state) => state.orders.orders);

  const renderOrderItem = ({ item }) => (
    <View style={styles.orderItem}>
      <Text style={styles.orderId}>Order ID: {item.id}</Text>
      <Text style={styles.orderTotal}>Total Amount: ${item.totalAmount.toFixed(2)}</Text>
      {item.items.map((product) => (
        <View key={product.id} style={styles.productItem}>
          <Text style={styles.productTitle}>{product.title}</Text>
          <Text style={styles.productQuantity}>Quantity: {product.quantity}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {orders.length === 0 ? (
        <Text style={styles.emptyOrdersText}>No orders found</Text>
      ) : (
        <FlatList
          data={orders}
          renderItem={renderOrderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  emptyOrdersText: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
  },
  orderItem: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  orderId: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderTotal: {
    fontSize: 16,
    marginTop: 5,
  },
  productItem: {
    marginTop: 10,
  },
  productTitle: {
    fontSize: 14,
  },
  productQuantity: {
    fontSize: 14,
    color: '#888',
  },
});

export default MyOrders;
