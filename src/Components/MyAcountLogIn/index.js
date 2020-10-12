import React from 'react';
import {View, Text, Image} from 'react-native';
import {Strings} from '../../Ulitis/Strings';
import {AppButton} from '../AppButton';
import {Card} from '../Card';
import styles from './style';

export const MyAcountLogIn = (props) => {
  return (
    <View>
      <Card style={styles.Container}>
        <View style={styles.Wrapper}>
          <View style={styles.TextWrapper}>
            <Text style={styles.GreetingText}>
              {Strings.MyAcountGreetingText}
            </Text>
            <AppButton
              title={Strings.MyAcountLogInText}
              WrapperStyle={styles.LogInText}
            />
          </View>
          <View style={styles.ImageWrapper}>
            <Image
              source={require('../../Assets/Images/User.png')}
              style={styles.Image}
            />
          </View>
        </View>
      </Card>
    </View>
  );
};
