import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {MyAccountScreen} from './src/Screens/MyAccountScreen';

function App(props) {
  return <MyAccountScreen IsLogedIn={true} />;
}

export default App;
