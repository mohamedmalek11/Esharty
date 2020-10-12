import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Strings} from '../../Ulitis/Strings';
import {Colors} from '../../Ulitis/Colors';
import {Card} from '../Card';
import styles from './style';

export const AccountSetting = (props) => {
  return (
    <View>
      <Card style={styles.Container}>
        <View style={styles.Wrapper}>
          <View style={styles.TextWrapper}>
            <Text style={styles.AccDetailsText}>
              {Strings.MyAcountPersonName}
            </Text>
            <Text style={styles.AccDetailsText}>
              {Strings.MyAcountPersonMail}
            </Text>
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
