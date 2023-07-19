/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Title from './components/Title/Title';

const App = () => {
  return (
    <SafeAreaView>
      <Title title={"Let's Explore"} />
      <Text style={{fontFamily: 'Inter-Black'}}>Set Up</Text>
    </SafeAreaView>
  );
};

export default App;
