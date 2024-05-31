import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { Ionicons } from '@expo/vector-icons';

import SplashScreen from './src/screens/SplashScreen';
import Categories from './src/screens/Categories';
import Products from './src/screens/Products';
import ProductDetail from './src/screens/ProductDetail';
import ShoppingCart from './src/screens/ShoppingCart';
import ShoppingCartTab from './src/components/ShoppingCartTab';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function ProductStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={Categories} options={{ headerShown: false }} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Products"
        component={ProductStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-list" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={ShoppingCart}
        options={{
          tabBarIcon: ({ color, size }) => (
            <ShoppingCartTab color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
