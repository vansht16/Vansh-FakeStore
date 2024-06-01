// src/components/ShoppingCartTab.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';

const ShoppingCartTab = ({ color, size }) => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <View style={{ width: 24, height: 24, margin: 5 }}>
      <Ionicons name="md-cart" color={color} size={size} />
      {totalQuantity > 0 && (
        <View
          style={{
            position: 'absolute',
            right: -6,
            top: -3,
            backgroundColor: 'red',
            borderRadius: 6,
            width: 18,
            height: 18,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>
            {totalQuantity}
          </Text>
        </View>
      )}
    </View>
  );
};

export default ShoppingCartTab;
