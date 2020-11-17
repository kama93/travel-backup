import React from 'react';
import { Header } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';

import ImageMap from './image-map'

const HomeScreen = () => {
  return (
    <View>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'TRAVEL ADVICE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <ImageMap />
    </View>

  );
};

const styles = StyleSheet.create({
});

export default HomeScreen;
