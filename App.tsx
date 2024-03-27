import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from './component/Header';
import Body from './component/Body';
import Bottom from './component/Bottom';
import {Provider} from 'react-redux';
import {container} from './container'; //Đảm bảo bạn cấu hình store với redux tookit

const App = () => {
  return (
    <Provider store={container}>
      <SafeAreaView style={{flex: 1}}>
        <Header />
        <Body />
        <Bottom />
      </SafeAreaView>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
