import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Strings} from '../../Ulitis/Strings';
import {MyAcountLogIn} from '../../Components/MyAcountLogIn';
import {MyAccountDetails} from '../../Components/MyAccountDetails';
import styles from './style';

export const MyAccountScreen = (props) => {
  return (
    <SafeAreaView>
      <View style={styles.TitleWrapper}>
        <Text style={styles.Title}>{Strings.MyAcountScreenTitle}</Text>
      </View>
      <MyAcountLogIn />
      <MyAccountDetails />
    </SafeAreaView>
  );
};
