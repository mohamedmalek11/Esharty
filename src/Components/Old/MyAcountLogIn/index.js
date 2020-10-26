import React from 'react';
import {View, Text, Image} from 'react-native';
import {Strings} from '../../Ulitis/Strings';
import {AppButton} from '../AppButton';
import {Card} from '../Card';
import styles from './style';

export const MyAcountLogIn = (props) => {
  return (
    <View>
      <Card style={styles.MyAcountLogInContainer}>
        <View style={styles.MyAcountLogInWrapper}>
          <View style={styles.MyAcountLogInTextWrapper}>
            <Text style={styles.MyAcountLogInGreetingText}>
              {Strings.MyAcountGreetingText}
            </Text>
            <AppButton
              title={Strings.MyAcountLogInText}
              WrapperStyle={styles.MyAcountLogInLogInText}
            />
          </View>
          <View style={styles.MyAcountLogInImageWrapper}>
            <Image
              source={require('../../Assets/Images/User.png')}
              style={styles.MyAcountLogInImage}
            />
          </View>
        </View>
      </Card>
    </View>
  );
};
