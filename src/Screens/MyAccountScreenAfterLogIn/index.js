import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Strings} from '../../Ulitis/Strings';
import {MyAccountAfterLogIn} from '../../Components/MyAccountAfterLogIn';
import {MyAccountDetailsAfterLogIn} from '../../Components/MyAccountDetailsAfterLogIn';
import styles from './style';

export const MyAccountScreenAfterLogIn = (props) => {
  return (
    <SafeAreaView>
      <View style={styles.TitleWrapper}>
        <Text style={styles.Title}>{Strings.MyAcountScreenTitle}</Text>
      </View>
      <MyAccountAfterLogIn />
      <MyAccountDetailsAfterLogIn />
    </SafeAreaView>
  );
};
