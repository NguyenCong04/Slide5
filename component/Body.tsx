import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {addItem} from '../container';

const Body = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        onPress={() => {
          const newItem: any = {id: Math.random(), name: 'New product'};
          dispatch(addItem(newItem));
        }}
        style={{
          backgroundColor: '#D17842',
          height: 40,
          borderRadius: 8,
          alignItems: 'center',
          justifyContent: 'center',
          width: 180,
        }}>
        <Text style={{color: 'white'}}>Thêm vào giỏ hàng</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#D17842',
          height: 40,
          borderRadius: 8,
          alignItems: 'center',
          justifyContent: 'center',
          width: 180,
          marginTop: 15,
          marginBottom: 15,
        }}>
        <Text style={{color: 'white'}}>Clear giỏ hàng</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#D17842',
          height: 40,
          borderRadius: 8,
          alignItems: 'center',
          justifyContent: 'center',
          width: 180,
        }}>
        <Text style={{color: 'white'}}>Delete item giỏ hàng</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Body;

const styles = StyleSheet.create({});
