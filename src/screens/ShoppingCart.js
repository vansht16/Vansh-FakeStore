// src/screens/ShoppingCart.js
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Image, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart, addItemToCart, clearCart } from '../store/cartSlice';
import { createOrder } from '../store/orderSlice';

const ShoppingCart = ({ navigation }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      Alert.alert('Error', 'Your cart is empty');
      return;
    }
    const orderId = Date.now().toString(); // Simple unique order ID using timestamp
    dispatch(createOrder({ id: orderId, items: cartItems, totalAmount }));
    dispatch(clearCart());
    Alert.alert('Order Created', `Your order ID is ${orderId}`);
    navigation.navigate('MyOrders');
  };

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.img} />
      <View style={styles.cartItemDetails}>
        <Text style={styles.cartItemText}>{item.title}</Text>
        <Text style={styles.cartItemText}>Price: ${item.price}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => dispatch(removeItemFromCart(item.id))}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.cartItemText}>{item.quantity}</Text>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => dispatch(addItemToCart(item))}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {totalQuantity === 0 ? (
        <Text style={styles.emptyCartText}>Your shopping cart is empty</Text>
      ) : (
        <>
          <View style={styles.cartSummary}>
            <Text style={styles.cartSummaryText}>Items: {totalQuantity}</Text>
            <Text style={styles.cartSummaryText}>Total Price: ${totalAmount.toFixed(2)}</Text>
          </View>
          <FlatList
            data={cartItems}
            renderItem={renderCartItem}
            keyExtractor={(item) => item.id.toString()}
          />
          <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
            <Text style={styles.checkoutButtonText}>Check Out</Text>
          </TouchableOpacity>
        </>
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
  emptyCartText: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
  },
  cartSummary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#4da6ff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  cartSummaryText: {
    color: '#fff',
    fontSize: 18,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  img: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  cartItemText: {
    fontSize: 16,
  },
  cartItemDetails: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#4da6ff',
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  quantityButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  checkoutButton: {
    backgroundColor: '#4da6ff',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ShoppingCart;
