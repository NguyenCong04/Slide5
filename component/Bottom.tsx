import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootStates} from '../container';

const Bottom = () => {
  const cartItems = useSelector((state: RootStates) => state.cart.items);
  console.log(cartItems.map((e: any) => e.name));

  return (
    <SafeAreaView style={{flex: 1, paddingHorizontal: 10, paddingVertical: 10}}>
      <FlatList
        data={cartItems.map((e: any) => e.name)}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                backgroundColor: '#00bcd2',
                padding: 20,
                marginBottom: 10,
                borderRadius: 10,
              }}>
              <Text style={{color: 'white', textAlign: 'center'}}>
                {item} {index + 1}
              </Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Bottom;

const styles = StyleSheet.create({});
