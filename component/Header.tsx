import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RootStates} from '../container';
import {useSelector} from 'react-redux';

const Header = () => {
  const cartItems = useSelector((state: RootStates) => state.cart.items);
  return (
    <SafeAreaView
      style={{
        flex: 0.12,
        backgroundColor: '#FEFEFE',
        elevation: 10,
        padding: 20,
      }}>
      <Text style={{fontSize: 20, color: 'black'}}>Giỏ hàng</Text>
      <Text>Số lượng: {cartItems.length}</Text>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({});
